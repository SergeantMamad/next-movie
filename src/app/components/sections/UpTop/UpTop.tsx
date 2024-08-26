"use client"
import { useSuspenseQuery } from "@tanstack/react-query"
import UpTopCard from "./UpTopCard"
import { getUpcomingAndTopSelling } from "@/app/utils/actions/sectionsAuction"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Grid, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/grid";
import ScrollButtons from "../../cartGeneral/ScrollButtons"
const UpTop = ({ cat }: { cat: string }) => {
  const { data } = useSuspenseQuery({
    queryKey: [cat],
    queryFn: () => getUpcomingAndTopSelling(cat),
  })
  return (
    <div className="relative">
      <ScrollButtons
        nextElClass="uptop-button-next"
        prevElClass="uptop-button-prev"
      />
      <Swiper
        modules={[Navigation, A11y,Grid]}
        autoplay
        grid={{
          rows: 4,
          fill:'row'
        }}
        slidesPerView={1}
        className="max-w-[312px] mt-4"
        navigation={{
          nextEl: ".uptop-button-next",
          prevEl: ".uptop-button-prev",
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
