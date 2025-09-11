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

let paymentsData = [
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

let style = {
  payments: "flex flex-col scroll-smooth snap-y snap-mandatory bg-white",
  payment: "p-2 flex flex-col border-b border-gray-100 snap-end font-bold items-center",  
  initial: "sticky top-0 left-0 right-0 backdrop-blur-md bg-white/50",
  new: "fixed bottom-0 left-0 right-0 backdrop-blur-md bg-white/50",
  firstRow: "mb-2 flex flex-row",
  secondRow: "flex flex-row",
  counterparty: "w-1/2 mr-2 text-lg text-black",
  product: "w-1/2 text-right text-sm text-gray-600",
  amount: "w-1/2 mr-2 text-lg text-red-900",
  date: "w-1/2 text-right text-sm text-gray-600",
  input: "focus:outline-none"
}

export default function page() {
  const [payments, setPayments] = useState(paymentsData)
  return (
    <div className={`${style.payments}`}>
      <div className={`${style.initial} ${style.payment}`}>
        <div className={`${style.firstRow}`}>
          <div className={`${style.counterparty}`}>Initial</div>
          <div className={`${style.product}`}>SAFE</div>
        </div>
        <div className={`${style.secondRow}`}>
          <div className={`${style.amount}`}>$250,000</div>
          <div className={`${style.date}`}>Sep 12, 8:57PM</div>
        </div>
      </div>
      <div>
        {payments.map((payment, index) => (
          <div key={index} className={`${style.payment}`}>
            <div className={`${style.firstRow}`}>
              <div className={`${style.counterparty}`}>{payment.counterparty}</div>
              <div className={`${style.product}`}>{payment.product}</div>
            </div>
            <div className={`${style.secondRow}`}>
              <div className={`${style.amount}`}>{payment.amount}</div>
              <div className={`${style.date}`}>{payment.date}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={`${style.new} ${style.payment}`}>
        <div className={`${style.firstRow}`}>
          <input type="text" onChange={e => setPayments(searchCounterparty(e.target.value))} className={`${style.counterparty} ${style.input}`} placeholder="Investor" />
          <input type="text" onChange={e => setPayments(searchProduct(e.target.value))} className={`${style.product} ${style.input}`} placeholder="Equity" />
        </div>
        <div className={`${style.secondRow}`}>
          <input type="text" onChange={e => setPayments(searchAmount(e.target.value))} className={`${style.amount} ${style.input}`} placeholder="$" />
          <input type="text" onChange={e => setPayments(searchDate(e.target.value))} className={`${style.date} ${style.input}`} placeholder="Sep 27, 5:03PM" />
        </div>
      </div>
    </div>
  )
}

function searchCounterparty(search: any): any {
  return paymentsData.filter(payment => payment.counterparty.includes(search))
}

function searchProduct(search: any): any {
  return paymentsData.filter(payment => payment.product.includes(search))
}

function searchAmount(search: any): any {
  return paymentsData.filter(payment => payment.amount.includes(search))
}

function searchDate(search: any): any {
  return paymentsData.filter(payment => payment.date.includes(search))
}
