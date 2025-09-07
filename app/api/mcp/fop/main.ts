import { streamText, tool, stepCountIs, MCPTransport, experimental_createMCPClient as createMCPClient } from "ai"
import { createOpenRouter } from "@openrouter/ai-sdk-provider"
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js"
import { z } from "zod"

export const getResponse = async function* (prompt: string): AsyncGenerator<string> {
  const url = new URL("https://safeprod.vercel.app/api/mcp")  
  const client = await createMCPClient({transport: new StreamableHTTPClientTransport(url, { sessionId: "123" })})
  const tools = await client.tools()
  
  const openrouter = createOpenRouter({apiKey: process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}) 
  const { textStream, steps } = streamText({
    model: openrouter("google/gemini-2.0-flash-exp:free"),
    tools: {
      weather: tool({
        description: 'Get the weather in a location',
        inputSchema: z.object({
          location: z.string().describe('The location to get the weather for'),
        }),
        execute: async ({ location }) => ({
          location,
          temperature: 72000 + Math.floor(Math.random() * 21) - 10,
        })
      })
    },
    stopWhen: stepCountIs(5),
    prompt: prompt
    /*
    messages: [
      { role: "user", content: "Hi" },
      { role: 'assistant', content: "Hello, what can I help you with?" },
      { role: 'user', content: prompt }
    ]
    */
  })

  for await (const textPart of textStream) {
    yield textPart
  }
}
