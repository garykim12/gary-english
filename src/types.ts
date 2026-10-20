/** 한 개의 "덩어리 표현" — 네이티브가 실제로 입에 달고 사는 말. */
export interface Chunk {
  /** "d01-1" 형식. day 두 자리-인덱스(1~8) */
  id: string;
  /** 표현 그 자체. 문장이면 문장 전체 (예: "I'm down."), 덩어리면 덩어리 (예: "kind of") */
  phrase: string;
  /** 한국어 뜻 — 사전식 번역이 아니라 "실제 뉘앙스"가 느껴지는 번역 */
  ko: string;
  /** 2줄짜리 미니 대화. 반드시 "A: ...\nB: ..." 형식. phrase가 그대로(대소문자/구두점 제외) 들어가야 함 */
  example: string;
  /** example의 한국어 번역, 같은 "A: ...\nB: ..." 형식 */
  exampleKo: string;
  /** 뉘앙스·쓰는 상황·주의점. 한국어, 1~2문장, 친구가 알려주듯 캐주얼하게 */
  note: string;
  /** 사용 톤 */
  register: "casual" | "slang" | "neutral" | "work";
}

export interface Roleplay {
  /** 장면 설명 — AI에게 주는 영어 지시. 장소/상황/분위기 2~3문장 */
  setting: string;
  /** AI가 연기할 인물. 이름 + 성격 + 말투 (영어) */
  aiRole: string;
  /** 사용자가 맡는 역할 (한국어, 한 줄) */
  userRoleKo: string;
  /** 사용자 미션 (한국어, 한 줄). 예: "오늘 배운 표현 3개 이상 써서 약속 잡기" */
  goalKo: string;
  /** AI의 첫 대사 (영어, 1~2문장, 자연스럽게 대화 시작) */
  opener: string;
}

export interface Day {
  /** 1~100 */
  day: number;
  /** 1~5 */
  phase: number;
  /** 영어 제목 (짧게, 예: "Reactions 101") */
  title: string;
  /** 한국어 제목/부제 (예: "리액션의 기본 — 놀랄 때, 맞장구칠 때") */
  titleKo: string;
  /** 오늘 왜 이걸 배우는지, 한국어 1~2문장. 동기부여 톤 */
  introKo: string;
  /** 정확히 8개 */
  chunks: Chunk[];
  roleplay: Roleplay;
  /** 10일마다 보스전 (day % 10 === 0) */
  boss?: boolean;
}

export interface Phase {
  phase: number;
  title: string;
  titleKo: string;
  days: Day[];
}
