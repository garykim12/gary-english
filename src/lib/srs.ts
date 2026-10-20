import type { SrsCard } from "./storage";
import { todayKey } from "./storage";

export type Grade = 0 | 1 | 2 | 3; // 0 다시, 1 어려움, 2 좋음, 3 쉬움

function addDays(key: string, n: number): string {
  const [y, m, d] = key.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + n));
  return `${dt.getUTCFullYear()}-${String(dt.getUTCMonth() + 1).padStart(2, "0")}-${String(dt.getUTCDate()).padStart(2, "0")}`;
}

export function newCard(id: string, today = todayKey()): SrsCard {
  return { id, interval: 1, ease: 2.5, due: addDays(today, 1), reps: 0, lapses: 0 };
}

/** SM-2 간소화 버전. 간격: 1 → 3 → 7 → 16 → 35 ... */
export function review(card: SrsCard, grade: Grade, today = todayKey()): SrsCard {
  let { interval, ease, reps, lapses } = card;
  if (grade === 0) {
    lapses += 1;
    reps = 0;
    interval = 1;
    ease = Math.max(1.3, ease - 0.2);
  } else {
    reps += 1;
    if (reps === 1) interval = 1;
    else if (reps === 2) interval = 3;
    else interval = Math.round(interval * ease * (grade === 1 ? 0.6 : grade === 3 ? 1.3 : 1));
    if (grade === 1) ease = Math.max(1.3, ease - 0.15);
    if (grade === 3) ease = Math.min(3.0, ease + 0.15);
    interval = Math.max(1, Math.min(interval, 60));
  }
  return { ...card, interval, ease, reps, lapses, due: addDays(today, interval) };
}

export function dueCards(srs: Record<string, SrsCard>, today = todayKey(), limit = 15): SrsCard[] {
  return Object.values(srs)
    .filter((c) => c.due <= today)
    .sort((a, b) => (a.due < b.due ? -1 : a.due > b.due ? 1 : b.lapses - a.lapses))
    .slice(0, limit);
}

export function dueCount(srs: Record<string, SrsCard>, today = todayKey()): number {
  return Object.values(srs).filter((c) => c.due <= today).length;
}
