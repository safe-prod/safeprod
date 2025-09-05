import fs from "fs"
import path from "path"
import { matrix } from "mathjs"
import { streamText, MCPTransport, experimental_createMCPClient as createMCPClient } from "ai"
import { createOpenRouter } from "@openrouter/ai-sdk-provider"
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js"

export const getContract = () => {
  let journal = JSON.parse(fs.readFileSync(path.join(process.cwd(), "app/api/mcp/_accounting/journal"), "utf8"))
  return {type: "SAFE", id: "asdf10", journal: journal}
}

export const getResponse = async (prompt: string) => {
  const url = new URL("https://safeprod.vercel.app/api/mcp")
  const client = await createMCPClient({transport: new StreamableHTTPClientTransport(url, { sessionId: "123" })})
  const tools = await client.tools()
  
  const openrouter = createOpenRouter({apiKey: "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"}) 
  const response = streamText({
    model: openrouter("deepseek/deepseek-chat-v3.1:free"),
    prompt: prompt,
    tools: tools
  })

  await response.consumeStream()
  return response.text
}
