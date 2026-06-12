import { readFile, writeFile } from "node:fs/promises";

const files = {
  events: "data/events.json",
  closures: "data/closures.json",
  sources: "data/sources.json",
  status: "data/renewal-status.json"
};

const weekdayKeywords = [
  { day: 1, patterns: [/월요일/g, /매주\s*월/g, /Monday/gi] },
  { day: 2, patterns: [/화요일/g, /매주\s*화/g, /Tuesday/gi] },
  { day: 3, patterns: [/수요일/g, /매주\s*수/g, /Wednesday/gi] },
  { day: 4, patterns: [/목요일/g, /매주\s*목/g, /Thursday/gi] },
  { day: 5, patterns: [/금요일/g, /매주\s*금/g, /Friday/gi] },
  { day: 6, patterns: [/토요일/g, /매주\s*토/g, /Saturday/gi] },
  { day: 0, patterns: [/일요일/g, /매주\s*일/g, /Sunday/gi] }
];

function getKstTimestamp(date = new Date()) {
  const kst = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  const year = kst.getUTCFullYear();
  const month = String(kst.getUTCMonth() + 1).padStart(2, "0");
  const day = String(kst.getUTCDate()).padStart(2, "0");
  const hours = String(kst.getUTCHours()).padStart(2, "0");
  const minutes = String(kst.getUTCMinutes()).padStart(2, "0");
  const seconds = String(kst.getUTCSeconds()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+09:00`;
}

async function readJson(path) {
  return JSON.parse(await readFile(path, "utf8"));
}

async function writeJson(path, data) {
  await writeFile(path, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "user-agent": "exhibition-calendar-renewer/1.0 (+https://github.com/echo-dev-beep/exhibition-calendar)"
    },
    redirect: "follow"
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.text();
}

function cleanText(value) {
  return String(value || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function absoluteUrl(base, href) {
  try {
    return new URL(href, base).toString();
  } catch {
    return base;
  }
}

function normalizeDate(value) {
  const match = String(value).match(/(20\d{2})[.\-/년\s]+(\d{1,2})[.\-/월\s]+(\d{1,2})/);
  if (!match) return null;
  return `${match[1]}-${match[2].padStart(2, "0")}-${match[3].padStart(2, "0")}`;
}

function extractDateRange(text) {
  const dates = [...String(text).matchAll(/20\d{2}[.\-/년\s]+\d{1,2}[.\-/월\s]+\d{1,2}/g)]
    .map((match) => normalizeDate(match[0]))
    .filter(Boolean);
  if (dates.length < 2) return null;
  return { start: dates[0], end: dates[1] };
}

function extractAnchors(html, baseUrl) {
  const anchors = [];
  const pattern = /<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  while ((match = pattern.exec(html))) {
    const text = cleanText(match[2]);
    if (!text || text.length < 2) continue;
    anchors.push({ text, url: absoluteUrl(baseUrl, match[1]) });
  }
  return anchors;
}

function extractEventsFromHtml(html, source) {
  const anchors = extractAnchors(html, source.eventsUrl);
  const pageText = cleanText(html);
  return anchors
    .map((anchor) => {
      const title = anchor.text.replace(/\s*\d{4}[.\-/년\s]+\d{1,2}[.\-/월\s]+\d{1,2}.*$/, "").trim();
      const titleIndex = pageText.indexOf(anchor.text);
      const context = titleIndex >= 0 ? pageText.slice(titleIndex, titleIndex + 500) : anchor.text;
      const range = extractDateRange(context);
      if (!range || title.length < 2) return null;
      return {
        title,
        museum: source.museum,
        venue: source.name,
        start: range.start,
        end: range.end,
        url: anchor.url
      };
    })
    .filter(Boolean);
}

function eventKey(event) {
  return `${event.museum}::${event.title}`.toLowerCase();
}

function mergeEvents(existing, discovered) {
  const byKey = new Map(existing.map((event) => [eventKey(event), event]));
  for (const event of discovered) {
    const current = byKey.get(eventKey(event));
    byKey.set(eventKey(event), { ...(current || {}), ...event });
  }
  return [...byKey.values()];
}

function shouldAutoMergeEvents(source) {
  return source.autoMergeEvents === true;
}

function inferClosedWeekdays(text, fallback = []) {
  const compact = cleanText(text);
  if (/연중무휴|휴관\s*없음|open\s*all\s*year/i.test(compact)) return [];
  const found = new Set(fallback);
  for (const { day, patterns } of weekdayKeywords) {
    if (patterns.some((pattern) => pattern.test(compact))) found.add(day);
  }
  return [...found].sort((a, b) => a - b);
}

function normalizeEvents(data, updatedAt) {
  const events = [...(data.events || [])].sort((a, b) => {
    const dateOrder = String(a.start).localeCompare(String(b.start));
    if (dateOrder) return dateOrder;
    return String(a.title).localeCompare(String(b.title), "ko");
  });
  return { updatedAt, events };
}

function normalizeClosures(data, updatedAt) {
  const closures = [...(data.closures || [])].map((closure) => ({
    ...closure,
    closedWeekdays: closure.closedWeekdays || [],
    closedDates: closure.closedDates || []
  }));
  return { updatedAt, closures };
}

async function renewFromSources({ eventData, closureData, sources, updatedAt }) {
  const status = [];
  let events = eventData.events || [];
  const closureByMuseum = new Map((closureData.closures || []).map((closure) => [closure.museum, closure]));

  for (const source of sources) {
    const sourceStatus = { museum: source.museum, name: source.name, checkedAt: updatedAt, events: null, closures: null };

    try {
      const html = await fetchText(source.eventsUrl);
      const discovered = extractEventsFromHtml(html, source);
      if (shouldAutoMergeEvents(source) && discovered.length) events = mergeEvents(events, discovered);
      sourceStatus.events = {
        ok: true,
        url: source.eventsUrl,
        candidates: discovered.length,
        merged: shouldAutoMergeEvents(source) ? discovered.length : 0
      };
    } catch (error) {
      sourceStatus.events = { ok: false, url: source.eventsUrl, error: error.message };
    }

    try {
      const html = await fetchText(source.closuresUrl);
      const existing = closureByMuseum.get(source.museum) || { museum: source.museum, name: source.name };
      closureByMuseum.set(source.museum, {
        ...existing,
        name: source.name,
        closedWeekdays: inferClosedWeekdays(html, existing.closedWeekdays || []),
        closedDates: existing.closedDates || [],
        notes: "공식 출처 확인 기반. 임시 휴관일은 출처에서 구조화 가능할 때 closedDates에 반영됩니다."
      });
      sourceStatus.closures = { ok: true, url: source.closuresUrl };
    } catch (error) {
      sourceStatus.closures = { ok: false, url: source.closuresUrl, error: error.message };
    }

    status.push(sourceStatus);
  }

  return {
    events: normalizeEvents({ events }, updatedAt),
    closures: normalizeClosures({ closures: [...closureByMuseum.values()] }, updatedAt),
    status: { updatedAt, sources: status }
  };
}

const updatedAt = getKstTimestamp();
const eventData = await readJson(files.events);
const closureData = await readJson(files.closures);
const sourceData = await readJson(files.sources);

const renewed = await renewFromSources({
  eventData,
  closureData,
  sources: sourceData.sources || [],
  updatedAt
});

await writeJson(files.events, renewed.events);
await writeJson(files.closures, renewed.closures);
await writeJson(files.status, renewed.status);

console.log(`Renewed calendar data at ${updatedAt}`);
console.log(`Checked ${renewed.status.sources.length} sources`);
