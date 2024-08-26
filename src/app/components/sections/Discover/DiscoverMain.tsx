"use client"
import { useSuspenseQuery } from "@tanstack/react-query"
import ScrollButtons from "../../cartGeneral/ScrollButtons"
import DiscoverMainCard from "./DiscoverMainCard"
import { operations } from "../../../../../schema"
import { categoris } from "@/app/utils/actions/config"
import { getDiscover } from "@/app/utils/actions/sectionsAuction"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Navigation } from "swiper/modules"
import "swiper/css"
import { useRef } from "react"
import SwiperCore from "swiper"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
type DiscoverProps = {
  cat: categoris
  id: number
  filter:
    | operations["discover-movie"]["parameters"]["query"]
    | operations["discover-tv"]["parameters"]["query"]
    | null
}
const Discover = ({ cat, id, filter }: DiscoverProps) => {
  const swiperRef = useRef<SwiperCore>(null)
  const { data } = useSuspenseQuery({
    queryKey: [cat + id],
    queryFn: () =>
      getDiscover({
        cat,
        id,
        filter,
      }),
  })
  if (data?.length == 0) {
    return (
      <div className="flex h-[220px] items-center justify-center">
        <p className="text-white text-3xl font-semibold">
          We currently dont have anything for you :({" "}
        </p>
      </div>
    )
  }
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
        modules={[Navigation, A11y]}
        autoplay
        slidesPerView={"auto"}
        spaceBetween={16}
        onSwiper={(swiper) => {
          (swiperRef.current as any) = swiper
        }}
      >
        {data?.map((res, index) => (
          <SwiperSlide key={index}>
            <DiscoverMainCard
              id={res.id}
              cat={cat}
              title={(res as any).title || (res as any).name}
              backdropPath={res.backdrop_path!}
              voteAverage={res.vote_average}
              mediaType={cat}
              genres={res.genre_ids!}
              key={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Discover
