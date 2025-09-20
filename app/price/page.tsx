"use client"
import { useState, useEffect, useRef } from "react"
import { embed } from "ai"

/*
async function getPrice(realProduct: string) {
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
*/
let test = ""
try {
    const { embedding } = await embed({
      model: `${process.env.NEXT_PUBLIC_EMBEDDING_MODEL}`,
      value: "banana"
    })
    test = embedding.toString()
  } catch (error) {
    test = (error as Error).message || "An unknown error occurred"
  }

export default function PricePage() {
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
      <div>{test}</div>
      <div>{realProduct}</div>
    </div>
  )
}
