"use client"

export default async function Account() {
  return (
    <div>
      {transactions.map((transaction: any) => (
        <Transaction props={transaction}/>
      ))}
    </div>
  )
}
