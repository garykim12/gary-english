export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/[^a-z0-9' ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const prev = new Array(b.length + 1).fill(0).map((_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let last = i - 1;
    prev[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = prev[j];
      prev[j] = Math.min(prev[j] + 1, prev[j - 1] + 1, last + (a[i - 1] === b[j - 1] ? 0 : 1));
      last = tmp;
    }
  }
  return prev[b.length];
}

/** 0..1 유사도 (문자 단위) */
export function similarity(a: string, b: string): number {
  const na = normalize(a);
  const nb = normalize(b);
  if (!na.length && !nb.length) return 1;
  const dist = levenshtein(na, nb);
  return 1 - dist / Math.max(na.length, nb.length);
}

/** 표현(phrase)이 발화(text) 안에 들어있는지 — "..." 자리는 아무거나 허용 */
export function containsPhrase(text: string, phrase: string): boolean {
  const t = " " + normalize(text) + " ";
  const parts = phrase
    .split("...")
    .map((p) => normalize(p))
    .filter(Boolean);
  if (!parts.length) return false;
  let idx = 0;
  for (const part of parts) {
    const i = t.indexOf(" " + part + " ", idx);
    if (i < 0) {
      // allow fuzzy for short phrases: compare each window
      const words = t.trim().split(" ");
      const n = part.split(" ").length;
      let ok = false;
      for (let w = 0; w + n <= words.length; w++) {
        if (similarity(words.slice(w, w + n).join(" "), part) >= 0.85) {
          ok = true;
          break;
        }
      }
      if (!ok) return false;
    } else idx = i + part.length;
  }
  return true;
}

export function gradeSpeech(said: string, target: string): { score: number; pass: boolean } {
  const score = Math.max(similarity(said, target), containsPhrase(said, target) ? 0.9 : 0);
  return { score, pass: score >= 0.72 };
}
