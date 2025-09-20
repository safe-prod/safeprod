"use client"
import { useState, useRef } from "react"
import usePrice from "../../product/usePrice"

import { embed } from "ai"
const { embedding } = await embed({
  model: `${process.env.NEXT_PUBLIC_EMBEDDING_MODEL}`,
  value: "apple"
})
let test: string = embedding.toString()

function displayPrice() {
  try {
    return test
  } catch (error) {
    return (error as Error).message || "An unknown error occurred"
  }
}

export default function Page() {
  const [ realProduct, setRealProduct ] = useState("")
  const realProductRef = useRef<HTMLInputElement>(null)
  const price = usePrice(realProduct)

  function getPrice() {
    if (realProductRef.current?.value) {
      setRealProduct(realProductRef.current.value)
    }
  }
  
  return (
    <div>
      <input ref={realProductRef} type="text" placeholder="Real product" />
      <button onClick={getPrice}>Price</button>
      <div>{displayPrice()}</div>
    </div>
  )
}
