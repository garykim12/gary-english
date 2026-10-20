import type { Day } from "../types";

export interface SrsCard {
  id: string;
  interval: number; // days
  ease: number;
  due: string; // YYYY-MM-DD
  reps: number;
  lapses: number;
}

export type StageId = "warmup" | "learn" | "drill" | "roleplay" | "wrapup";

export interface SessionState {
  day: number;
  stageIndex: number;
  startedAt: string;
  stageXp: Partial<Record<StageId, number>>;
  roleplayLog?: { role: "user" | "assistant"; text: string }[];
}

export interface Settings {
  apiKey: string;
  model: string;
  voiceRate: number;
  voiceName: string;
  autoSpeak: boolean;
  userName: string;
}

export interface Progress {
  version: 1;
  startedAt: string | null;
  currentDay: number;
  completedDays: Record<number, { date: string; xp: number }>;
  xp: number;
  streak: number;
  bestStreak: number;
  lastActiveDate: string | null;
  srs: Record<string, SrsCard>;
  badges: string[];
  stats: {
    drillsAnswered: number;
    drillsCorrect: number;
    roleplayTurns: number;
    spokenCount: number;
    minutes: number;
  };
  settings: Settings;
  session: SessionState | null;
}

const KEY = "gary-english:v1";

export const defaultProgress = (): Progress => ({
  version: 1,
  startedAt: null,
  currentDay: 1,
  completedDays: {},
  xp: 0,
  streak: 0,
  bestStreak: 0,
  lastActiveDate: null,
  srs: {},
  badges: [],
  stats: { drillsAnswered: 0, drillsCorrect: 0, roleplayTurns: 0, spokenCount: 0, minutes: 0 },
  settings: {
    apiKey: "",
    model: "claude-opus-5-5",
    voiceRate: 0.95,
    voiceName: "",
    autoSpeak: true,
    userName: "Gary",
  },
  session: null,
});

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultProgress();
    const parsed = JSON.parse(raw) as Partial<Progress>;
    const base = defaultProgress();
    return {
      ...base,
      ...parsed,
      stats: { ...base.stats, ...(parsed.stats ?? {}) },
      settings: { ...base.settings, ...(parsed.settings ?? {}) },
    };
  } catch {
    return defaultProgress();
  }
}

export function saveProgress(p: Progress) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    /* storage unavailable (private mode) — app still works for the session */
  }
}

export function todayKey(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function daysBetween(a: string, b: string): number {
  const [ay, am, ad] = a.split("-").map(Number);
  const [by, bm, bd] = b.split("-").map(Number);
  const da = Date.UTC(ay, am - 1, ad);
  const db = Date.UTC(by, bm - 1, bd);
  return Math.round((db - da) / 86400000);
}

/** 오늘 활동 기록 → 스트릭 갱신. 하루 건너뛰면 리셋. */
export function touchStreak(p: Progress): Progress {
  const today = todayKey();
  if (p.lastActiveDate === today) return p;
  let streak = 1;
  if (p.lastActiveDate && daysBetween(p.lastActiveDate, today) === 1) streak = p.streak + 1;
  return { ...p, streak, bestStreak: Math.max(p.bestStreak, streak), lastActiveDate: today };
}

export function exportProgress(p: Progress): string {
  return JSON.stringify({ ...p, settings: { ...p.settings, apiKey: "" } }, null, 2);
}

export function chunkDay(chunkId: string): number {
  return Number(chunkId.slice(1).split("-")[0]);
}

export function dayById(days: Day[], n: number): Day | undefined {
  return days.find((d) => d.day === n);
}
