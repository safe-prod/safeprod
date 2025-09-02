"use client"
import { Journal } from "./api/mcp/journal.ts"
import { useState } from "react"

export default function Page() {
  const ID = "ajde23dns"
  
  const [inputText, setInputText] = useState("")
  const [responseText, setResponseText] = useState("")
  const [tools, setTools] = useState("")
  const [journal, setJournal] = useState([
    { transaction: "Deposit", debit: 0, credit: 100 },
    { transaction: "Withdrawal", debit: 50, credit: 0 },
    { transaction: "Transfer", debit: 20, credit: 30 },
  ]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  const handleButtonClick = async () => {
    let { responseText, tools } = await Journal("openai/gpt-oss-20b", inputText)
    setResponseText(responseText)
    setTools(JSON.stringify(tools))
  }
  
  return (
    <div className="m-4 flex flex-col gap-y-4">
      <div className="text-xl">
        <span className="font-bold">SAFE</span>
        <span className="pl-2 pr-2">/</span>
        <span>{ID}</span>
      </div>
      
	  <table className="text-sm overflow-x-auto min-w-full">
		<thead>
		  <tr>
		    <th className="px-4 py-2 text-left">Transaction</th>
			<th className="px-4 py-2 text-left">Debit</th>
			<th className="px-4 py-2 text-left">Credit</th>
		  </tr>
		</thead>
	    <tbody>
          {journal.map((entry, index) => (
            <tr key={index}>
              <td className="px-4 py-2">{entry.transaction}</td>
              <td className="px-4 py-2">{entry.debit}</td>
              <td className="px-4 py-2">{entry.credit}</td>
            </tr>
          ))}
        </tbody>
	  </table>
		
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
