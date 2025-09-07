/*

Entrepreneur:

An entrepreneur is a factor of production, responsible for organizing the other factors of production and taking on the risks associated with them.
They innovate, create new products or services, and drive economic growth by combining the other factors of production effectively.

*/

"use client"
import { useState } from "react"
import { generateText } from "ai"
import { createOpenRouter } from "@openrouter/ai-sdk-provider"

export default function Entrepreneur() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const transferInput = async (e: any) => {
    setOutput("")
    const currentOutput = await getOutput(input)
    setOutput(currentOutput)
    /*
    for await (const newOutput of currentOutput) {
      setOutput((output) => output + newOutput)
    }
    */
  }
  return (
    <div className="flex flex-col">
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={transferInput}>Transfer Input</button>
      <div>{output}</div>
    </div>
  )
}

// const getOutput = async function* (input: string): AsyncGenerator<string> {
const getOutput = async function(input: string): Promise<string> {
  const openrouter = createOpenRouter({apiKey: process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}) 
  const currentOutput = generateText({
    model: openrouter("openai/gpt-oss-120b:free"),
    prompt: input
  })
  await currentOutput.consumeStream()
  return currentOutput
  /*
  for await (const newOutput of currentOutput.textStream) {
    yield newOutput
  }
  */
}
