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
    <div className="m-4 flex flex-col">
      <div className="text-xl">
        <span className="font-bold">SAFE</span>
        <span className="pl-2 pr-2">/</span>
        <span>{ID}</span>
      </div>
      
      <div className="overflow-x-auto">
			<table className="min-w-full border-collapse border border-gray-200">
				<thead>
					<tr className="bg-gray-100">
						<th className="border border-gray-200 px-4 py-2 text-left">Transaction</th>
						<th className="border border-gray-200 px-4 py-2 text-left">Debit</th>
						<th className="border border-gray-200 px-4 py-2 text-left">Credit</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="border border-gray-200 px-4 py-2">prkfk34ss</td>
						<td className="border border-gray-200 px-4 py-2">$100</td>
						<td className="border border-gray-200 px-4 py-2"></td>
					</tr>
				</tbody>
			</table>
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
