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

"use client"
import { useState } from "react"

const itemsData = [
  { counterparty: "Investor", amount: "$1,500", date: "Sep 27, 5:03PM", product: "Equity" },
  { counterparty: "Grocery Store", amount: "$98", date: "Sep 28, 5:03PM", product: "Money" },
  { counterparty: "Restaurant", amount: "$100", date: "Sep 27, 12:33PM", product: "Money" },
  { counterparty: "Creditor", amount: "$520", date: "Sep 27, 5:03PM", product: "Debt" },
  { counterparty: "Investor", amount: "$1,500", date: "Sep 29, 5:03PM", product: "Equity" },
  { counterparty: "Investor", amount: "$1,500", date: "Sep 27, 5:03PM", product: "Equity" },
  { counterparty: "Grocery Store", amount: "$120", date: "Sep 27, 5:03PM", product: "Money" },
  { counterparty: "Investor 1", amount: "$1,500", date: "Sep 27, 5:03PM", product: "Equity" },
  { counterparty: "Investor 1", amount: "$1,500", date: "Sep 27, 5:03PM", product: "Equity" },
  { counterparty: "Investor 1", amount: "$1,500", date: "Sep 27, 5:03PM", product: "Equity" },
  { counterparty: "Investor 1", amount: "$1,500", date: "Sep 27, 5:03PM", product: "Equity" },
  { counterparty: "Investor 1", amount: "$1,500", date: "Sep 27, 5:03PM", product: "Equity" },
  { counterparty: "Investor 1", amount: "$1,500", date: "Sep 27, 5:03PM", product: "Equity" },
  { counterparty: "Investor 1", amount: "$1,500", date: "Sep 27, 5:03PM", product: "Equity" },
  { counterparty: "Investor 1", amount: "$1,500", date: "Sep 27, 5:03PM", product: "Equity" },
  { counterparty: "Investor 1", amount: "$1,500", date: "Sep 27, 5:03PM", product: "Equity" }
]

export default function page() {
  const [items, setItems] = useState(itemsData)
  return (
    <div className="flex flex-col bg-white">
      <div className="sticky top-0 flex flex-col left-0 right-0">
        <div className="backdrop-blur-md bg-white/50 p-2 flex flex-col border-b border-gray-100 font-bold">
          <div className="mb-2 flex flex-row">
            <div className="w-1/2 text-black text-lg">Initial</div>
            <div className="w-1/2 text-sm text-gray-600 text-right">SAFE</div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/2 text-red-900 grow text-lg text-right">$250,000</div>
            <div className="w-1/2 text-sm text-gray-600">Sep 12, 8:57PM</div>
          </div>
        </div>
      </div>
      <div className="scroll-smooth snap-y snap-mandatory">
        {items.map((item, index) => (
          <div key={index} className="snap-end p-2 flex flex-col border-b border-gray-100">
            <div className="mb-2 flex flex-row grow font-bold text-lg">
              <div className="text-black grow">{item.counterparty}</div>
              <div className="text-red-900 grow text-right">{item.amount}</div>
            </div>
            <div className="flex flex-row grow font-bold text-sm text-gray-600">
              <div className="w-1/2">{item.date}</div>
              <div className="w-1/2 text-right">{item.product}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 flex flex-col left-0 right-0">
        <div className="backdrop-blur-md bg-white/50 p-2 flex flex-col border-t border-gray-100">
          <div className="mb-2 flex flex-row grow font-bold text-lg">
            <input type="text" onChange={e => setItems(searchCounterparty(e.target.value))} className="w-1/2 text-black mr-2 focus:outline-none" placeholder="Investor" />
            <input type="text" onChange={e => setItems(searchAmount(e.target.value))} className="w-1/2 text-red-900 focus:outline-none text-right" placeholder="$" />
          </div>
          <div className="flex flex-row grow font-bold text-sm text-gray-600">
            <input type="text" onChange={e => setItems(searchDate(e.target.value))} className="w-1/2 mr-2 focus:outline-none" placeholder="Sep 27, 5:03PM" />
            <input type="text" onChange={e => setItems(searchProduct(e.target.value))} className="w-1/2 focus:outline-none text-right" placeholder="Equity" />
          </div>
        </div>
      </div>
    </div>
  )
}

function searchCounterparty(search: any): any {
  return itemsData.filter(item => item.counterparty.includes(search))
}

function searchAmount(search: any): any {
  return itemsData.filter(item => item.amount.includes(search))
}

function searchProduct(search: any): any {
  return itemsData.filter(item => item.product.includes(search))
}

function searchDate(search: any): any {
  return itemsData.filter(item => item.date.includes(search))
}

/**

## Fixed Income

**/

async function fixedIncome() {
  return ""
}
