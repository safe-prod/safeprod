"use client"

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="mt-4 mb-2 text-red-900 text-5xl font-bold">Welcome</div>
      <input className="border-none rounded-lg p-2 bg-gray-50 text-gray-900 text-2xl" placeholder="Search..." />
      <div className="p-2 mb-2 flex flex-col bg-gray-200 text-xl">
        <div className="flex flex-row grow">
          <div className="text-gray-900 grow">Grocery Store</div>
          <div className="text-red-800 grow text-right">($100)</div>
        </div>
        <div className="rounded-lg bg-gray-300 text-gray-900">Money</div>
      </div>
      <div className="p-2 mb-2 flex flex-col bg-gray-200 text-xl">
        <div className="flex flex-row grow">
          <div className="text-gray-900 grow">Investor</div>
          <div className="text-red-800 grow text-right">$1,500</div>
        </div>
        <div className="rounded-lg bg-gray-300 text-gray-900">Equity</div>
      </div>
    </div>
  )
}
