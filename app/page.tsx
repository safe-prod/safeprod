"use client"

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="mt-4 mb-8 text-red-900 text-5xl font-bold">Welcome</div>
      <input className="mb-4 border-none rounded-lg p-2 bg-gray-50 text-red-800 text-xl font-bold" placeholder="Search..." />
      <div className="p-2 mb-2 rounded-lg flex flex-col bg-gray-200">
        <div className="flex flex-row grow font-bold text-xl">
          <div className="text-red-900 grow">Grocery Store</div>
          <div className="text-red-800 grow text-right">($100)</div>
        </div>
        <div className="rounded-2xl max-w-24 text-sm bg-gray-100 text-red-700">Money</div>
      </div>
      <div className="p-2 mb-2 rounded-lg flex flex-col bg-gray-200">
        <div className="flex flex-row grow font-bold text-xl">
          <div className="text-red-900 grow">Investor</div>
          <div className="text-red-800 grow text-right">$1,500</div>
        </div>
        <div className="rounded-2xl max-w-24 text-sm bg-gray-100 text-red-700">Equity</div>
      </div>
    </div>
  )
}
