import { useState, useEffect } from "react"
import { embed } from "ai"

export default function usePrice(realProduct: string): number[] {
  const [ price, setPrice ] = useState<number[]>([])
  
  useEffect(() => {
    const priceRealProduct = async () => {
      try {
        const { embedding } = await embed({
          model: `${process.env.NEXT_PUBLIC_EMBEDDING_MODEL}`,
          value: realProduct
        })
        setPrice(embedding)
      } catch (error) {
        return (error as Error).message || "An unknown error occurred"
      }
    }
    priceRealProduct()
  }, [ realProduct ])

  return price
}
