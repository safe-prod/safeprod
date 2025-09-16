import { embed } from "ai"

export default async function useEmbedding(value: any) {
  const { embedding } = await embed({
    model: `${process.env.NEXT_PUBLIC_EMBEDDING_MODEL}`,
    value: value
  })
  return embedding
}
