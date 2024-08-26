"use client"
import { useSuspenseQuery } from "@tanstack/react-query"
import TrendingCard from "./TrendingCard"
import { getMainWeekTrending } from "@/app/utils/actions/sectionsAuction"
import { Swiper, SwiperSlide} from "swiper/react"
import { A11y, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import ScrollButtons from "../../cartGeneral/ScrollButtons"

const WeekTrending = ({ cat }: { cat: "movie" | "tv" | "all" }) => {
  const { data } = useSuspenseQuery({
    queryKey: ["WeekTrending" + cat],
    queryFn: () => getMainWeekTrending(cat),
  })

  return (
    <div className="relative">
      <ScrollButtons
        nextElClass="trending-button-next"
        prevElClass="trending-button-prev"
      />
      <Swiper
        modules={[Navigation, A11y]}
        autoplay
        slidesPerView={"auto"}
        spaceBetween={16}
        navigation={{
          nextEl: ".trending-button-next",
          prevEl: ".trending-button-prev",
        }}
      >
        {data?.map((res, index) =>
          res.vote_average == 0.0 ? null : (
            <SwiperSlide key={index}>
              <TrendingCard
                id={res.id}
                mediaType={res.media_type!}
                posterPath={res.poster_path!}
                title={(res as any).title! || (res as any).name}
                voteAverage={res.vote_average}
                type="main"
                key={index}
                genres={res.genre_ids!}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  )
}

export default WeekTrending
