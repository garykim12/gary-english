import type { Day, Phase, Chunk } from "../types";
import { phase1 } from "./phase1";
import { phase2 } from "./phase2";
import { phase3 } from "./phase3";
import { phase4 } from "./phase4";
import { phase5 } from "./phase5";

export const PHASES: Phase[] = [phase1, phase2, phase3, phase4, phase5];
export const DAYS: Day[] = PHASES.flatMap((p) => p.days).sort((a, b) => a.day - b.day);
export const ALL_CHUNKS: Chunk[] = DAYS.flatMap((d) => d.chunks);
const chunkMap = new Map(ALL_CHUNKS.map((c) => [c.id, c]));

export const getDay = (n: number): Day | undefined => DAYS.find((d) => d.day === n);
export const getChunk = (id: string): Chunk | undefined => chunkMap.get(id);
export const phaseOf = (day: number): Phase => PHASES[Math.min(4, Math.floor((day - 1) / 20))];
export const TOTAL_DAYS = 100;
