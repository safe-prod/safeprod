"use client"

export default function Page() {
  const items = Array.from({ length: 20 })
  return (
    <div className="flex flex-col">
      <div className="sticky top-0 flex flex-col left-0 right-0">
        <div className="backdrop-blur-md bg-white/50 p-2 flex flex-col border-b border-gray-200">
          <div className="mb-2 flex flex-row grow font-bold text-xl">
            <div className="text-black grow">Initial</div>
            <div className="text-red-900 grow text-right">$500</div>
          </div>
          <div className="flex flex-row grow font-bold text-sm text-gray-900">
            <div className="grow-8">Sep 10, 8:34PM</div>
            <div className="grow-2 max-w-24 text-right">SAFE</div>
          </div>
        </div>
      </div>
      <div className="scroll-smooth snap-y snap-mandatory">
      {items.map((_, index) => (
        <div key={index} className="snap-end p-2 flex flex-col border-b border-gray-200">
          <div className="mb-2 flex flex-row grow font-bold text-xl">
            <div className="text-black grow">Investor</div>
            <div className="text-red-900 grow text-right">$1,500</div>
          </div>
          <div className="flex flex-row grow font-bold text-sm text-gray-900">
            <div className="grow-8">Sep 27, 5:03PM</div>
            <div className="grow-2 max-w-24 text-right">Equity</div>
          </div>
        </div>
      ))}
      </div>
      <div className="fixed bottom-0 flex flex-col left-0 right-0 ml-2 mr-2">
        <div className="backdrop-blur-md bg-white/50 p-2 flex flex-col border-t border-gray-200">
          <div className="mb-2 flex flex-row grow font-bold text-xl">
            <input type="text" className="w-1/2 text-black border-b mr-2 border-red-900" placeholder="Investor" />
            <input type="text" className="w-1/2 text-red-900 border-b border-red-900 text-right" placeholder="$" />
          </div>
          <div className="flex flex-row grow font-bold text-sm text-gray-900">
            <div className="grow-8">Sep 27, 5:03PM</div>
            <div className="grow-2 max-w-24 text-right">Equity</div>
          </div>
        </div>
      </div>
    </div>
  )
}
