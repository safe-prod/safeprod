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
    setOutput(`This is the input: ${input}`)
    const openrouter = createOpenRouter({apiKey: process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}) 
    const currentOutput = streamText({
      model: openrouter("deepseek/deepseek-r1-0528:free"),
      prompt: "Hello"
    })
    for await (const newOutput of currentOutput.textStream) {
      setOutput((output) => output + newOutput)
    }
    /*
    await currentOutput.consumeStream()
    setOutput(await currentOutput.text)
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
