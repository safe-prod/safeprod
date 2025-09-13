import localFont from "next/font/local"

const font = localFont({
  src: [
    {path: "./regular.woff2", weight: "400"},
    {path: "./bold.woff2", weight: "700"}
  ]
})

export const style = {
  font: font.className,
  payments: "flex flex-col scroll-smooth snap-y snap-mandatory bg-white",
  payment: "p-2 flex flex-col border-b border-gray-100 snap-end font-bold",  
  initial: "sticky top-0 left-0 right-0 backdrop-blur-md bg-white/50",
  new: "fixed bottom-0 left-0 right-0 border-t backdrop-blur-md bg-white/50",
  firstRow: "mb-2 flex flex-row",
  secondRow: "flex flex-row",
  fop: "w-1/2 mr-2 text-lg text-black",
  product: "w-1/2 text-right text-sm text-gray-600",
  amount: "w-1/2 mr-2 text-lg text-red-900",
  date: "w-1/2 text-right text-sm text-gray-600",
  input: "focus:outline-none"
} 
