# Gary English — 100 Days to Native 🔥

하루 1시간, 100일. 머릿속에 어렴풋이 있는 단어·문법을 **입에서 바로 튀어나오는 네이티브 표현**으로 바꾸는 개인용 영어 회화 앱.

## 왜 이렇게 설계했나

"알긴 아는데 말이 안 나오는" 상태의 해법은 문법 공부가 아니라 **덩어리(chunk) + 반복 + 실전 출력**이에요. 그래서 매일 60분을 이렇게 씁니다:

| 단계 | 시간 | 뭘 하나 | 왜 |
|---|---|---|---|
| 🔁 워밍업 복습 | 10분 | 어제·3일 전·일주일 전 표현을 카드로 떠올리기 (SM-2 간격 반복) | 잊기 직전에 다시 꺼내야 장기 기억이 됨 |
| 🧠 오늘의 표현 | 15분 | 네이티브 덩어리 8개 — 듣고, 뉘앙스 읽고, **마이크에 대고 따라 말하기** | 눈으로 보는 것과 입으로 내는 건 다른 근육 |
| ⚡ 반사신경 드릴 | 15분 | 상황→표현 고르기, 빈칸, **한국어→영어 8초 즉답** (콤보·XP) | 생각하지 않고 나오게 만드는 속도 훈련 |
| 🎭 실전 대화 | 15분 | Claude가 연기하는 네이티브와 오늘 미션 롤플레이. 말풍선 옆에 실시간 교정, 막히면 힌트 | 실제로 써봐야 붙음 |
| 🏁 마무리 | 5분 | AI 피드백 (점수·잘한 것·더 네이티브한 버전·보너스 표현), XP·스트릭 | 보상 + 내일 포인트 |

10일마다 **보스전** (지난 10일 표현 총동원하는 긴 상황극), 5개 Phase:

1. **Survival Flow** (1–20) — 리액션, 필러, 약속 잡기, 거절, 주문, 텍스팅
2. **Social & Casual** (21–40) — 슬랭, 파티, 가십, 데이팅, 인터넷 말투
3. **Storytelling & Emotion** (41–60) — 스토리텔링 흐름, 감정 표현, 사람·장소 묘사, 조언
4. **Work & Persuasion** (61–80) — 미팅, 상태 보고, 밀당, 협상, 면접, 갈등
5. **Native Flow** (81–100) — 이디엄, 비꼬기, 유머, 헤징, 구동사, 밈, 토론

총 800개 표현. 모두 교과서가 아니라 미국 20~30대가 실제로 쓰는 말.

## 설치 & 실행

```bash
npm install
npm run dev        # http://localhost:5173/gary-english/
```

빌드: `npm run build` → `dist/`

### GitHub Pages 배포 (폰에서 쓰려면)

1. 이 저장소 **Settings → Pages → Source: GitHub Actions**
2. `main`에 push하면 `.github/workflows/deploy.yml`이 자동 배포
3. `https://<계정>.github.io/gary-english/` 접속 → 폰 홈 화면에 추가

다른 경로로 호스팅하면 `VITE_BASE=/ npm run build`.

### API 키

설정 ⚙️ 에서 [Anthropic API 키](https://platform.claude.com/)를 넣으면 롤플레이·힌트·피드백이 켜져요. 키는 브라우저 localStorage에만 저장되고, 요청은 브라우저에서 Anthropic으로 직접 갑니다 (서버 없음). 표현 학습·드릴·복습은 키 없이도 됩니다.

기본 모델은 `claude-opus-5-5` (가장 자연스러운 대화). 하루 세션 비용은 대략 $0.10~0.30. 아끼려면 Sonnet/Haiku로 변경.

### 브라우저

- 🔊 읽어주기: 거의 모든 브라우저
- 🎤 음성 인식(따라 말하기·말하기 드릴·음성 대화): **Chrome, Edge, Safari**. 마이크 권한 허용 필요.

## 구조

```
src/
  content/phase1~5.ts   100일 콘텐츠 (Day → 8 chunks + roleplay)
  lib/srs.ts            간격 반복 스케줄러
  lib/drills.ts         드릴 자동 생성
  lib/ai.ts             Claude 롤플레이·힌트·피드백 (structured outputs)
  lib/speech.ts         TTS / STT
  stages/               WarmUp → Learn → Drill → Roleplay → WrapUp
  components/           Home, Library, FreeTalk, Review, Settings
scripts/check-content.ts  콘텐츠 검증 (npm run check:content)
```

진행 상황은 localStorage. 설정에서 JSON 내보내기/가져오기로 기기 간 이동.
