import { customcn } from "@/app/utils/functions/customcn"
import React from "react"

type CategorisProps = {
  name: string
  id: number
  currentCategory: number
  setCurrentCategory: React.Dispatch<React.SetStateAction<number>>
}
const Categoris = ({
  name,
  id,
  currentCategory,
  setCurrentCategory,
}: CategorisProps) => {
  return (
    <button
      className={customcn(
        "min-w-[270px] rounded-xl h-[130px] text-xl font-semibold bg-black/50 transition-colors duration-300 cursor-pointer",
        id == currentCategory && "border border-green-500 bg-green-500/20"
      )}
      onClick={() => setCurrentCategory(id)}
    >
      {name}
    </button>
  )
}
export default Categoris
