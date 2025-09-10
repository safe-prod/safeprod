"use client"

/***

# Payment

Pay meaning:
- From Middle English payen, from Old French paiier (“pay”), from Medieval Latin pācāre (“to *settle*, satisfy”) from Latin pācāre (“to pacify”).
- To discharge a debt or other obligation, by giving or doing what is due or required.
- To give money or other compensation to in exchange for goods or services.
- To give something else than money.
- To suffer consequences. 
- Note: The two concepts of buy and sell can be replaced by the single concept of pay. It has more weight when said that a person pays another person with a stock, rather than saying a person buys a stock from another person. The notions of buyer and seller can be replaced with the morphologically simpler payer and payee. What is being paid is called a financial product e.g. money, bond, stock etc.

Tender meaning:
- Any offer made to *settle a debt*, which may include cash, securities, or other forms of payment. This usage emphasizes the act of offering something to fulfill a financial obligation. Comes from legal tender.
- A formal offer to buy or sell something.

***/

export default function Page() {
  const items = [
    { investor: "Investor 1", amount: "$1,500", date: "Sep 27, 5:03PM", type: "Equity" },
    { investor: "Investor 2", amount: "$2,000", date: "Sep 28, 6:00PM", type: "Debt" },
    { investor: "Investor 3", amount: "$1,800", date: "Sep 29, 7:15PM", type: "Equity" },
    { investor: "Investor 1", amount: "$1,500", date: "Sep 27, 5:03PM", type: "Equity" },
    { investor: "Investor 2", amount: "$2,000", date: "Sep 28, 6:00PM", type: "Debt" },
    { investor: "Investor 3", amount: "$1,800", date: "Sep 29, 7:15PM", type: "Equity" },
    { investor: "Investor 1", amount: "$1,500", date: "Sep 27, 5:03PM", type: "Equity" },
    { investor: "Investor 2", amount: "$2,000", date: "Sep 28, 6:00PM", type: "Debt" },
    { investor: "Investor 3", amount: "$1,800", date: "Sep 29, 7:15PM", type: "Equity" },
    { investor: "Investor 1", amount: "$1,500", date: "Sep 27, 5:03PM", type: "Equity" },
    { investor: "Investor 2", amount: "$2,000", date: "Sep 28, 6:00PM", type: "Debt" },
    { investor: "Investor 3", amount: "$1,800", date: "Sep 29, 7:15PM", type: "Equity" }
  ]
  return (
    <div className="flex flex-col">
      <div className="sticky top-0 flex flex-col left-0 right-0">
        <div className="backdrop-blur-md bg-white/50 p-2 flex flex-row border-b border-gray-300 text-sm">
          <div className="w-2/3 flex flex-row grow font-bold">
            <div className="w-2/3 text-black grow">Initial</div>
            <div className="w-1/2 text-red-900 grow text-right">$250,000</div>
          </div>
          <div className="w-1/3 flex flex-row grow font-bold text-gray-900">
            <div className="w-1/2">Sep 10, 8:34PM</div>
            <div className="w-1/2 text-right">SAFE</div>
          </div>
        </div>
      </div>
      <div className="scroll-smooth snap-y snap-mandatory">
        {items.map((item, index) => (
          <div key={index} className="snap-end p-2 flex flex-col border-b border-gray-300">
            <div className="mb-2 flex flex-row grow font-bold text-lg">
              <div className="text-black grow">{item.investor}</div>
              <div className="text-red-900 grow text-right">{item.amount}</div>
            </div>
            <div className="flex flex-row grow font-bold text-sm text-gray-900">
              <div className="w-1/2">{item.date}</div>
              <div className="w-1/2 text-right">{item.type}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 flex flex-col left-0 right-0">
        <div className="backdrop-blur-md bg-white/50 p-2 flex flex-col border-t border-gray-300">
          <div className="mb-2 flex flex-row grow font-bold text-lg">
            <input type="text" className="w-1/2 text-black mr-2 focus:outline-none" placeholder="Investor" />
            <input type="text" className="w-1/2 text-red-900 focus:outline-none text-right" placeholder="$" />
          </div>
          <div className="flex flex-row grow font-bold text-sm text-gray-900">
            <input type="text" className="w-1/2 mr-2 focus:outline-none" placeholder="Sep 27, 5:03PM" />
            <input type="text" className="w-1/2 focus:outline-none text-right" placeholder="Equity" />
          </div>
        </div>
      </div>
    </div>
  )
}
