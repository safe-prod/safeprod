"use client"
import { useState } from "react"
import { getContract } from "./lib/accounting/cycle.ts"

export default function Page() {
  let contract = getContract()
  const [journal, setJournal] = useState(contract.journal)
  
  return (
  <div className="m-4 flex flex-col gap-y-4">
	<div className="font-bold">{contract.type}</div>
    <div>{contract.id}</div>
    <table className="overflow-x-auto min-w-full">
	  <thead>
        <tr>
		  <th className="py-2 text-left">Line Item</th>
	      <th className="py-2 text-left">Debit</th>
		  <th className="py-2 text-left">Credit</th>
		</tr>
	  </thead>
	  <tbody>
        {journal.map((entry, index) => (
          <tr key={index}>
            <td className="py-2">{entry[0]}</td>
            <td className="py-2">{entry[1]}</td>
            <td className="py-2">{entry[2]}</td>
          </tr>
        ))}
      </tbody>
	</table>
  </div>
  )
}
