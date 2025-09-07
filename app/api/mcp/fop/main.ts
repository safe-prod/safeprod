import { streamText, stepCountIs, MCPTransport, experimental_createMCPClient as createMCPClient } from "ai"
import { createOpenRouter } from "@openrouter/ai-sdk-provider"
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js"

export const getResponse = async function* (prompt: string): AsyncGenerator<string> {
  const url = new URL("https://safeprod.vercel.app/api/mcp")  
  const client = await createMCPClient({transport: new StreamableHTTPClientTransport(url, { sessionId: "123" })})
  const tools = await client.tools()
  
  const openrouter = createOpenRouter({apiKey: process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}) 
  const { text, steps } = streamText({
    model: openrouter("google/gemini-2.0-flash-exp:free"),
    tools: tools,
    // stopWhen: stepCountIs(5),
    prompt: prompt
    /*
    messages: [
      { role: "user", content: "Hi" },
      { role: 'assistant', content: "Hello, what can I help you with?" },
      { role: 'user', content: prompt }
    ]
    */
  })

  for await (const textPart of text.textStream) {
    yield textPart
  }
}

export const getDocument = async () => {
  return {
    content: [{ type: "text", text: `This document describes the specifications of the new product.`}],
  }
}
