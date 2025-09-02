"use client"
import { useState } from "react"

export default function Page() {
  const ID = "ajde23dns"
  const [journal, setJournal] = useState([
    { datetime: "01/04/2025", lineItem: "Cash", debit: 10, credit: 0 },
    { datetime: "02/04/2025", lineItem: "Content", debit: 0, credit: 15 },
    { datetime: "03/04/2025", lineItem: "Cash", debit: 15, credit: 0 }
  ])
  
  return (
    <div className="m-4 flex flex-col gap-y-4">
      <div className="text-xl">
        <span className="font-bold">SAFE</span>
        <span className="pl-2 pr-2">/</span>
        <span>{ID}</span>
      </div>
      
	  <table className="m-0 px-0 overflow-x-auto min-w-full">
		<thead>
		  <tr>
			<th className="px-4 py-2 text-left">Datetime</th>
		    <th className="px-4 py-2 text-left">Line Item</th>
			<th className="px-4 py-2 text-left">Debit</th>
			<th className="px-4 py-2 text-left">Credit</th>
		  </tr>
		</thead>
	    <tbody>
          {journal.map((entry, index) => (
            <tr key={index}>
			  <td className="px-4 py-2">{entry.datetime}</td>
              <td className="px-4 py-2">{entry.lineItem}</td>
              <td className="px-4 py-2">{entry.debit}</td>
              <td className="px-4 py-2">{entry.credit}</td>
            </tr>
          ))}
        </tbody>
	  </table>
	</div>
  )
}
