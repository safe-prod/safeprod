/*

Entrepreneur:

An entrepreneur is a factor of production, responsible for organizing the other factors of production and taking on the risks associated with them.
They innovate, create new products or services, and drive economic growth by combining the other factors of production effectively.

*/

"use client"
import { useState } from "react"
import { streamText } from "ai"
import { createOpenRouter } from "@openrouter/ai-sdk-provider"

export default function Entrepreneur() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const transferInput = async (e: any) => {
    setOutput("")
    const openrouter = createOpenRouter({apiKey: process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}) 
    const currentOutput = streamText({
      model: openrouter("openai/gpt-oss-120b:free"),
      prompt: input
    })
    for await (const newOutput of currentOutput.textStream) {
      setOutput((output) => output + newOutput)
    }
  }
  return (
    <div className="flex flex-col">
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={transferInput}>Transfer Input</button>
      <div>{output}</div>
    </div>
  )
}
