"use client"
import { Cycle } from "../../cycle.ts"
import { useState } from "react"

export default function Page() {
  const [inputText, setInputText] = useState("")
  const [responseText, setResponseText] = useState("")
  const [tools, setTools] = useState("")
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  const handleButtonClick = async () => {
    let {responseText, tools} = await Cycle(inputText)
    setResponseText(responseText)
    setTools(JSON.stringify(tools))
  }
  
  return (
    <div className="m-4 flex flex-col gap-y-4">
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
