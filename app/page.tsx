"use client"

export default function Page() {
  const items = Array.from({ length: 10 })
  return (
    <div className="flex flex-col">
      <div className="mt-4 mb-8 text-red-900 text-5xl font-bold">Welcome</div>
      <input className="sticky backdrop-blur-sm mb-4 border-none rounded-lg p-2 bg-gray-50 text-red-800 text-xl font-bold" placeholder="Search..." />
      {items.map((_, index) => (
        <div key={index} className="p-2 mb-2 rounded-lg flex flex-col bg-gray-200">
          <div className="mb-2 flex flex-row grow font-bold text-xl">
            <div className="text-red-900 grow">Grocery Store</div>
            <div className="text-red-800 grow text-right">($100)</div>
          </div>
          <div className="flex flex-row grow font-bold text-sm">
            <div className="text-red-900 grow-8">Sep 27, 5:03PM</div>
            <div className="rounded-2xl grow-2 p-2 max-w-24 text-center bg-gray-300 text-red-900">Money</div>
          </div>
        </div>
      ))}
      <div className="fixed bottom-4 right-4 bg-red-700 text-white font-bold text-xl rounded-xl p-4 shadow-lg shadow-red-500/50">
        +
      </div>
    </div>
  )
}
