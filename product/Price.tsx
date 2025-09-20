"use client"
import { useState, useEffect, useRef } from "react"
import { embed } from "ai"
import { RealProduct, Price, Error } from "../regulation/SAFE-1"

async function getPrice(realProduct: RealProduct): Price | Error {
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

export default function Price() {
  const [ realProduct, setRealProduct ] = useState("")
  const [ price, setPrice ] = useState<number[] | string>([])
  const realProductRef = useRef<HTMLInputElement>(null)
  
  useEffect(() => {
    const updatePrice = async () => {
      try {
        setPrice(await getPrice(realProduct))
      } catch (error) {
        return (error as Error).message || "An unknown error occurred"
      }
    }
    updatePrice()
  }, [ realProduct ])
  
  function handleGetPrice() {
    if (realProductRef.current?.value) {
      setRealProduct(realProductRef.current.value)
    }
  }

  function displayPrice() {
    return price.toString()
  }
 
  return (
    <div>
      <input ref={realProductRef} type="text" placeholder="Real product" />
      <div onClick={handleGetPrice}>Price</div>
      <div>{displayPrice()}</div>
    </div>
  )
}
