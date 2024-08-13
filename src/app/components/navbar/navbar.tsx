"use client"
import localFont from "next/font/local"
const logoFont = localFont({
  src: "../../../../public/fonts/Corleone.otf",
})
import { usePathname } from "next/navigation"
import Link from "next/link"
import Search from "../search/Search"
const Navbar = () => {
  const pathName = usePathname()
  return (
    <div className="absolute z-40 text-white w-full p-10">
      <div className="flex justify-between">
        <div className={`flex text-4xl ${logoFont.className}`}>
          <p className="tracking-widest">NEXT</p>
          <p className="drop-shadow-2xl ml-1">MOVIE</p>
        </div>
        <div className="flex gap-4 items-center">
          <Search />
          <button className="border border-white text-white px-6 text-sm font-semibold py-3 rounded-xl flex gap-2">
            Sign Up
          </button>
          <button className="bg-green-500 text-white px-12 text-sm font-semibold py-3 rounded-lg">
            Login
          </button>
        </div>
      </div>
      <div className="flex justify-normal gap-4 font-medium top-[40%] text-center absolute left-[45%]">
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
    </div>
  )
}

export default Navbar
