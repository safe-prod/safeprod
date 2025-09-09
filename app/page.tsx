"use client"

export default function Page() {
  const items = Array.from({ length: 10 })
  return (
    <div className="flex flex-col">
      <div className="mt-4 mb-8 text-red-900 text-5xl font-bold">Welcome</div>
      <input className="mb-4 border-none rounded-lg p-2 bg-gray-50 text-red-800 text-xl font-bold" placeholder="Search..." />
      {items.map((_, index) => (
        <div key={index} className="p-2 mb-2 rounded-lg flex flex-col bg-gray-200">
          <div className="flex flex-row grow font-bold text-xl">
            <div className="text-red-900 grow">Grocery Store</div>
            <div className="text-red-800 grow text-right">($100)</div>
          </div>
          <div className="rounded-2xl max-w-24 text-center font-bold text-sm bg-gray-300 text-red-900">Money</div>
        </div>
      ))}
      <div className="fixed bottom-2 right-2 bg-red-800 text-white font-bold text-xl rounded-xl p-8 shadow-lg">
        +
      </div>
    </div>
  )
}
