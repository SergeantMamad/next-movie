import { BookmarkIcon } from "@heroicons/react/24/outline"

const MoreButtonsComponent = () => {
  return (
    <div className="flex gap-4">
      <button className="bg-green-500 text-white mt-5 px-12 text-sm font-semibold py-3 rounded-lg">
        More Info
      </button>
      <button className="border border-white text-white mt-5 px-6 text-sm font-semibold py-3 rounded-xl flex gap-2">
        <BookmarkIcon className="w-5 h-5 font-bold" />
        Add Watchlist
      </button>
    </div>
  )
}
export default MoreButtonsComponent
