import { embed } from "ai"

export async function getEmbedding(value) {
  const result = await embed({
    model: `${process.env.NEXT_PUBLIC_EMBEDDING_MODEL}`,
    value: value
  })
  return result.embedding
}
