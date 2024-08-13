"use client"
import Image from "next/image"
import { useState, useRef } from "react"
import { sergeantSlideObj } from "./sergeantMainSlide"
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline"
import BackImage from "./BackImage"
import ScrollButtons from "../../cartGeneral/ScrollButtons"
import TrendingCard from "../TodaysTrending/TrendingCard"

const SergeantMain = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [slideN, setSlideN] = useState(1)
  return (
    <>
      <div className="relative h-[880px]">
        <div className="relative w-full h-[880px]">
          {sergeantSlideObj.map((slide, index) => (
            <BackImage
              index={index}
              slideN={slideN}
              sergeantSlideObj={sergeantSlideObj}
            />
          ))}
          <div className="absolute left-12 top-28">
            <h1 className="font-bold text-white text-4xl">
              Sergeant Recommends
            </h1>
            <p className="text-white text-sm mt-4 text-justify">
              List of my recommended movies for you
            </p>
          </div>
          <div className="absolute right-0 top-1/3">
            <div className="relative max-w-4xl right-25">
              <ScrollButtons ref={ref} value={310} />
              <div
                className="flex mt-10 gap-4 overflow-hidden scroll-smooth"
                ref={ref}
              >
                {sergeantSlideObj.map((slide, index) => (
                  <TrendingCard
                    onClick={() => setSlideN(index)}
                    id={index}
                    slideN={slideN}
                    mediaType=""
                    title={sergeantSlideObj[index].title}
                    posterPath={sergeantSlideObj[index].cover}
                    voteAverage={0}
                    isInSergeantMain={true}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SergeantMain
