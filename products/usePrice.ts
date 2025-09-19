import { useState, useEffect } from "react"
import { embed } from "ai"

export default function usePrice(realProduct: string) {
  const [ price, setPrice ] = useState([])
  
  useEffect(() => {
    const priceRealProduct = async () => {
      const { embedding } = await embed({
        model: `${process.env.NEXT_PUBLIC_EMBEDDING_MODEL}`,
        value: realProduct
      })
      setPrice(embedding)
    }
    priceRealProduct()
  }, [ realProduct ])

  return price
}
