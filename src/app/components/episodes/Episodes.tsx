"use client"
import ScrollButtons from "../cartGeneral/ScrollButtons"
import EpisodesCard from "./EpisodesCard"
import { operations } from "../../../../schema"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Navigation } from "swiper/modules"
import SwiperCore from "swiper"

type EpisodesProps = {
  episodes: operations["tv-episode-details"]["responses"]["200"]["content"]["application/json"][]
}

const Episodes = ({ episodes }: EpisodesProps) => {

  return (
    <div className="relative mt-30">
      <ScrollButtons nextElClass="episode-button-next" prevElClass="episode-button-prev" />
      <Swiper
        modules={[Navigation, A11y]}
        autoplay
        slidesPerView={"auto"}
        spaceBetween={16}
        navigation={{
          nextEl: ".episode-button-next",
          prevEl: ".episode-button-prev",
        }}
      >
        {episodes.map((episode, index) => (
          <SwiperSlide key={index}>
            <EpisodesCard
              episodeNumber={index + 1}
              name={episode.name!}
              overview={episode.overview!}
              stillPath={episode.still_path!}
              key={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Episodes
