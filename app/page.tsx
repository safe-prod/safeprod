"use client"
import { SI } from "./si.ts"
import { useState } from "react"

export default function Portfolio() {
  const [inputText, setInputText] = useState("")
  const [responseText, setResponseText] = useState("")

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  const handleButtonClick = async () => {
    let response = SI("openai/gpt-oss-20b", inputText)
    setResponseText(response)
  }
  
  return (
    <div>
      <b>SAFE</b>
      <br/>
      Superintelligence Alignment through Financial Engineering
      <br/>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type your message here"
      />
      <button onClick={handleButtonClick}>Send</button>
      <p>{responseText}</p>
    </div>
  )
}
