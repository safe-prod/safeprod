"use client"
import { streamText } from "ai"
import "dotenv/config"

export default async function Test() {
  const result = streamText({
    model: "openai/gpt-4.1",
    prompt: "Invent a new holiday and describe its traditions.",
  });

  await result.consumeStream()
  const text = await result.text

  return (
    <div>{text}</div>
  )
}
