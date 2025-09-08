"use client"
import { streamText } from "ai"
import "dotenv/config"

export default async function Test() {
  const result = streamText({
    model: "meta/llama-3.1-8b",
    prompt: "What is finance? Give a short answer.",
  });
  await result.consumeStream()
  const text = await result.text
  return (
    <div>{text}</div>
  )
}
