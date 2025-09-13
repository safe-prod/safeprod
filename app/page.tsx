"use client"
import { useState } from "react"
import { style } from "./style/style.ts"
import { embed } from "ai"

const result = await embed({
  model: "google/text-embedding-005",
  value: "Grocery Store"
})

let paymentsData = [
  { counterparty: "Grocery Store", amount: result.embedding[0], date: "Sep 28, 5:03PM", product: "Money" }
]

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
