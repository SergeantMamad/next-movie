import { BookmarkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const MoreButtonsComponent = ({link} : {
  link:string
}) => {
  return (
    <div className="flex gap-4 w-full lg:w-auto">
      <Link href={link} className="bg-green-500 text-white mt-5 w-full lg:w-auto lg:px-12 text-sm font-semibold py-3 rounded-lg flex justify-center">
        More Info
      </Link>
      <button className="border border-white text-white mt-5 w-full lg:px-6 lg:w-auto text-sm font-semibold py-3 rounded-xl flex gap-2 justify-center">
        <BookmarkIcon className="w-5 h-5 font-bold" />
        Add Watchlist
      </button>
    </div>
  )
}
export default MoreButtonsComponent
