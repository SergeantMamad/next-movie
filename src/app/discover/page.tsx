import Image from "next/image"
import React from "react"

const Page = () => {
  return (
      <div className="flex">
        <div className="relative w-1/2 h-screen bg-green-400 left_pic">
          <Image
            fill
            src="/images/LeftPic.jpg"
            className="object-cover mix-blend-multiply"
            alt=""
          />
          <p className="mix-blend-screen text-white text-center mt-[90vh] text-6xl font-bold">
            Movies
          </p>
        </div>
        <div className="relative w-1/2 h-screen bg-red-600 right_pic">
          <Image
            fill
            src="/images/RightPic.jpg"
            className="object-cover mix-blend-multiply"
            alt=""
          />
          <p className="mix-blend-screen text-white text-center mt-[90vh] text-6xl font-bold">
            TV Series
          </p>
        </div>
      </div>
  )
}

export default Page
