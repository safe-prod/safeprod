"use client"
import { useState, useRef } from "react"
import usePrice from "../../product/usePrice"

export default function Page() {
  const realProductRef = useRef<HTMLInputElement>(null)
  const [ realProduct, setRealProduct ] = useState("")
  const price = usePrice(realProduct)
  
  return (
    <div>
      <input ref={realProductRef} type="text" placeholder="Real product" />
      <br />
      <button onClick={() => {
        if (realProductRef.current?.value) {
          setRealProduct(realProductRef.current.value)
        }
      }}>Price</button>
      <br />
      <div>{price}</div>
    </div>
  )
}
