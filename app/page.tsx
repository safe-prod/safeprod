"use client"

export default function Page() {
  const items = Array.from({ length: 20 })
  return (
    <div className="flex flex-col">
      <div className="mt-4 mb-8 text-red-900 text-5xl font-bold">Welcome</div>
      <div className="sticky top-0 flex flex-col">
        <div className="mb-2">&nbsp;</div>
        <input className="backdrop-blur-sm mb-4 border border-red-900 rounded-lg p-2 bg-gray-50/50 text-red-900 caret-red-900 text-3xl font-bold" placeholder="Search" />
      </div>
      <div className="scroll-smooth">
      {items.map((_, index) => (
        <div key={index} className="p-2 mb-2 rounded-lg flex flex-col border border-red-900">
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
      <div className="fixed bottom-4 right-4 bg-gray-50/70 backdrop-blur-sm text-red-900 border-red-900 border-2 font-bold text-xl rounded-xl p-4">
        &nbsp;+&nbsp;
      </div>
    </div>
  )
}
