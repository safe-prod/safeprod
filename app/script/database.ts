import { createClient } from "@supabase/supabase-js"

let payments: any = []
const supabase = createClient(`${process.env.NEXT_PUBLIC_SUPABASE_URL}`, `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`);

export async function getPayments() {
  const { data, error } = await supabase.from("safeprod").select()
  payments = data
  return payments
}

export function searchCounterparty(search: any): any {
  return payments.filter((payment: any) => payment.counterparty.includes(search))
}

export function searchProduct(search: any): any {
  return payments.filter((payment: any) => payment.product.includes(search))
}

export function searchAmount(search: any): any {
  return payments.filter((payment: any) => payment.amount.includes(search))
}

export function searchDate(search: any): any {
  return payments.filter((payment: any) => payment.date.includes(search))
}
