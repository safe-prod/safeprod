import { streamText, MCPTransport, experimental_createMCPClient as createMCPClient } from "ai"
import { createOpenRouter } from "@openrouter/ai-sdk-provider"
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js"
import { NextRequest } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  let PDS = getPDS()
  return new Response(
    PDS,
    {status: 200, headers: {"Content-Type": "application/json"}}
  )
}

export const getPDS = () => {
  let PDS = fs.readFileSync(path.join(process.cwd(), "app/api/PDS.md"), "utf8"))
  return PDS
}

export const getResponse = async function* (prompt: string): AsyncGenerator<string> {
  const url = new URL("https://safeprod.vercel.app/api/mcp")  
  const client = await createMCPClient({transport: new StreamableHTTPClientTransport(url, { sessionId: "123" })})
  const tools = await client.tools()
  
  const openrouter = createOpenRouter({apiKey: "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"}) 
  const result = streamText({
    model: openrouter("deepseek/deepseek-chat-v3.1:free"),
    prompt: prompt,
    tools: tools
  })

  for await (const textPart of result.textStream) {
    yield textPart
  }
}
