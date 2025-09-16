import { createClient } from "@supabase/supabase-js"

let payments: any = []
const supabase = createClient(`${process.env.NEXT_PUBLIC_SUPABASE_URL}`, `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`)
  
export default async function useDatabase() {
  const { data, error } = await supabase.from("safeprod").select()
  payments = data
  return payments
}

function searchCounterparty(search: any): any {
  return payments.filter((payment: any) => payment.counterparty.includes(search))
}

function searchProduct(search: any): any {
  return payments.filter((payment: any) => payment.product.includes(search))
}

function searchFop(search: any): any {
  return payments.filter((payment: any) => payment.fop.includes(search))
}

function searchDate(search: any): any {
  return payments.filter((payment: any) => payment.date.includes(search))
}
