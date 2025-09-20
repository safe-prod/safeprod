import { embed } from "ai"

export async function getPrice(realProduct: string): number[] {
  try {
    const { embedding } = await embed({
      model: `${process.env.NEXT_PUBLIC_EMBEDDING_MODEL}`,
      value: realProduct
    })
    return embedding
  } catch (error) {
    return (error as Error).message || "An unknown error occurred"
  }
}
