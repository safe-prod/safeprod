"use client"
import { useState } from "react"
import { style } from "./style/style.ts"
import { getEmbedding } from "./script/embedding.ts"
import { getPayments, searchCounterparty, searchFop, searchDate, searchProduct } from "./script/database.ts" 

let paymentsData = await getPayments()
// let embedding = await getEmbedding("safe")
let embedding = ["test"]

export default async function page() {
  const [payments, setPayments] = useState(paymentsData)
  
  return (
    <div className={`${style.payments}`}>
      <div className={`${style.initial} ${style.payment}`}>
        <div className={`${style.firstRow}`}>
          <div className={`${style.counterparty}`}>SAFE</div>
          <div className={`${style.product}`}>SAFE</div>
        </div>
        <div className={`${style.secondRow}`}>
          <div className={`${style.fop}`}>{JSON.stringify(embedding)}</div>
          <div className={`${style.date}`}>Sep 12, 8:57PM</div>
        </div>
      </div>
      <div>
        {payments.map((payment: any) => (
          <div key={payment.id} className={`${style.payment}`}>
            <div className={`${style.firstRow}`}>
              <div className={`${style.counterparty}`}>{payment.counterparty}</div>
              <div className={`${style.product}`}>{payment.product}</div>
            </div>
            <div className={`${style.secondRow}`}>
              <div className={`${style.fop}`}>{payment.fop}</div>
              <div className={`${style.date}`}>{payment.date}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={`${style.new} ${style.payment}`}>
        <div className={`${style.firstRow}`}>
          <input type="text" onChange={e => setPayments(searchCounterparty(e.target.value))} className={`${style.counterparty} ${style.input}`} placeholder="" />
          <input type="text" onChange={e => setPayments(searchProduct(e.target.value))} className={`${style.product} ${style.input}`} placeholder="" />
        </div>
        <div className={`${style.secondRow}`}>
          <input type="text" onChange={e => setPayments(searchFop(e.target.value))} className={`${style.fop} ${style.input}`} placeholder="" />
          <input type="text" onChange={e => setPayments(searchDate(e.target.value))} className={`${style.date} ${style.input}`} placeholder="" />
        </div>
      </div>
    </div>
  )
}
