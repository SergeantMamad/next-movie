"use client"
import localFont from "next/font/local"
const logoFont = localFont({
  src: "../../../../public/fonts/Corleone.otf",
})
import { usePathname } from "next/navigation"
import Link from "next/link"
import Search from "../search/Search"
import { Suspense } from "react"
const Navbar = () => {
  const pathName = usePathname()
  return (
    <div className="absolute z-40 text-white p-10 w-screen grid grid-cols-2 lg:grid-cols-3 place-items-center">
      <div className={`flex w-full text-4xl ${logoFont.className}`}>
        <p className="tracking-widest">NEXT</p>
        <p className="drop-shadow-2xl ml-1">MOVIE</p>
      </div>
      <div className="hidden lg:visible lg:flex justify-normal gap-4 font-medium text-center">
        <Link href="/" className={`${pathName == "/" ? "" : "text-[#55545b]"}`}>
          Home
        </Link>
        <Link
          href="/discover"
          className={`${
            pathName == "/discover" ||
            pathName.includes("/series") ||
            pathName.includes("/movie")
              ? ""
              : "text-[#55545b]"
          }`}
        >
          Discover
        </Link>
        <Link
          href="/about"
          className={`${pathName == "/about" ? "" : "text-[#55545b]"}`}
        >
          About
        </Link>
      </div>
      <div className="flex gap-4 items-center ml-auto">
        <Suspense>
          <Search />
        </Suspense>
        <div className="lg:flex gap-4 hidden">
          <button className="border border-white text-white w-mac text-sm font-semibold py-3 px-7 rounded-xl flex gap-2">
            Sign Up
          </button>
          <button className="bg-green-500 text-white w-max text-sm font-semibold  px-7 py-3 rounded-lg">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
