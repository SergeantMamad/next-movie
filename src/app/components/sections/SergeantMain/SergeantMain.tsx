"use client"
import { useState, useEffect } from "react"
import BackImage from "./BackImage"
import ScrollButtons from "../../cartGeneral/ScrollButtons"
import TrendingCard from "../TodaysTrending/TrendingCard"
import { useSuspenseQuery } from "@tanstack/react-query"
import { SliderItems } from "@/action"
import { useObserveElementWidth } from "@/app/utils/hooks/useObserveElementWidth"
import SergeantMainDesc from "./SergeantMainDesc"
import useSwipe from "@/app/utils/hooks/useSwipe"
import { scrollLeftRight } from "@/app/utils/functions/scrollLeftRight"

const SergeantMain = ({ listNumber }: { listNumber: number }) => {
  const { ref: divRef, width } = useObserveElementWidth<HTMLDivElement>()
  const { onTouchEnd, onTouchMove, onTouchStart } = useSwipe({
    onSwipedLeft: () => scrollLeftRight(divRef, "left", width + 16),
    onSwipedRight: () => scrollLeftRight(divRef, "right", width + 16),
  })
  const { data } = useSuspenseQuery({
    queryKey: ["slider" + listNumber],
    queryFn: () => SliderItems(listNumber),
  })
  useEffect(() => {
    if (data)
      setSlideN({
        currentIndex: 0,
        id: data[0].id,
        title: data[0].title || (data[0] as any).name,
        desc: data[0].overview!,
        mediaType: data[0].media_type!,
        voteAvreage: data[0].vote_average,
        genres: data[0].genre_ids!,
      })
  }, [data])
  const [slideN, setSlideN] = useState({
    currentIndex: 0,
    id: 0,
    title: "",
    desc: "",
    mediaType: "",
    voteAvreage: 0,
    genres: [] as number[],
  })
  return (
    <>
      <div className="relative h-[1200px] lg:h-[800px]">
        <div className="relative w-full h-[1200px] lg:h-[800px]">
          {data?.map((slide, index) => (
            <BackImage
              index={index}
              slideN={slideN.currentIndex}
              image={slide.backdrop_path!}
              key={index}
            />
          ))}
          <div className="absolute left-12 top-28 visible lg:hidden">
            <h1 className="font-bold text-white text-4xl">
              Sergeant Recommends
            </h1>
            <p className="text-white text-sm mt-4 text-justify">
              List of my recommended movies and TV series for you
            </p>
          </div>
          <div className="absolute flex flex-col lg:flex-row-reverse right-0 top-72 lg:top-1/2 lg:-translate-y-1/2 w-[95%] gap-10">
            <div className="relative max-w-full lg:max-w-[60%] right-25">
              <ScrollButtons ref={divRef} value={width + 16} />
              <div
                className="flex gap-4 overflow-hidden scroll-smooth"
                ref={divRef}
                onTouchEnd={onTouchEnd}
                onTouchMove={onTouchMove}
                onTouchStart={onTouchStart}
              >
                {data?.map((slide, index) => (
                  <TrendingCard
                    onClick={() =>
                      setSlideN({
                        currentIndex: index,
                        id: slide.id,
                        desc: slide.overview!,
                        title: slide.title || (slide as any).name,
                        mediaType: slide.media_type!,
                        genres: slide.genre_ids!,
                        voteAvreage: slide.vote_average,
                      })
                    }
                    id={index}
                    slideN={slideN.currentIndex}
                    mediaType={slide.media_type!}
                    title={slide.title || (slide as any).name}
                    posterPath={slide.poster_path!}
                    voteAverage={slide.vote_average}
                    type="sergenat"
                    key={index}
                    genres={slide.genre_ids!}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-28 w-full">
              <div className="hidden lg:block">
                <h1 className="font-bold text-white text-4xl">
                  Sergeant Recommends
                </h1>
                <p className="text-white text-sm mt-4 text-justify">
                  List of my recommended movies and TV series for you
                </p>
              </div>
              <SergeantMainDesc
                title={slideN.title}
                mediaType={slideN.mediaType}
                id={slideN.id}
                desc={slideN.desc}
                genres={slideN.genres}
                voteAverage={slideN.voteAvreage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SergeantMain
