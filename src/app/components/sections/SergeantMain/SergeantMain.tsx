"use client"
import { useState, useEffect } from "react"
import BackImage from "./BackImage"
import TrendingCard from "../TodaysTrending/TrendingCard"
import { useSuspenseQuery } from "@tanstack/react-query"
import SergeantMainDesc from "./SergeantMainDesc"
import { getSliderItems } from "@/app/utils/actions/getSingleData"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { A11y, Navigation, Thumbs } from "swiper/modules"
import ScrollButtons from "../../cartGeneral/ScrollButtons"

const SergeantMain = ({ listNumber }: { listNumber: number }) => {
  const { data } = useSuspenseQuery({
    queryKey: ["slider" + listNumber],
    queryFn: () => getSliderItems(listNumber),
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
        posterPath: data[0].poster_path!,
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
    posterPath: "",
  })
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <>
      <div className="relative h-[1200px] lg:h-[800px]">
        <div className="relative max-w-screen h-[1200px] lg:h-[800px]">
          <Swiper
            modules={[Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
            allowTouchMove={false}
            slidesPerView={1}
          >
            {data?.map((slide, index) => (
              <SwiperSlide key={index}>
                <BackImage
                  index={index}
                  slideN={slideN.currentIndex}
                  image={slide.backdrop_path!}
                  key={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute left-12 top-28 visible lg:hidden z-10">
            <h1 className="font-bold text-white text-4xl">
              Sergeant Recommends
            </h1>
            <p className="text-white text-sm mt-4 text-justify">
              List of my recommended movies and TV series for you
            </p>
          </div>
          <div className="absolute flex flex-col lg:flex-row-reverse right-0 top-72 lg:top-1/2 lg:-translate-y-1/2 w-[95%] gap-10 z-10">
            <div className="relative max-w-full lg:max-w-[60%] left-0">
              <ScrollButtons
                nextElClass="sergeant-button-next"
                prevElClass="sergeant-button-prev"
              />
              <Swiper
                modules={[Navigation, A11y, Thumbs]}
                watchSlidesProgress
                autoplay
                slidesPerView={"auto"}
                spaceBetween={16}
                onSwiper={setThumbsSwiper as any}
                navigation={{
                  nextEl: ".sergeant-button-next",
                  prevEl: ".sergeant-button-prev",
                }}
              >
                {data?.map((slide, index) => (
                  <SwiperSlide key={index}>
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
                          posterPath: slide.poster_path!,
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
                  </SwiperSlide>
                ))}
              </Swiper>
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
                posterPath={slideN.posterPath}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SergeantMain
