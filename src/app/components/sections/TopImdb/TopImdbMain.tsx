"use client"
import { useSuspenseQuery } from "@tanstack/react-query"
import TopImdbMainCart from "./TopImdbMainCart"
import { getTopImdbMovies } from "@/app/utils/actions/sectionsAuction"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Navigation } from "swiper/modules"
import "swiper/css"
import ScrollButtons from "../../cartGeneral/ScrollButtons"

const TopImdbMain = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["TopImdb"],
    queryFn: getTopImdbMovies,
  })
  return (
    <div className="relative">
      <ScrollButtons
        nextElClass="imdb-button-next"
        prevElClass="imdb-button-prev"
      />
      <Swiper
        modules={[Navigation, A11y]}
        className="w-[90vw] xl:w-[645px] !m-0"
        slidesPerView={1}
        navigation={{
          nextEl: ".imdb-button-next",
          prevEl: ".imdb-button-prev",
        }}
      >
        {data?.map((res, index) => (
          <SwiperSlide key={index}>
            <TopImdbMainCart
              backdropPath={res.backdrop_path!}
              overview={res.overview!}
              releaseDate={res.release_date!}
              title={res.title!}
              voteAverage={res.vote_average}
              genres={res.genre_ids!}
              id={res.id}
              posterPath={res.poster_path!}
              key={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TopImdbMain
