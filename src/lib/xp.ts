export const XP = {
  warmupCard: 4,
  learnChunk: 6,
  shadowBonus: 4,
  drillCorrect: 8,
  drillStreakBonus: 3,
  roleplayTurn: 10,
  roleplayChunk: 15,
  dayComplete: 120,
  bossComplete: 250,
};

export const LEVELS: { xp: number; title: string; emoji: string }[] = [
  { xp: 0, title: "Tourist", emoji: "🧳" },
  { xp: 400, title: "Survivor", emoji: "🥤" },
  { xp: 1200, title: "Regular", emoji: "☕" },
  { xp: 2500, title: "Local", emoji: "🏘️" },
  { xp: 4500, title: "Insider", emoji: "🎧" },
  { xp: 7000, title: "Storyteller", emoji: "🎤" },
  { xp: 10000, title: "Smooth Talker", emoji: "😎" },
  { xp: 14000, title: "Office Pro", emoji: "💼" },
  { xp: 19000, title: "Banter King", emoji: "🔥" },
  { xp: 25000, title: "Native", emoji: "🦅" },
];

export function levelFor(xp: number) {
  let idx = 0;
  for (let i = 0; i < LEVELS.length; i++) if (xp >= LEVELS[i].xp) idx = i;
  const cur = LEVELS[idx];
  const next = LEVELS[idx + 1];
  const pct = next ? Math.min(1, (xp - cur.xp) / (next.xp - cur.xp)) : 1;
  return { level: idx + 1, ...cur, next, pct };
}

export interface Badge {
  id: string;
  emoji: string;
  title: string;
  desc: string;
}

export const BADGES: Badge[] = [
  { id: "first-day", emoji: "🌱", title: "첫 걸음", desc: "Day 1 완료" },
  { id: "streak-3", emoji: "🔥", title: "3일 연속", desc: "3일 스트릭" },
  { id: "streak-7", emoji: "🔥🔥", title: "일주일 생존", desc: "7일 스트릭" },
  { id: "streak-30", emoji: "🌋", title: "한 달의 사나이", desc: "30일 스트릭" },
  { id: "boss-1", emoji: "👑", title: "첫 보스 격파", desc: "Day 10 보스전 클리어" },
  { id: "phase-1", emoji: "🥤", title: "생존 완료", desc: "Phase 1 전부 완료" },
  { id: "phase-2", emoji: "🎉", title: "인싸 등극", desc: "Phase 2 전부 완료" },
  { id: "phase-3", emoji: "🎤", title: "이야기꾼", desc: "Phase 3 전부 완료" },
  { id: "phase-4", emoji: "💼", title: "오피스 프로", desc: "Phase 4 전부 완료" },
  { id: "phase-5", emoji: "🦅", title: "NATIVE", desc: "100일 완주!" },
  { id: "combo-10", emoji: "⚡", title: "10 콤보", desc: "드릴 10연속 정답" },
  { id: "talker-100", emoji: "🗣️", title: "수다쟁이", desc: "롤플레이 100턴" },
  { id: "speaker-200", emoji: "🎙️", title: "입이 트였다", desc: "말하기 200회" },
];
