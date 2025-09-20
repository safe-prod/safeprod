"use client"
import { useState, useRef } from "react"
import usePrice from "../../product/usePrice"

export default function Page() {
  const [ realProduct, setRealProduct ] = useState("")
  const realProductRef = useRef<HTMLInputElement>(null)
  const price = usePrice(realProduct)

  function getPrice() {
    if (realProductRef.current?.value) {
      setRealProduct(realProductRef.current.value)
    }
  }

  function displayPrice() {
    try {
      return price.toString()
    } catch (error) {
      return (error as Error).message || "An unknown error occurred"
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
