"use client"

export default function Page() {
  const items = Array.from({ length: 20 })
  return (
    <div className="flex flex-col">
      <div className="mt-4 mb-4 text-red-900 text-5xl font-bold">Welcome</div>
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
      <div className="fixed bottom-0 right-0">
        <textarea className="backdrop-blur-sm border rounded-sm border-red-900 p-2 bg-gray-50/50 text-red-900 caret-red-900 text-base font-bold" placeholder="Ask anything" />
        <div className="bg-gray-100 pb-2">&nbsp;</div>
      </div>
    </div>
  )
}
