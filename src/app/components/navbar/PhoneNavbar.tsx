"use client"
import { customcn } from "@/app/utils/functions/customcn"
import {
  BookmarkIcon,
  CakeIcon,
  EyeIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Suspense } from "react"

const PhoneNavbar = () => {
  const pathName = usePathname()
  return (
    <Suspense fallback="Loading...">
      <div className="grid grid-cols-5 lg:hidden gap-4 text-xs px-2 text-center w-screen bg-black h-[40px] fixed bottom-0 z-50">
        <Link
          href="/watchlist"
          className={`flex flex-col justify-center items-center h-[40px] ${
            pathName == "/watchlist" ? "" : "text-[#55545b]"
          }`}
        >
          <BookmarkIcon className="w-5 h-5" />
          <p>WatchList</p>
        </Link>
        <div>
          <Link
            href="/discover"
            className={customcn(
              "flex flex-col justify-center items-center h-[40px]",
              pathName.includes("/discover") ? "" : "text-[#55545b]"
            )}
          >
            <EyeIcon className="w-5 h-5" />
            <p>Discover</p>
          </Link>
        </div>
        <Link
          href="/"
          className={`flex flex-col justify-center items-center h-[40px] ${
            pathName == "/" ? "" : "text-[#55545b]"
          }`}
        >
          <HomeIcon className="w-5 h-5" />
          <p>Home</p>
        </Link>
        <Link
          href="/advancedsearch/movie"
          className={`flex flex-col justify-center items-center h-[40px] ${
            pathName.includes("/advancedsearch") ? "" : "text-[#55545b]"
          }`}
        >
          <MagnifyingGlassCircleIcon className="w-5 h-5" />
          <p>Advanced</p>
        </Link>
        <Link
          href="/2nd-anniversary"
          className={`flex flex-col justify-center items-center h-[40px] ${
            pathName == "/2nd-anniversary" ? "" : "text-[#55545b]"
          }`}
        >
          <CakeIcon className="w-5 h-5" />
          <p>Anniversary</p>
        </Link>
      </div>
    </Suspense>
  )
}
export default PhoneNavbar
