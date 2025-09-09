"use client"

export default function Page() {
  const items = Array.from({ length: 20 })
  return (
    <div className="flex flex-col">
      <div className="mt-4 mb-8 text-red-900 text-5xl font-bold">Welcome</div>
      <input className="sticky top-2 backdrop-blur-sm mb-4 border-none rounded-lg p-2 bg-gray-50/50 text-red-900 text-3xl font-bold" placeholder="Search..." />
      {items.map((_, index) => (
        <div key={index} className="p-2 mb-2 rounded-lg flex flex-col bg-gray-200">
          <div className="mb-2 flex flex-row grow font-bold text-xl">
            <div className="text-red-950 grow">Investor</div>
            <div className="text-red-800 grow text-right">$1,500</div>
          </div>
          <div className="flex flex-row grow font-bold text-sm text-black">
            <div className="grow-8">Sep 27, 5:03PM</div>
            <div className="rounded-2xl grow-2 max-w-24 text-center bg-gray-300">Equity</div>
          </div>
        </div>
      ))}
      <div className="fixed bottom-4 right-4 bg-red-900/70 backdrop-blur-sm text-white font-bold text-xl rounded-xl p-4 shadow-sm shadow-red-500/50">
        &nbsp;+&nbsp;
      </div>
    </div>
  )
}
