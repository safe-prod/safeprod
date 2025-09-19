"use client"
import { useState, useRef } from "react"
import usePrice from "../products/usePrice"

export default function Page() {
  const realProductRef = useRef(null)
  const [ realProduct, setRealProduct ] = useState("")
  const price = usePrice([])
  return (
    <div>
      <input ref={realProductRef} type="text" placeholder="Real product" />
      <button onClick={() => {setRealProduct(realProductRef.current.value)}}>Price</button>
      <div>{price}</div>
    </div>
  )
}
