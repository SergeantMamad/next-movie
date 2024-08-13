import Image from "next/image"
import Link from "next/link"
import React from "react"

const Page = () => {
  return (
    <div className="flex">
      <Link href="discover/movies" className="relative bg-green-500 h-screen left_pic w-1/2">
          <Image
            fill
            src="/images/LeftPic.jpg"
            className="object-cover mix-blend-multiply"
            alt=""
          />
          <p className="mix-blend-screen text-white text-center mt-[90vh] text-6xl font-bold">
            Movies
          </p>
      </Link>
      <Link href="discover/series" className="relative bg-red-600 h-screen right_pic w-1/2">
        <Image
          fill
          src="/images/RightPic.jpg"
          className="object-cover mix-blend-multiply"
          alt=""
        />
        <p className="mix-blend-screen text-white text-center mt-[90vh] text-6xl font-bold">
          TV Series
        </p>
      </Link>
    </div>
  )
}

export default Page
