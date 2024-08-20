"use client"
import { useState, useRef, useEffect } from "react"
import BackImage from "./BackImage"
import ScrollButtons from "../../cartGeneral/ScrollButtons"
import TrendingCard from "../TodaysTrending/TrendingCard"
import { useSuspenseQuery } from "@tanstack/react-query"
import { SliderItems } from "@/action"
import MoreButtonsComponent from "../../cartGeneral/MoreButtonsComponent"

const SergeantMain = ({ listNumber }: { listNumber: number }) => {
  const { data } = useSuspenseQuery({
    queryKey: ["slider" + listNumber],
    queryFn: () => SliderItems(listNumber),
  })
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (data)
      setSlideN({
        currentIndex: 0,
        id: data[0].id,
        title: data[0].title!,
        desc: data[0].overview!,
        mediaType: data[0].media_type!,
      })
  }, [data])
  const [slideN, setSlideN] = useState({
    currentIndex: 0,
    id: 0,
    title: "",
    desc: "",
    mediaType: "",
  })
  return (
    <>
      <div className="relative h-[1200px] xl:h-[880px]">
        <div className="relative w-full h-[1200px] xl:h-[880px]">
          {data?.map((slide, index) => (
            <BackImage
              index={index}
              slideN={slideN.currentIndex}
              desc={slide.overview!}
              image={slide.backdrop_path!}
              title={slide.title || (slide as any).name}
              key={index}
              id={slide.id}
              mediaType={slide.media_type!}
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
          <div className="absolute flex flex-col xl:flex-row-reverse right-0 top-60 xl:top-1/3 w-[95%] gap-10">
            <div className="relative max-w-full xl:max-w-[60%] right-25">
              <ScrollButtons ref={ref} value={310} />
              <div
                className="flex gap-4 overflow-hidden scroll-smooth"
                ref={ref}
              >
                {data?.map((slide, index) => (
                  <TrendingCard
                    onClick={() =>
                      setSlideN({
                        currentIndex: index,
                        id: slide.id,
                        desc: slide.overview!,
                        title: slide.title || (slide as any).name,
                        mediaType: "tv",
                      })
                    }
                    id={index}
                    slideN={slideN.currentIndex}
                    mediaType={slide.media_type!}
                    title={slide.title || (slide as any).name}
                    posterPath={slide.poster_path!}
                    voteAverage={slide.vote_average}
                    isInSergeantMain={true}
                    key={index}
                    genres={slide.genre_ids!}
                  />
                ))}
              </div>
            </div>
            <div>
              <h1 className="font-bold text-white text-4xl mx-auto xl:text-5xl">
                {slideN.title}
              </h1>
              <p className="text-white text-[13px] mt-4 text-justify w-[96%] xl:w-full">
                {slideN.desc}
              </p>
                <MoreButtonsComponent
                  link={
                    slideN.mediaType == "tv"
                      ? `series/${slideN.id}`
                      : `/movie/${slideN.id}`
                  }
                />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SergeantMain
