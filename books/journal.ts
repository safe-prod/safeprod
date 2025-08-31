import { streamText, MCPTransport, experimental_createMCPClient as createMCPClient } from "ai"
import { createOpenRouter } from "@openrouter/ai-sdk-provider"
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp"
import { z } from "zod"

export const Journal = async (modelName: string, prompt: string) => {
  
  const openrouter = createOpenRouter({
    apiKey: "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"
  })
  
  const url = new URL("http://localhost:3000/mcp")
  const mcpClient = await createMCPClient({
    transport: new StreamableHTTPClientTransport(url, { sessionId: "123" })
  })
  const tools = await mcpClient.tools()

  const response = streamText({
    model: openrouter(modelName),
    prompt: prompt,
    tools: tools
  })

  await response.consumeStream()
  return response.text
}
