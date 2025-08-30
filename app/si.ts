import { streamText } from "ai"
import { createOpenRouter } from "@openrouter/ai-sdk-provider"
import { z } from "@openrouter-monorepo/type-utils/zod"

export const SI = async (modelName: string, prompt: string) => {
  const openrouter = createOpenRouter({
    apiKey: "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"
  })

  const response = streamText({
    model: openrouter(modelName),
    prompt: prompt
  })

  await response.consumeStream()
  return response.text
}
