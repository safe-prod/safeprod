"use client"
import { useState } from "react"
import { style } from "./style/style.ts"
import { createClient } from "@supabase/supabase-js"
/*
import { embed } from "ai"
const result = await embed({
  model: `${process.env.NEXT_PUBLIC_EMBEDDING_MODEL}`,
  value: "Grocery Store"
})
*/

const supabase = await createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
const { paymentsData: any } = await supabase.from("safeprod").select();

export default function page() {
  const [payments, setPayments] = useState(paymentsData)
  return (
    <div className={`${style.payments}`}>
      <div className={`${style.initial} ${style.payment}`}>
        <div className={`${style.firstRow}`}>
          <div className={`${style.fop}`}>Initial</div>
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
              <div className={`${style.fop}`}>{payment.fop}</div>
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
          <input type="text" onChange={e => setPayments(searchCounterparty(e.target.value))} className={`${style.fop} ${style.input}`} placeholder="" />
          <input type="text" onChange={e => setPayments(searchProduct(e.target.value))} className={`${style.product} ${style.input}`} placeholder="" />
        </div>
        <div className={`${style.secondRow}`}>
          <input type="text" onChange={e => setPayments(searchAmount(e.target.value))} className={`${style.amount} ${style.input}`} placeholder="" />
          <input type="text" onChange={e => setPayments(searchDate(e.target.value))} className={`${style.date} ${style.input}`} placeholder="" />
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
