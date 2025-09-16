"use client"

export async default Account() {
  return (
    <div>
      {transactions.map((transaction: any) => (
        <Transaction props={transaction}/>
      ))}
    </div>
  )
}
