"use client"
import { useSuspenseQuery } from "@tanstack/react-query"
import PopularCard from "./PopularCard"
import { getTodayPopularList } from "@/app/utils/actions/sectionsAuction"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Navigation } from "swiper/modules"
import { useRef } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import SwiperCore from "swiper"
import ScrollButtons from "../../cartGeneral/ScrollButtons"

const Popular = ({ cat }: { cat: "movie" | "tv" }) => {
  const swiperRef = useRef<SwiperCore>(null)
  const { data } = useSuspenseQuery({
    queryKey: ["todayPopular"],
    queryFn: () => getTodayPopularList(cat),
  })
  return (
    <div className="relative">
      <ScrollButtons
        nextElClass="popular-button-next"
        prevElClass="popular-button-prev"
      />
      <Swiper
        modules={[Navigation, A11y]}
        autoplay
        slidesPerView={"auto"}
        spaceBetween={16}
        navigation={{
          nextEl: ".popular-button-next",
          prevEl: ".popular-button-prev",
        }}
      >
        {data?.map((res, index) => (
          <SwiperSlide key={index}>
            <PopularCard
              id={res.id}
              index={index}
              title={(res as any).title! || (res as any).name!}
              posterPath={res.poster_path!}
              mediaType={cat}
              voteAverage={res.vote_average}
              key={index}
              genres={res.genre_ids!}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Popular
