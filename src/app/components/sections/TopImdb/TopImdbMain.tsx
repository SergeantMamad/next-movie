"use client"
import { useSuspenseQuery } from "@tanstack/react-query"
import TopImdbMainCart from "./TopImdbMainCart"
import { getTopImdbMovies } from "@/app/utils/actions/sectionsAuction"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Navigation } from "swiper/modules"
import "swiper/css"
import ScrollButtons from "../../cartGeneral/ScrollButtons"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

const TopImdbMain = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["TopImdb"],
    queryFn: getTopImdbMovies
  })
  return (
    <div className="relative w-full">
      <div className="flex justify-end gap-2 absolute z-10 -top-[54px] right-0">
        <button
          className={`w-10 h-10 bg-[#55545b] rounded-full max-lg:w-6 max-lg:h-6 imdb-button-prev`}
        >
          <ChevronLeftIcon className="w-7 h-7 max-lg:w-3 max-lg:h-3 mx-auto text-white" />
        </button>
        <button
          className={`w-10 h-10 bg-[#55545b] rounded-full max-lg:w-6 max-lg:h-6 imdb-button-next`}
        >
          <ChevronRightIcon className="w-7 h-7 max-lg:w-3 max-lg:h-3 mx-auto text-white" />
        </button>
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        slidesPerView={1}
        navigation={{
          nextEl: ".imdb-button-next",
          prevEl: ".imdb-button-prev"
        }}
        className="noMarginSwiper"
      >
        {data?.map((res, index) => (
          <SwiperSlide className="max-w-full" key={index}>
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
