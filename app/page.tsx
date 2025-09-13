"use client"
import { useState } from "react"

let paymentsData = [
  { counterparty: "Loan", amount: "1,500", date: "Sep 27, 5:03PM", product: "Debt" },
  { counterparty: "Grocery Store", amount: "98", date: "Sep 28, 5:03PM", product: "Money" }
]

let style = {
  payments: "flex flex-col scroll-smooth snap-y snap-mandatory bg-white",
  payment: "p-2 flex flex-col border-b border-gray-100 snap-end font-bold",  
  initial: "sticky top-0 left-0 right-0 backdrop-blur-md bg-white/50",
  new: "fixed bottom-0 left-0 right-0 border-t backdrop-blur-md bg-white/50",
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
      <div href="/about" className={`${style.initial} ${style.payment}`}>
        <div className={`${style.firstRow}`}>
          <div className={`${style.counterparty}`}>Initial</div>
          <div className={`${style.product}`}>SAFE</div>
        </div>
        <div className={`${style.secondRow}`}>
          <div className={`${style.amount}`}>250,000</div>
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
          <input type="text" onChange={e => setPayments(searchAmount(e.target.value))} className={`${style.amount} ${style.input}`} placeholder="" />
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
