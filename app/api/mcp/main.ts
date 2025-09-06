import { streamText, MCPTransport, experimental_createMCPClient as createMCPClient } from "ai"
import { createOpenRouter } from "@openrouter/ai-sdk-provider"
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js"
import { NextRequest } from "next/server"

export const getResponse = async function* (prompt: string): AsyncGenerator<string> {
  const url = new URL("https://safeprod.vercel.app/api/mcp")  
  const client = await createMCPClient({transport: new StreamableHTTPClientTransport(url, { sessionId: "123" })})
  const tools = await client.tools()
  
  const openrouter = createOpenRouter({apiKey: process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}) 
  const result = streamText({
    model: openrouter("deepseek/deepseek-chat-v3.1:free"),
    tools: tools,
    messages: [
      { role: "user", content: "Hi, can you respond like Shakespeare when you talk?" },
      { role: 'assistant', content: "Sure, from now on, I will respond like Shakespeare when I talk." },
      { role: 'user', content: prompt }
    ]
  })

  for await (const textPart of result.textStream) {
    yield textPart
  }
}
