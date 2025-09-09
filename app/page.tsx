"use client"

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="mt-4 text-red-900 text-5xl font-bold">Welcome</div>
      <input className="border-none bg-gray-100 text-gray-900 text-3xl" placeholder="Search..." />
      <div className="p-4 mb-2 flex flex-col bg-gray-700">
        <div className="flex flex-row grow">
          <div className="text-gray-900 grow">Grocery Store</div>
          <div className="text-red-800 grow text-right">($100)</div>
        </div>
        <div className="rounded-lg bg-gray-600 text-gray-900">Money</div>
      </div>
      <div className="p-4 mb-2 flex flex-col bg-gray-700">
        <div className="flex flex-row grow">
          <div className="text-gray-900 grow">Investor</div>
          <div className="text-red-800 grow text-right">$1,500</div>
        </div>
        <div className="rounded-lg bg-gray-600 text-gray-900">Equity</div>
      </div>
    </div>
  )
}
