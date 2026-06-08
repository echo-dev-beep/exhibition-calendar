const museums = [
  { id: "mmca-seoul", name: "국립현대미술관 서울관", area: "서울", color: "#111111", abbr: "MMCA" },
  { id: "mmca-gwacheon", name: "국립현대미술관 과천관", area: "과천", color: "#111111", abbr: "MMCA" },
  { id: "mmca-deoksu", name: "국립현대미술관 덕수궁관", area: "서소문/덕수궁", color: "#111111", abbr: "MMCA" },
  { id: "sema", name: "서울시립미술관", area: "SeMA", color: "#e74336", abbr: "SeMA" },
  { id: "ilmin", name: "일민미술관", area: "광화문", color: "#222222", abbr: "일민" },
  { id: "daelim", name: "대림미술관", area: "서촌", color: "#0066b3", abbr: "대림" },
  { id: "pompidou", name: "퐁피두센터 한화", area: "여의도", color: "#ef3e42", abbr: "퐁피두" },
  { id: "dmuseum", name: "디뮤지엄", area: "서울숲", color: "#ff6f00", abbr: "디뮤" },
  { id: "leeum", name: "리움미술관", area: "한남동", color: "#5b5b5b", abbr: "리움" }
];

const events = [
  {
    title: "데이미언 허스트",
    museum: "mmca-seoul",
    venue: "서울 지하1층, 3-5전시실, 서울박스, MMCA 스튜디오",
    start: "2026-03-20",
    end: "2026-06-28",
    url: "https://www.mmca.go.kr/exhibitions/exhibitionsDetail.do?exhId=202601060002023"
  },
  {
    title: "데이미언 허스트와 YBA",
    museum: "mmca-seoul",
    venue: "서울 MMCA영상관",
    start: "2026-04-01",
    end: "2026-06-06",
    url: "https://www.mmca.go.kr/exhibitions/exhibitionsDetail.do?exhFlag=1&exhId=202601060002025"
  },
  {
    title: "MMCA 다원예술 2026: 탐정의 시간",
    museum: "mmca-seoul",
    venue: "서울 MMCA 다원공간",
    start: "2026-04-01",
    end: "2026-12-06",
    url: "https://www.mmca.go.kr/exhibitions/exhibitionsDetail.do?exhId=202601060002024"
  },
  {
    title: "그래도 해보던 날들",
    museum: "mmca-seoul",
    venue: "서울 MMCA 아이공간",
    start: "2026-04-17",
    end: "2026-08-30",
    url: "https://www.mmca.go.kr/exhibitions/exhibitionsDetail.do?exhFlag=1&exhId=202603300002070"
  },
  {
    title: "로드 무비: 1945년 이후 한·일 미술",
    museum: "mmca-gwacheon",
    venue: "과천",
    start: "2026-05-14",
    end: "2026-09-27",
    url: "https://www.mmca.go.kr/"
  },
  {
    title: "MMCA 과천 상설전 «한국근현대미술 I»",
    museum: "mmca-gwacheon",
    venue: "과천",
    start: "2026-04-22",
    end: "2027-06-27",
    url: "https://www.mmca.go.kr/"
  },
  {
    title: "MMCA 과천 상설전 «한국근현대미술 II»",
    museum: "mmca-gwacheon",
    venue: "과천",
    start: "2026-04-22",
    end: "2027-06-27",
    url: "https://www.mmca.go.kr/"
  },
  {
    title: "MMCA 해외 명작: 수련과 샹들리에",
    museum: "mmca-gwacheon",
    venue: "과천",
    start: "2025-10-02",
    end: "2027-01-03",
    url: "https://www.mmca.go.kr/"
  },
  {
    title: "2026 한국 근대 거장전 《유영국: 산은 내 안에 있다》",
    museum: "sema",
    venue: "서소문본관",
    start: "2026-05-19",
    end: "2026-10-25",
    url: "https://sema.seoul.go.kr/kr/whatson/landing"
  },
  {
    title: "난지미술창작스튜디오 20주년 기념전 《사랑의 기원》",
    museum: "sema",
    venue: "서소문본관 2-3층",
    start: "2026-04-30",
    end: "2026-09-06",
    url: "https://sema.seoul.go.kr/en/whatson/exhibition/detail?acadmyEeNo=0&evtNo=0&exNo=1526751&glolangType=ENG"
  },
  {
    title: "Inaugural Exhibition - New Media Collection",
    museum: "sema",
    venue: "서울시립 서서울미술관",
    start: "2026-05-14",
    end: "2026-07-26",
    url: "https://sema.seoul.go.kr/en/whatson/exhibition/detail?exNo=1536015"
  },
  {
    title: "2026 SeMA-프로젝트 A",
    museum: "sema",
    venue: "서울시립 미술아카이브 옥상정원",
    start: "2026-05-20",
    end: "2026-12-31",
    url: "https://sema.seoul.go.kr/semaaa/front/program/view.do?menuId=10&pageIndex=1&proSeq=177&proType=002"
  },
  {
    title: "《오프 더 화이트: 주름과 망루》",
    museum: "ilmin",
    venue: "1전시실",
    start: "2026-05-01",
    end: "2026-07-12",
    url: "https://ilmin.org/exhibition/2026_off-the-white-1/"
  },
  {
    title: "《비트린: 김나영 & 그레고리 마스》",
    museum: "ilmin",
    venue: "야외 비트린",
    start: "2026-04-20",
    end: "2026-07-20",
    url: "https://ilmin.org/program/2026_04_sp_vitrine_nayoungim-gregory-maass/"
  },
  {
    title: "《기.기.기: 동시대와 시행착오》",
    museum: "ilmin",
    venue: "2, 3전시실 및 프로젝트 룸",
    start: "2026-04-01",
    end: "2026-05-31",
    url: "https://ilmin.org/exhibition/2026_gi-gi-gi/"
  },
  {
    title: "페트라 콜린스: fangirl",
    museum: "daelim",
    venue: "대림미술관",
    start: "2025-08-29",
    end: "2026-02-15",
    url: "https://daelimmuseum.org/ticket/reservation/PRG202508130001"
  },
  {
    title: "큐비스트: 시각의 혁신가들",
    museum: "pompidou",
    venue: "퐁피두센터 한화",
    start: "2026-06-04",
    end: "2026-10-04",
    url: "https://www.centrepompidou-hanwha.kr/"
  },
  {
    title: "취향가옥 2: Art in Life, Life in Art 2",
    museum: "dmuseum",
    venue: "디뮤지엄",
    start: "2025-06-28",
    end: "2026-02-22",
    url: "https://www.daelimmuseum.org/ticket/reservation/PRG202506050001"
  },
  {
    title: "다른 공간 안으로: 여성 작가들의 공감각적 환경 1956-1976",
    museum: "leeum",
    venue: "블랙박스, 그라운드갤러리",
    start: "2026-05-05",
    end: "2026-11-29",
    url: "https://www.leeumhoam.org/leeum/exhibition/93"
  },
  {
    title: "티노 세갈",
    museum: "leeum",
    venue: "M2, 로비",
    start: "2026-03-03",
    end: "2026-06-28",
    url: "https://www.leeumhoam.org/leeum/exhibition/92?params=Y"
  },
  {
    title: "가브리엘 오로즈코 정원",
    museum: "leeum",
    venue: "야외",
    start: "2026-04-03",
    end: "2026-12-31",
    url: "https://www.leeumhoam.org/leeum?lang2=kor"
  },
  {
    title: "In the Middle Voice: 다섯 개의 움직임",
    museum: "leeum",
    venue: "M2 2층과 야외",
    start: "2025-11-25",
    end: "2026-07-31",
    url: "https://www.leeumhoam.org/leeum?lang2=kor"
  }
];

const state = {
  view: "month",
  spotlight: "today",
  cursor: new Date(2026, 5, 8),
  selected: new Set(museums.map((museum) => museum.id))
};

const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
const today = stripTime(new Date(2026, 5, 8));

function qs(id) {
  return document.getElementById(id);
}

function parseDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function stripTime(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function startOfWeek(date) {
  return addDays(stripTime(date), -date.getDay());
}

function endOfWeek(date) {
  return addDays(startOfWeek(date), 6);
}

function formatDate(date) {
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
}

function eventStatus(event) {
  const start = parseDate(event.start);
  const end = parseDate(event.end);
  if (today < start) return "future";
  if (today > end) return "past";
  return "current";
}

function museumById(id) {
  return museums.find((museum) => museum.id === id);
}

function overlaps(event, rangeStart, rangeEnd) {
  return parseDate(event.start) <= rangeEnd && parseDate(event.end) >= rangeStart;
}

function buildFilters() {
  const container = qs("museumFilters");
  container.innerHTML = museums
    .map((museum) => {
      const count = events.filter((event) => event.museum === museum.id).length;
      return `
        <label class="filter-item">
          <input type="checkbox" data-museum="${museum.id}" checked />
          <span class="museum-name">
            <strong>${museum.name}</strong>
            <small>${museum.area}${count ? ` · ${count}건` : " · 수집된 전시 없음"}</small>
          </span>
          <span class="museum-dot" style="background:${museum.color}"></span>
        </label>
      `;
    })
    .join("");

  container.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", (event) => {
      const id = event.target.dataset.museum;
      if (event.target.checked) state.selected.add(id);
      else state.selected.delete(id);
      render();
    });
  });
}

function visibleEvents() {
  return events
    .filter((event) => state.selected.has(event.museum))
    .sort((a, b) => parseDate(a.start) - parseDate(b.start) || a.title.localeCompare(b.title, "ko"));
}

function render() {
  qs("todayLabel").textContent = `오늘 기준 ${formatDate(today)}`;
  qs("monthViewBtn").classList.toggle("active", state.view === "month");
  qs("weekViewBtn").classList.toggle("active", state.view === "week");
  qs("todayTabBtn").classList.toggle("active", state.spotlight === "today");
  qs("weekTabBtn").classList.toggle("active", state.spotlight === "week");
  if (state.view === "month") renderMonth();
  else renderWeek();
  renderSpotlightPanel();
  renderSummary();
}

function renderSpotlightPanel() {
  const weekStart = startOfWeek(today);
  const weekEnd = endOfWeek(today);
  const isToday = state.spotlight === "today";
  const spotlightEvents = visibleEvents().filter((event) =>
    isToday ? overlaps(event, today, today) : overlaps(event, weekStart, weekEnd)
  );
  qs("spotlightEyebrow").textContent = isToday ? "Today" : "This Week";
  qs("spotlightTitle").textContent = isToday ? "오늘의 전시" : "이번 주 전시";
  qs("spotlightCount").textContent = `${spotlightEvents.length}건`;
  qs("spotlightRange").textContent = isToday ? formatDate(today) : `${formatDate(weekStart)} - ${formatDate(weekEnd)}`;
  qs("spotlightExhibitions").innerHTML = spotlightEvents.length
    ? spotlightEvents
        .map((event) => {
          const museum = museumById(event.museum);
          return `
            <a class="spotlight-item" href="${event.url}" target="_blank" rel="noreferrer" style="--bar:${museum.color}">
              <h3>${event.title}</h3>
              <p>${museum.name} · ${event.venue}</p>
              <p>${event.start} - ${event.end}</p>
            </a>
          `;
        })
        .join("")
    : `<p class="note">선택한 미술관 중 표시할 전시가 없습니다.</p>`;
}

function renderSummary() {
  const selectedEvents = visibleEvents();
  qs("visibleCount").textContent = selectedEvents.length;
  qs("ongoingCount").textContent = selectedEvents.filter((event) => eventStatus(event) === "current").length;
  qs("venueCount").textContent = state.selected.size;
}

function renderMonth() {
  const year = state.cursor.getFullYear();
  const month = state.cursor.getMonth();
  const first = new Date(year, month, 1);
  const gridStart = startOfWeek(first);
  qs("rangeTitle").textContent = `${year}년 ${month + 1}월`;
  const days = Array.from({ length: 42 }, (_, index) => {
    const date = addDays(gridStart, index);
    return renderMonthDay(date, month);
  }).join("");

  qs("calendar").className = "calendar month-view";
  qs("calendar").innerHTML = `<div class="weekday-head">${weekdays.map((day) => `<span>${day}</span>`).join("")}</div><div class="month-grid">${days}</div>`;
}

function renderWeek() {
  const weekStart = startOfWeek(state.cursor);
  const weekEnd = endOfWeek(state.cursor);
  qs("rangeTitle").textContent = `${formatDate(weekStart)} - ${formatDate(weekEnd)}`;
  qs("calendar").className = "calendar week-view";
  qs("calendar").innerHTML = `<div class="weekday-head">${weekdays.map((day) => `<span>${day}</span>`).join("")}</div>${renderWeekCard(
    weekStart,
    weekEnd,
    state.cursor.getMonth(),
    weekStart
  )}`;
}

function renderMonthDay(date, activeMonth) {
  const classes = ["month-day"];
  if (date.getMonth() !== activeMonth) classes.push("out");
  if (date.getTime() === today.getTime()) classes.push("today");
  const dayEvents = visibleEvents().filter((event) => overlaps(event, date, date));
  const dayMuseums = museums
    .filter((museum) => state.selected.has(museum.id))
    .map((museum) => {
      const museumEvents = dayEvents.filter((event) => event.museum === museum.id);
      if (!museumEvents.length) return "";
      const title = museumEvents.map((event) => event.title).join(" / ");
      return `<a class="day-dot" href="${museumEvents[0].url}" target="_blank" rel="noreferrer" style="--dot:${museum.color}" title="[${museum.abbr}] ${title}"></a>`;
    })
    .join("");
  const dateValue = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  return `<div class="${classes.join(" ")}" data-date="${dateValue}" role="button" tabindex="0" aria-label="${formatDate(date)} 주간 달력 보기"><span class="day-num">${date.getDate()}</span><div class="day-dots">${dayMuseums}</div></div>`;
}

function renderWeekCard(weekStart, weekEnd, activeMonth, rangeStart) {
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = addDays(weekStart, index);
    const classes = ["day-cell"];
    if (date.getMonth() !== activeMonth) classes.push("out");
    if (date.getTime() === today.getTime()) classes.push("today");
    return `<div class="${classes.join(" ")}"><span class="day-num">${date.getDate()}</span></div>`;
  }).join("");

  const bars = visibleEvents()
    .filter((event) => overlaps(event, weekStart, weekEnd))
    .map((event) => {
      const museum = museumById(event.museum);
      const startIndex = Math.max(0, Math.floor((parseDate(event.start) - weekStart) / 86400000));
      const endIndex = Math.min(6, Math.floor((parseDate(event.end) - weekStart) / 86400000));
      const status = eventStatus(event);
      const firstVisibleDate = parseDate(event.start) > rangeStart ? parseDate(event.start) : rangeStart;
      const showLabel = firstVisibleDate >= weekStart && firstVisibleDate <= weekEnd;
      const label = showLabel
        ? `<span class="event-icon" aria-hidden="true"></span><span>[${museum.abbr}] ${event.title}</span>`
        : "";
      return `<a class="event-bar ${status === "current" ? "current" : "muted"} ${showLabel ? "" : "continuation"}"
        href="${event.url}" target="_blank" rel="noreferrer"
        style="grid-column:${startIndex + 1}/${endIndex + 2}; --bar:${museum.color}; background:${museum.color}"
        title="${museum.name} · ${event.title}">
        ${label}
      </a>`;
    })
    .join("");

  return `<div class="week-card"><div class="days">${days}</div><div class="bars">${bars || "<span></span>"}</div></div>`;
}

qs("prevBtn").addEventListener("click", () => {
  if (state.view === "month") state.cursor = new Date(state.cursor.getFullYear(), state.cursor.getMonth() - 1, 1);
  else state.cursor = addDays(state.cursor, -7);
  render();
});

qs("nextBtn").addEventListener("click", () => {
  if (state.view === "month") state.cursor = new Date(state.cursor.getFullYear(), state.cursor.getMonth() + 1, 1);
  else state.cursor = addDays(state.cursor, 7);
  render();
});

qs("todayBtn").addEventListener("click", () => {
  state.cursor = new Date(today);
  render();
});

qs("monthViewBtn").addEventListener("click", () => {
  state.view = "month";
  render();
});

qs("weekViewBtn").addEventListener("click", () => {
  state.view = "week";
  render();
});

qs("todayTabBtn").addEventListener("click", () => {
  state.spotlight = "today";
  render();
});

qs("weekTabBtn").addEventListener("click", () => {
  state.spotlight = "week";
  render();
});

qs("sidebarToggle").addEventListener("click", () => {
  document.body.classList.toggle("sidebar-collapsed");
  const collapsed = document.body.classList.contains("sidebar-collapsed");
  qs("sidebarToggle").textContent = collapsed ? "›" : "‹";
  qs("sidebarToggle").setAttribute("aria-label", collapsed ? "좌측 패널 펼치기" : "좌측 패널 접기");
});

qs("calendar").addEventListener("click", (event) => {
  if (event.target.closest("a")) return;
  const day = event.target.closest(".month-day[data-date]");
  if (!day) return;
  state.cursor = parseDate(day.dataset.date);
  state.view = "week";
  render();
});

qs("calendar").addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const day = event.target.closest(".month-day[data-date]");
  if (!day) return;
  event.preventDefault();
  state.cursor = parseDate(day.dataset.date);
  state.view = "week";
  render();
});

qs("selectAll").addEventListener("click", () => {
  const allSelected = state.selected.size === museums.length;
  state.selected = new Set(allSelected ? [] : museums.map((museum) => museum.id));
  document.querySelectorAll("[data-museum]").forEach((input) => {
    input.checked = !allSelected;
  });
  render();
});

buildFilters();
render();
