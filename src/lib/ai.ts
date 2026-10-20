import Anthropic from "@anthropic-ai/sdk";
import { z } from "zod";
import { betaZodOutputFormat } from "@anthropic-ai/sdk/helpers/beta/zod";
import type { Chunk, Day } from "../types";

export const MODELS = [
  { id: "claude-opus-5-5", label: "Opus 5.5 — 가장 자연스러움 (기본)" },
  { id: "claude-sonnet-5-5", label: "Sonnet 5.5 — 빠르고 저렴" },
  { id: "claude-haiku-5-5", label: "Haiku 5.5 — 초저가" },
];

export class AiError extends Error {}

function client(apiKey: string) {
  if (!apiKey) throw new AiError("NO_KEY");
  return new Anthropic({ apiKey, dangerouslyAllowBrowser: true, maxRetries: 2 });
}

export interface ChatTurn {
  role: "user" | "assistant";
  text: string;
}

const TurnSchema = z.object({
  reply: z.string().describe("Your in-character reply, 1-3 sentences, natural spoken American English."),
  correction: z
    .object({
      original: z.string().describe("What the learner said, verbatim."),
      better: z.string().describe("How a native would have said it."),
      whyKo: z.string().describe("Korean, one short friendly sentence on why."),
    })
    .nullable()
    .describe("Only when the learner's last message had an unnatural or wrong bit worth fixing. null if it was fine."),
  usedChunkIds: z.array(z.string()).describe("IDs of target chunks the learner used (or clearly tried to use) in their last message."),
  praiseKo: z.string().nullable().describe("Optional one-line Korean praise when the learner nails a target phrase. null otherwise."),
  sceneDone: z.boolean().describe("true if the conversation reached a natural ending or the mission is complete."),
});
export type Turn = z.infer<typeof TurnSchema>;

const FeedbackSchema = z.object({
  score: z.number().min(1).max(10),
  headlineKo: z.string().describe("Korean, one punchy sentence summarizing how it went."),
  winsKo: z.array(z.string()).describe("2-3 Korean bullets on what the learner did well, quoting their English."),
  fixes: z
    .array(
      z.object({
        you: z.string().describe("What learner said"),
        native: z.string().describe("Native version"),
        whyKo: z.string().describe("Korean, short"),
      }),
    )
    .describe("Up to 4 most valuable fixes."),
  nextTipKo: z.string().describe("Korean, one concrete thing to practice tomorrow."),
  bonusPhrase: z
    .object({ phrase: z.string(), ko: z.string(), example: z.string() })
    .describe("One extra native phrase that would have fit this conversation perfectly."),
});
export type Feedback = z.infer<typeof FeedbackSchema>;

function targetsBlock(targets: Chunk[]) {
  return targets.map((c) => `- [${c.id}] "${c.phrase}" — ${c.ko}`).join("\n");
}

export function buildSystemPrompt(day: Day, targets: Chunk[], userName: string, free = false): string {
  const rp = day.roleplay;
  return `You are a conversation partner inside an English-speaking practice app for a Korean adult learner named ${userName}. Their vocabulary and grammar are decent on paper, but speaking is rusty. They want to sound like a real American native in casual conversation, not a textbook.

# Your character
${rp.aiRole}

# Scene
${rp.setting}
${free ? "" : `Learner's role: ${rp.userRoleKo}\nLearner's mission (Korean): ${rp.goalKo}`}

# Target phrases for this session
${targetsBlock(targets)}

# How to play
- Stay fully in character. Speak like a real person: contractions, fillers, reactions, slang where natural. Never sound like a teacher inside the reply.
- Keep each reply short (1-3 sentences) and always leave an opening so the learner has something to respond to. Ask questions, react, tease a bit, share small stories.
- Steer the conversation so the target phrases become natural to use. You may use them yourself as modeling, casually.
- If the learner writes Korean or gets stuck, help in character: offer a simple English option they can say, then continue.
- If the learner says "what should I say" or similar, give 2 short options in English they can pick from.
- Corrections go ONLY in the correction field, never in the reply. Fix one thing at a time, the most valuable one: unnatural phrasing, wrong preposition, Konglish, too-formal wording. Skip typos and trivial stuff. Praise sparingly, only for a genuinely native-sounding line.
- Mark sceneDone when the mission is clearly complete or the conversation has reached a natural goodbye; don't rush it (aim for 8-14 learner turns).`;
}

export async function roleplayTurn(
  apiKey: string,
  model: string,
  system: string,
  history: ChatTurn[],
): Promise<Turn> {
  const c = client(apiKey);
  const messages: Anthropic.Beta.BetaMessageParam[] = history.map((h) => ({ role: h.role, content: h.text }));
  const res = await c.beta.messages.parse({
    model,
    max_tokens: 1024,
    system: [{ type: "text", text: system, cache_control: { type: "ephemeral" } }],
    messages,
    output_config: { format: betaZodOutputFormat(TurnSchema), effort: "low" },
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
  });
  if (res.stop_reason === "refusal") throw new AiError("REFUSED");
  if (!res.parsed_output) throw new AiError("PARSE");
  return res.parsed_output;
}

export async function roleplayFeedback(
  apiKey: string,
  model: string,
  day: Day,
  targets: Chunk[],
  history: ChatTurn[],
): Promise<Feedback> {
  const c = client(apiKey);
  const transcript = history.map((h) => `${h.role === "user" ? "LEARNER" : "PARTNER"}: ${h.text}`).join("\n");
  const res = await c.beta.messages.parse({
    model,
    max_tokens: 2048,
    system: `You are a sharp, warm American English coach reviewing a Korean learner's practice conversation. Judge only the LEARNER lines. Be concrete, quote their words, and prioritize what makes someone sound more native (chunks, rhythm, register) over grammar nitpicks. Korean explanations should be casual and encouraging ("~해요" tone), never preachy.`,
    messages: [
      {
        role: "user",
        content: `Scene: ${day.roleplay.setting}\nMission: ${day.roleplay.goalKo}\n\nTarget phrases:\n${targetsBlock(targets)}\n\nTranscript:\n${transcript}`,
      },
    ],
    output_config: { format: betaZodOutputFormat(FeedbackSchema), effort: "medium" },
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
  });
  if (res.stop_reason === "refusal") throw new AiError("REFUSED");
  if (!res.parsed_output) throw new AiError("PARSE");
  return res.parsed_output;
}

const HintSchema = z.object({
  options: z.array(z.object({ en: z.string(), ko: z.string() })).min(2).max(3),
});

/** 막혔을 때: 지금 상황에서 할 수 있는 말 2~3개 */
export async function hint(apiKey: string, model: string, system: string, history: ChatTurn[]): Promise<{ en: string; ko: string }[]> {
  const c = client(apiKey);
  const messages: Anthropic.Beta.BetaMessageParam[] = [
    ...history.map((h) => ({ role: h.role, content: h.text }) as Anthropic.Beta.BetaMessageParam),
    {
      role: "user",
      content:
        "[COACH REQUEST — not part of the conversation] The learner is stuck. Give 2-3 short, natural things they could say right now as their next line, ideally using a target phrase. Each with a Korean gloss.",
    },
  ];
  const res = await c.beta.messages.parse({
    model,
    max_tokens: 512,
    system,
    messages,
    output_config: { format: betaZodOutputFormat(HintSchema), effort: "low" },
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
  });
  if (!res.parsed_output) throw new AiError("PARSE");
  return res.parsed_output.options;
}

export function explainError(e: unknown): string {
  if (e instanceof AiError) {
    if (e.message === "NO_KEY") return "설정에서 Anthropic API 키를 먼저 넣어주세요.";
    if (e.message === "REFUSED") return "모델이 이 요청을 거절했어요. 다른 말로 다시 시도해보세요.";
    return "응답을 읽는 데 실패했어요. 다시 시도해주세요.";
  }
  if (e instanceof Anthropic.AuthenticationError) return "API 키가 올바르지 않아요. 설정에서 확인해주세요.";
  if (e instanceof Anthropic.RateLimitError) return "요청이 너무 많아요. 잠깐 쉬었다가 다시 해주세요.";
  if (e instanceof Anthropic.APIConnectionError) return "네트워크 연결을 확인해주세요.";
  if (e instanceof Anthropic.APIError) return `API 오류 (${e.status}): ${e.message}`;
  return (e as Error)?.message ?? "알 수 없는 오류";
}
