import { z } from "zod"
/*
export const Coin: [
  string,
  string,
  { sides: z.ZodNumber },
  (sides: number) => Promise<{ content: { type: string, text: string }[] }>
] = [
  "toss_coin",
  "Tosses a coin",
  { sides: z.number().int().min(2) },
  async (sides: number) => {
    const value = 1 + Math.floor(Math.random() * sides);
    return {
      content: [{ type: "text", text: `You tossed a ${value}!` }],
    }
  }
]
*/
