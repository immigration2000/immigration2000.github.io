# 이민수 · Unreal Engine Portfolio

채용 담당자를 위한 개인 포트폴리오입니다.

- 사이트: https://immigration2000.github.io/
- GitHub: https://github.com/immigration2000
- 구성: HTML / CSS / JavaScript, 외부 라이브러리·분석 추적·빌드 단계 없음
- 프로젝트 확인 기준: 2026-11-26

## 로컬에서 보기

이 폴더에서 `python -m http.server 4173 --bind 127.0.0.1`을 실행하고 http://127.0.0.1:4173/ 에 접속합니다.
`index.html`을 직접 열어도 핵심 내용과 배치 데모를 볼 수 있습니다. 이메일 복사는 브라우저의 보안 컨텍스트와 권한에 따라 달라집니다.

## 수정 위치

- `index.html`: 소개, 기술, 프로젝트, 연락처
- `styles.css`: 색상, 레이아웃, 모바일·인쇄 화면
- `app.js`: 설명용 인벤토리 데모와 이메일 복사
- `favicon.svg`: 사이트 아이콘

## GitHub Pages

저장소 이름을 `immigration2000.github.io`로 두고, Settings → Pages → Deploy from a branch → `main` / `/ (root)`로 설정합니다. `.nojekyll`로 정적 파일을 그대로 제공합니다.

## 내용의 근거와 공개 범위

- 공개 소스 프로젝트: `haptic-sync-platform`, `ue-repo-reader`. 웹페이지에서 원본 저장소로 연결합니다.
- 비공개 프로젝트: `Grid-based-Inventory-System`, `DeltaForceSystem`. 개략적인 설명만 담으며 비공개 코드·에셋·분석 산출물은 포함하지 않습니다. 기존 저장소의 공개 설정은 바꾸지 않습니다.
- XR·물리·Serial 실무 경험은 이전 경력 정리에 근거한 설명입니다. 회사명, 회사 소스, 사진, 정확한 근무 기간은 포함하지 않았습니다.
- 소스 정적 확인은 실제 실행·성능·출시·독립 구현 능력의 검증과 다릅니다. 각 프로젝트에 검증 한계를 표시합니다.
- ASP.NET Core / EF Core / MSSQL은 로컬 학습용 구현으로 표시합니다. 운영용 서버 경험으로 확장해 주장하지 않습니다.
- 인벤토리 브라우저 데모와 모든 도식은 이 페이지의 설명을 위해 별도로 만든 것으로, UE 원본 화면이 아닙니다.
- 연락처 공개 의사를 확인한 이름과 GitHub 연결 이메일을 사용했습니다.

## 보완 프로젝트 제안 — 아직 구현하지 않은 계획

1. **`xr-physics-interaction-lab`** — 새 개인 프로젝트에서 집기·양손 조작·물리 제약을 구현하고, Quest에서 재현 영상·충돌 예외·튜닝 전후를 기록. 기존 회사 자료의 공개 권한에 의존하지 않고 XR 역량을 증명할 수 있습니다.
2. **`inventory-authority-lab`** — 현재 인벤토리를 확장해 서버에서 크기·겹침·소유권을 검증. 두 클라이언트의 동시 저장과 HTTP 409 이후 복구를 재현. 로컬 스냅샷 저장과 서버 권한 검증의 차이를 보여 줍니다.
3. **`device-sync-bench`** — 가상 디바이스와 실제 Serial 장치를 교체할 수 있는 측정 도구. 탐색·일시정지·배속·연결 해제에서 명령 시각과 오차를 CSV로 기록. 측정 전에는 지연 수치나 호환성을 주장하지 않습니다.

추천 저장소 이름: 포트폴리오 메인은 **`immigration2000.github.io`**, 별도 실험 모음이 필요하면 `UnrealSystemsLab` 또는 `GameEngineeringLab`.
