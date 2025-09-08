"use client"
import "dotenv/config"
import { streamText } from "ai"
import { useState } from "react"

export default async function TenderCreation() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const create = async () => {
    const result = streamText({
      model: "meta/llama-3.1-8b",
      prompt: input
    })
    await result.consumeStream()
    setOutput(await result.text)
  }
  return (
    <div className="flex flex-col">
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={create}>Create</button>
      {output}
    </div>
  )
}
