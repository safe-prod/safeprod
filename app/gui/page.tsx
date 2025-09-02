"use client"
import { useState } from "react"

export default function Page() {
  const [journal, setJournal] = useState([
    { datetime: "01/04/2025", lineItem: "Cash", debit: 10, credit: 0 },
    { datetime: "02/04/2025", lineItem: "Content", debit: 0, credit: 15 },
    { datetime: "03/04/2025", lineItem: "Cash", debit: 15, credit: 0 }
  ])
  
  return (
    <table className="overflow-x-auto min-w-full">
	  <thead>
        <tr>
		  <th className="py-2 text-left">Datetime</th>
		  <th className="py-2 text-left">Line Item</th>
	      <th className="py-2 text-left">Debit</th>
		  <th className="py-2 text-left">Credit</th>
		</tr>
	  </thead>
	  <tbody>
        {journal.map((entry, index) => (
          <tr key={index}>
		    <td className="py-2">{entry.datetime}</td>
            <td className="py-2">{entry.lineItem}</td>
            <td className="py-2">{entry.debit}</td>
            <td className="py-2">{entry.credit}</td>
          </tr>
        ))}
      </tbody>
	</table>
  )
}
