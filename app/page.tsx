"use client"
import { Journal } from "../book/journal.ts"
import { useState } from "react"

export default function Portfolio() {
  const [inputText, setInputText] = useState("")
  const [responseText, setResponseText] = useState("")
  const [tools, setTools] = useState("")

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  const handleButtonClick = async () => {
    let { responseText, tools } = await Journal("openai/gpt-oss-20b", inputText)
    setResponseText(responseText)
    setTools(JSON.stringify(tools))
  }
  
  return (
    <div>
      <b>SAFE</b>
      <br/>
      Superintelligence Alignment through Financial Engineering
      <br/>
      <br/>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type your message here"
      />
      <button onClick={handleButtonClick}>Send</button>
      <p>{responseText}</p>
      <p>{tools}</p>
    </div>
  )
}
