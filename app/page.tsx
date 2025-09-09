"use client"

export default function Page() {
  const items = Array.from({ length: 20 })
  return (
    <div className="flex flex-col">
      <div className="scroll-smooth">
      {items.map((_, index) => (
        <div key={index} className="p-2 mb-2 rounded-lg flex flex-col border border-gray-300">
          <div className="mb-2 flex flex-row grow font-bold text-xl">
            <div className="text-red-950 grow">Investor</div>
            <div className="text-red-800 grow text-right">$1,500</div>
          </div>
          <div className="flex flex-row grow font-bold text-sm text-black">
            <div className="grow-8">Sep 27, 5:03PM</div>
            <div className="rounded-2xl grow-2 max-w-24 text-center border border-red-900">Equity</div>
          </div>
        </div>
      ))}
      </div>
      <div className="fixed bottom-0 flex flex-col left-2 right-2">
        <div className="backdrop-blur-sm bg-gray-50/50 p-2 rounded-lg flex flex-col border border-gray-300">
          <div className="mb-2 flex flex-row grow font-bold text-xl">
            <input className="text-red-950 border-b border-red-900 grow">Investor</input>
            <input className="text-red-800 border-b border-red-900 grow text-right">$</input>
          </div>
          <div className="flex flex-row grow font-bold text-sm text-black">
            <div className="grow-8">Sep 27, 5:03PM</div>
            <div className="rounded-2xl grow-2 max-w-24 text-center border border-red-900">Equity</div>
          </div>
        </div>
      </div>
    </div>
  )
}
