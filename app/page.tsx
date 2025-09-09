"use client"

export default function Page() {
  const items = Array.from({ length: 20 })
  return (
    <div className="flex flex-col">
      <div className="scroll-smooth">
      {items.map((_, index) => (
        <div key={index} className="p-2 mb-2 rounded-lg flex flex-col border border-gray-50">
          <div className="mb-2 flex flex-row grow font-bold text-xl">
            <div className="text-red-950 grow">Investor</div>
            <div className="text-red-900 grow text-right">$1,500</div>
          </div>
          <div className="flex flex-row grow font-bold text-sm text-gray-600">
            <div className="grow-8">Sep 27, 5:03PM</div>
            <div className="grow-2 max-w-24 text-right">Equity</div>
          </div>
        </div>
      ))}
      </div>
      <div className="fixed bottom-0 flex flex-col left-0 right-0 ml-2 mr-2">
        <div className="backdrop-blur-sm bg-white/50 p-2 rounded-lg flex flex-col border border-gray-50">
          <div className="mb-2 flex flex-row grow font-bold text-xl">
            <input type="text" className="text-red-950 border-b ml-2 border-red-900 grow-8" placeholder="Investor" />
            <input type="text" className="text-red-900 border-b border-red-900 grow-2 text-right" placeholder="$" />
          </div>
          <div className="flex flex-row grow font-bold text-sm text-gray-600">
            <div className="grow-8">Sep 27, 5:03PM</div>
            <div className="grow-2 max-w-24 text-right">Equity</div>
          </div>
        </div>
      </div>
    </div>
  )
}
