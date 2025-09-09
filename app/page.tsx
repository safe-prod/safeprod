"use client"

export default function Page() {
  const items = Array.from({ length: 20 })
  return (
    <div className="flex flex-col">
      <div className="scroll-smooth">
      {items.map((_, index) => (
        <div key={index} className="p-2 mb-2 rounded-lg shadow-sm flex flex-col border border-gray-50">
          <div className="mb-2 flex flex-row grow font-bold text-xl">
            <div className="text-black grow">Investor</div>
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
        <div className="backdrop-blur-md bg-white/30 p-2 rounded-lg shadow-sm flex flex-col border border-gray-50">
          <div className="mb-2 flex flex-row grow font-bold text-xl">
            <div><input type="text" className="text-black border-b ml-2 border-red-900" placeholder="Investor" /></div>
            <div><input type="text" className="text-red-900 border-b border-red-900 text-right" placeholder="$" /></div>
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
