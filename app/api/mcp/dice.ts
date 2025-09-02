import { z } from "zod"

export const Dice = [
  "roll_dice",
  "Rolls an N-sided die",
  { sides: z.number().int().min(2) },
  async ({ sides }) => {
    const value = 1 + Math.floor(Math.random() * sides)
      return {
        content: [{ type: "text", text: `🎲 You rolled a ${value}!` }],
      }
  }
]
