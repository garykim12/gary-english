import type { Chunk } from "../types";

export type DrillKind = "choice" | "cloze" | "speak" | "reflex";

export interface Drill {
  kind: DrillKind;
  chunk: Chunk;
  /** choice: 4 options (phrases) */
  options?: string[];
  /** cloze: example with the phrase blanked */
  clozed?: string;
  /** seconds allowed (reflex) */
  seconds?: number;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** example 안에서 phrase 자리를 ____ 로 비움 (대소문자 무시, "..." 허용) */
export function makeCloze(chunk: Chunk): string | null {
  const ex = chunk.example;
  const parts = chunk.phrase.split("...").map((p) => p.trim()).filter(Boolean);
  const core = parts[0]?.replace(/[.?!,]+$/, "");
  if (!core) return null;
  const idx = ex.toLowerCase().indexOf(core.toLowerCase());
  if (idx < 0) return null;
  const blank = "_".repeat(Math.max(4, Math.min(12, core.length)));
  return ex.slice(0, idx) + "[" + blank + "]" + ex.slice(idx + core.length);
}

export function clozeAnswer(chunk: Chunk): string {
  const parts = chunk.phrase.split("...").map((p) => p.trim()).filter(Boolean);
  return (parts[0] ?? chunk.phrase).replace(/[.?!,]+$/, "");
}

/** 오늘의 chunk 들로 드릴 세트 생성. pool 은 오답 선택지용 (전체 day 들). */
export function buildDrills(chunks: Chunk[], pool: Chunk[], opts: { count?: number; speak: boolean } = { speak: true }): Drill[] {
  const drills: Drill[] = [];
  const others = pool.filter((c) => !chunks.some((t) => t.id === c.id));
  for (const c of chunks) {
    // 1) 상황 → 표현 고르기
    const distract = shuffle([...others, ...chunks.filter((x) => x.id !== c.id)])
      .filter((x) => x.phrase.toLowerCase() !== c.phrase.toLowerCase())
      .slice(0, 3)
      .map((x) => x.phrase);
    drills.push({ kind: "choice", chunk: c, options: shuffle([c.phrase, ...distract]) });
    // 2) 빈칸 채우기
    const cl = makeCloze(c);
    if (cl) drills.push({ kind: "cloze", chunk: c, clozed: cl });
    // 3) 한국어 → 영어 즉답 (말하기 or 타이핑)
    drills.push({ kind: opts.speak ? "speak" : "reflex", chunk: c, seconds: 8 });
  }
  // choice 먼저, 그다음 cloze, 마지막에 reflex — 난이도 상승. 각 그룹 내부는 섞음
  const order: DrillKind[] = ["choice", "cloze", "speak", "reflex"];
  const grouped = order.flatMap((k) => shuffle(drills.filter((d) => d.kind === k)));
  const count = opts.count ?? grouped.length;
  return grouped.slice(0, count);
}
