import { createMcpHandler } from "mcp-handler"
import { z } from "zod"

import { streamText, MCPTransport, experimental_createMCPClient as createMCPClient } from "ai"
import { createOpenRouter } from "@openrouter/ai-sdk-provider"
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js"

export const MCPHost = async (prompt: string) => {
  const openrouter = createOpenRouter({apiKey: "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"}) 
  
  const url = new URL("https://safeprod.vercel.app/api/mcp")
  const MCPClient = await createMCPClient({
    transport: new StreamableHTTPClientTransport(url, { sessionId: "123" })
  })
  const tools = await MCPClient.tools()

  const response = streamText({
    model: openrouter("deepseek/deepseek-chat-v3.1:free"),
    prompt: prompt,
    tools: tools
  })

  await response.consumeStream()
  const responseText = await response.text
  return responseText
}

const handler = createMcpHandler(
  (server) => {
    server.tool(
      "retrieve_name",
      "Retrieve the name of the user",
      {},
      async ({}) => {
        return {
          content: [{ type: "text", text: `James`}],
        }
      }
    )
  },
  {},
  { basePath: "/api" },
)

export { handler as GET, handler as POST }
