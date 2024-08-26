"use client"
import { useSuspenseQuery } from "@tanstack/react-query"
import UpTopCard from "./UpTopCard"
import { getUpcomingAndTopSelling } from "@/app/utils/actions/sectionsAuction"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Grid, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/grid"
import SwiperCore from "swiper"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { useRef } from "react"
const UpTop = ({ cat }: { cat: string }) => {
  const { data } = useSuspenseQuery({
    queryKey: [cat],
    queryFn: () => getUpcomingAndTopSelling(cat),
  })
  const swiperRef = useRef<SwiperCore>(null)
  return (
    <div className="relative">
      <>
        <button
          onClick={() => swiperRef?.current?.slideNext()}
          className="w-10 h-10 bg-[#55545b] rounded-full absolute z-10 top-1/2 -translate-y-1/2 -right-0"
        >
          <ChevronRightIcon className="w-7 h-7 mx-auto text-white" />
        </button>

        <button
          onClick={() => swiperRef?.current?.slidePrev()}
          className="w-10 h-10 bg-[#55545b] rounded-full absolute top-1/2 -translate-y-1/2 -left-5 z-10"
        >
          <ChevronLeftIcon className="w-7 h-7 mx-auto text-white" />
        </button>
      </>
      <Swiper
        modules={[Navigation, A11y, Grid]}
        autoplay
        grid={{
          rows: 4,
          fill: "row",
        }}
        slidesPerView={1}
        className="max-w-[312px] mt-4"
        onSwiper={(swiper) => {
          ;(swiperRef.current as any) = swiper
        }}
      >
        {data?.map((res, index) => (
          <SwiperSlide key={index}>
            <UpTopCard
              id={res.id}
              mediaType={"movie"}
              voteAverage={res.vote_average}
              posterPath={res.poster_path!}
              title={res.title!}
              genres={res.genre_ids!}
              key={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default UpTop
