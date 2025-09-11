/***

# SAFE

***/

"use client"
import { useState } from "react"
import Link from "next/link"

let paymentsData = [
  { counterparty: "Investor", amount: "$1,500", date: "Sep 27, 5:03PM", product: "Equity" },
  { counterparty: "Grocery Store", amount: "$98", date: "Sep 28, 5:03PM", product: "Money" },
  { counterparty: "Restaurant", amount: "$100", date: "Sep 27, 12:33PM", product: "Money" },
]

let style = {
  payments: "flex flex-col scroll-smooth snap-y snap-mandatory bg-white",
  payment: "p-2 flex flex-col border-b border-gray-100 snap-end font-bold",  
  initial: "sticky top-0 left-0 right-0 backdrop-blur-md bg-white/50",
  firstRow: "mb-2 flex flex-row",
  secondRow: "flex flex-row",
  counterparty: "w-1/2 mr-2 text-lg text-black",
  product: "w-1/2 text-right text-sm text-gray-600",
  amount: "w-1/2 mr-2 text-lg text-red-900",
  date: "w-1/2 text-right text-sm text-gray-600"
}

export default function page() {
  const [payments, setPayments] = useState(paymentsData)
  return (
    <div className={`${style.payments}`}>
      <Link href="/" className={`${style.initial} ${style.payment}`}>
        <div className={`${style.firstRow}`}>
          <div className={`${style.counterparty}`}>Initial</div>
          <div className={`${style.product}`}>SAFE</div>
        </div>
        <div className={`${style.secondRow}`}>
          <div className={`${style.amount}`}>$250,000</div>
          <div className={`${style.date}`}>Sep 12, 8:57PM</div>
        </div>
      </Link>
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
    </div>
  )
}
