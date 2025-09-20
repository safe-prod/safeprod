import { embed } from "ai"
import { RealProduct, Price, Error } from "../regulation/SAFE-1"

export async function getPrice(realProduct: RealProduct): Price | Error {
  try {
    const { embedding } = await embed({
      model: `${process.env.NEXT_PUBLIC_EMBEDDING_MODEL}`,
      value: realProduct
    })
    let price = embedding
    return price
  } catch (error) {
    return (error as Error).message || "An unknown error occurred"
  }
}
