"use client"
import { useState, useEffect, useRef } from "react"
import { getPrice } from "../../product/price"

export default function Page() {
  const [ realProduct, setRealProduct ] = useState("")
  const [ price, setPrice ] = useState<number[]>([])
  const realProductRef = useRef<HTMLInputElement>(null)
  
  useEffect(() => {getPrice(realProduct)}, [ realProduct ])
  
  function handleGetPrice() {
    // if (realProductRef.current?.value) {
    setRealProduct(realProductRef.current?.value)
    // }
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
      <div onClick={handleGetPrice}>Price</div>
      <div>{displayPrice()}</div>
      <div>{realProduct}</div>
    </div>
  )
}
