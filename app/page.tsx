"use client"
import { Journal } from "./api/mcp/journal.ts"
import { useState } from "react"

export default function Page() {
  const ID = "ajde23dns"
  
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
    <div className="m-8 flex flex-col">
      <div className="text-xl">
        <span className="font-bold">SAFE</span>
        <span className="pl-2 pr-2">/</span>
        <span>{ID}</span>
      </div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type your message here"
      />
      <button onClick={handleButtonClick}>Send</button>
      <p>{responseText}</p>
      <br/>
      <p>{tools}</p>
    </div>
  )
}
