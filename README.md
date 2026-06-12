# 한국 미술관 전시 캘린더

한국 주요 미술관의 전시 일정을 월별/주별로 확인할 수 있는 정적 HTML 캘린더입니다.

## 열람 방법

`index.html`을 브라우저에서 열면 바로 사용할 수 있습니다.

GitHub Pages에 배포하면 아래 형식의 주소로 어디서든 접속할 수 있습니다.

```text
https://echo-dev-beep.github.io/exhibition-calendar/
```

## 구성

- `index.html`: 페이지 구조
- `styles.css`: 화면 스타일
- `script.js`: 캘린더 동작
- `data/events.json`: 전시 일정 데이터
- `data/closures.json`: 미술관 휴관 일정 데이터
- `data/sources.json`: 공식 출처 URL과 자동 병합 설정
- `data/renewal-status.json`: 최근 갱신 시도 결과
- `scripts/renew-data.mjs`: JSON 갱신/정규화 스크립트
- `.github/workflows/renew-data.yml`: 매일 KST 정오 데이터 갱신 워크플로

## 기준일

전시 상태와 오늘/이번 주 표시는 매일 한국 시간 기준으로 업데이트 됩니다.

## 데이터 갱신

GitHub Actions 워크플로는 매일 03:00 UTC, 즉 한국 시간 정오에 실행되도록 설정되어 있습니다.
갱신 스크립트는 `data/sources.json`의 공식 출처를 확인하고, 출처별 성공/실패와 전시 후보 수를 `data/renewal-status.json`에 기록합니다.
전시 자동 병합은 출처별 `autoMergeEvents`가 `true`일 때만 수행됩니다. 기본값은 안전을 위해 `false`입니다.
휴관 일정은 공식 출처에서 정기 휴관 요일 키워드를 확인할 수 있으면 갱신하고, 실패하면 기존 JSON 값을 유지합니다.
