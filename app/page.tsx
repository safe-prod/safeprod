"use client"
import { useState } from "react"
import { getPDS, getResponse } from "./api/mcp/lib/main.ts"

export default function Page() {
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setResponse("") // Clear previous response
    setLoading(true)

    const responseGenerator = getResponse(prompt)
    for await (const textPart of responseGenerator) {
      setResponse((prev) => prev + textPart) // Append new textPart to the response
    }

    setLoading(false)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your prompt here..."
          rows={4}
          cols={50}
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Send"}
        </button>
      </form>
      <div>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  )
}
