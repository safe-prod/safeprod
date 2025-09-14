import { embed } from "ai"

export async function getEmbedding(value: any) {
  const { embedding } = await embed({
    model: `${process.env.NEXT_PUBLIC_EMBEDDING_MODEL}`,
    value: value
  })
  return embedding
}
