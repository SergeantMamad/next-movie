"use client"
import localFont from "next/font/local"
const logoFont = localFont({
  src: "../../../../public/fonts/Corleone.otf",
})
import { usePathname } from "next/navigation"
import Link from "next/link"
import Search from "../search/Search"
import { Suspense } from "react"
import { customcn } from "@/app/utils/functions/customcn"

const Navbar = () => {
  const pathName = usePathname()
  return (
    <div className="absolute z-40 text-white p-10 w-full grid grid-cols-2 lg:grid-cols-3 place-items-center">
      <div className={`flex w-full text-4xl ${logoFont.className}`}>
        <p className="tracking-widest">NEXT</p>
        <p className="drop-shadow-2xl ml-1">MOVIE</p>
      </div>
      <div className="hidden lg:visible lg:flex justify-normal gap-4 font-medium text-center">
        <Link href="/" className={`${pathName == "/" ? "" : "text-[#55545b]"}`}>
          Home
        </Link>
        <Link href="/discover" className={customcn(pathName.includes("/discover") ? "" : "text-[#55545b]")}>
          Discover
        </Link>
        <Link
          href="/watchlist"
          className={`${pathName == "/watchlist" ? "" : "text-[#55545b]"}`}
        >
          Watchlist
        </Link>
        <Link
          href="/personsearch"
          className={`${pathName == "/personsearch" ? "" : "text-[#55545b] drop-shadow-sm"}`}
        >
          People
        </Link>
        <Link
          href="/advancedsearch/movie"
          className={`${
            pathName.includes("/advancedsearch") ? "" : "text-[#55545b] drop-shadow-sm"
          }`}
        >
          Advanced Search
        </Link>
      </div>
      <div className="flex gap-4 items-center ml-auto">
        <Suspense>
          <Search />
        </Suspense>
      </div>
    </div>
  )
}

export default Navbar
