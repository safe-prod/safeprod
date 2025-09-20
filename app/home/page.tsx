"use client"
import { useState, useEffect, useRef } from "react"
import { getPrice } from "../../product/price"

export default function Page() {
  const [ realProduct, setRealProduct ] = useState("")
  const [ price, setPrice ] = useState<number[] | string>(null)
  const realProductRef = useRef<HTMLInputElement>(null)
  
  useEffect(() => {
    const updatePrice = async () => {
      try {
        let newPrice = await getPrice(realProduct)
        setPrice(newPrice)
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
