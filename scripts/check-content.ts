/* 콘텐츠 검증: npx tsx scripts/check-content.ts [phase] */
import type { Phase, Day } from "../src/types";

const which = process.argv[2] ? [Number(process.argv[2])] : [1, 2, 3, 4, 5];
let errors = 0;
const err = (m: string) => { errors++; console.error("✗ " + m); };
const seen = new Map<string, string>();

for (const n of which) {
  let phase: Phase;
  try {
    phase = (await import(`../src/content/phase${n}.ts`))[`phase${n}`];
  } catch (e) { err(`phase${n}: import failed: ${(e as Error).message}`); continue; }
  if (!phase) { err(`phase${n}: export phase${n} missing`); continue; }
  if (phase.phase !== n) err(`phase${n}: phase number ${phase.phase}`);
  if (phase.days.length !== 20) err(`phase${n}: ${phase.days.length} days (need 20)`);
  const start = (n - 1) * 20 + 1;
  phase.days.forEach((d: Day, i: number) => {
    const exp = start + i;
    const tag = `day ${d.day}`;
    if (d.day !== exp) err(`${tag}: expected day ${exp}`);
    if (d.phase !== n) err(`${tag}: phase ${d.phase}`);
    if (!d.title || !d.titleKo || !d.introKo) err(`${tag}: missing title/titleKo/introKo`);
    if (d.day % 10 === 0 && !d.boss) err(`${tag}: should be boss`);
    if (d.day % 10 !== 0 && d.boss) err(`${tag}: should not be boss`);
    if (d.chunks.length !== 8) err(`${tag}: ${d.chunks.length} chunks (need 8)`);
    d.chunks.forEach((c, j) => {
      const id = `d${String(d.day).padStart(2, "0")}-${j + 1}`;
      if (c.id !== id) err(`${tag}: chunk id ${c.id} != ${id}`);
      for (const k of ["phrase", "ko", "example", "exampleKo", "note", "register"] as const)
        if (!c[k]) err(`${tag} ${c.id}: missing ${k}`);
      if (!/^A: .+\nB: .+$/s.test(c.example)) err(`${tag} ${c.id}: example not "A: ...\\nB: ..." (${JSON.stringify(c.example)})`);
      if (!/^A: .+\nB: .+$/s.test(c.exampleKo)) err(`${tag} ${c.id}: exampleKo not "A: ...\\nB: ..."`);
      if (!["casual", "slang", "neutral", "work"].includes(c.register)) err(`${tag} ${c.id}: bad register ${c.register}`);
      const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9' ]/g, " ").replace(/\s+/g, " ").trim();
      const core = norm(c.phrase.replace(/\.\.\./g, " ")).split(" ").filter(Boolean);
      const ex = norm(c.example);
      // at least the longest 1-2 content words of the phrase must appear in the example
      const key = core.filter(w => w.length > 2).sort((a, b) => b.length - a.length).slice(0, 2);
      if (key.length && !key.every(w => ex.includes(w))) err(`${tag} ${c.id}: example doesn't contain phrase "${c.phrase}"`);
      const pk = norm(c.phrase);
      if (seen.has(pk)) err(`${tag} ${c.id}: duplicate phrase "${c.phrase}" (also ${seen.get(pk)})`);
      else seen.set(pk, c.id);
    });
    const r = d.roleplay;
    if (!r || !r.setting || !r.aiRole || !r.userRoleKo || !r.goalKo || !r.opener) err(`${tag}: roleplay incomplete`);
  });
  console.log(`phase${n}: ${phase.days.length} days, ${phase.days.reduce((a, d) => a + d.chunks.length, 0)} chunks checked`);
}
if (errors) { console.error(`\n${errors} error(s)`); process.exit(1); }
console.log("✓ content OK");
