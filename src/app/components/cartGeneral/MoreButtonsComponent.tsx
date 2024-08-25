"use client"
import { Items } from "@/app/utils/configs/itemsType"
import { BookmarkIcon } from "@heroicons/react/24/outline"
import { useLocalStorage } from "usehooks-ts"
import Link from "next/link"
import { useContext } from "react"
import { StorageContext } from "@/app/utils/context/storageContext"

const MoreButtonsComponent = ({
  link,
  id,
  posterPath,
  genres,
  title,
  mediaType,
}: {
  link: string
  id: string
  posterPath: string
  title: string
  mediaType: string
  genres: number[]
}) => {
  const context = useContext(StorageContext)
  return (
    <div className="flex gap-4 w-full lg:w-auto">
      <Link
        href={link}
        className="bg-green-500 text-white mt-5 w-full lg:w-auto lg:px-12 text-sm font-semibold py-3 rounded-lg flex justify-center"
      >
        More Info
      </Link>
      <button
        className="border border-white text-white mt-5 w-full lg:px-6 lg:w-auto text-sm font-semibold py-3 rounded-xl flex gap-2 justify-center"
        onClick={() =>
          context?.handlePutItems({ genres, id, mediaType, posterPath, title })
        }
      >
        <BookmarkIcon className="w-5 h-5 font-bold" />
        {context?.items?.find((item) => item.id == id)
          ? "In Watchlist"
          : "Add in WatchList"}
      </button>
    </div>
  )
}
export default MoreButtonsComponent
