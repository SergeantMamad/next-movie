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
type DiscoverProps = {
  cat: categoris
  id: number
  filter:
    | operations["discover-movie"]["parameters"]["query"]
    | operations["discover-tv"]["parameters"]["query"]
    | null
}
const Discover = ({ cat, id, filter }: DiscoverProps) => {
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
      <ScrollButtons
        nextElClass="discover-button-next"
        prevElClass="discover-button-prev"
      />
      <Swiper
        modules={[Navigation, A11y]}
        autoplay
        slidesPerView={"auto"}
        spaceBetween={16}
        navigation={{
          nextEl: ".discover-button-next",
          prevEl: ".discover-button-prev",
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
