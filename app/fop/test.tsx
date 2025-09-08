"use client"
import { streamText } from "ai"
import "dotenv/config"

export default async function Test() {
  const result = streamText({
    model: "meta/llama-3.1-8b",
    prompt: "Hello",
  });

  await result.consumeStream()
  const text = await result.text

  return (
    <div>{text}</div>
  )
}
