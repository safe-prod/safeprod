"use client"
import { useState } from "react"

export default function Page() {
  const ID = "ajde23dns"
  const [journal, setJournal] = useState([
    { transaction: "Deposit", debit: 0, credit: 100 },
    { transaction: "Withdrawal", debit: 50, credit: 0 },
    { transaction: "Transfer", debit: 20, credit: 30 },
  ])
  
  return (
    <div className="m-4 flex flex-col gap-y-4">
      <div className="text-xl">
        <span className="font-bold">SAFE</span>
        <span className="pl-2 pr-2">/</span>
        <span>{ID}</span>
      </div>
      
	  <table className="overflow-x-auto min-w-full">
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
	</div>
  )
}
