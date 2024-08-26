"use client"
import { useSuspenseQuery } from "@tanstack/react-query"
import CastsCard from "./CastsCard"
import { types } from "@/app/utils/actions/config"
import { getCasts } from "@/app/utils/actions/getSingleData"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import ScrollButtons from "../cartGeneral/ScrollButtons"

const Casts = ({
  type,
  id,
  season,
}: {
  type: types
  id: number
  season: number
}) => {
  const { data } = useSuspenseQuery({
    queryKey: [type + id + (season ? season : 0) + "casts"],
    queryFn: () => getCasts({ type, id, season }),
  })
  return (
    <div className="relative">
      <>
        <ScrollButtons nextElClass="cast-button-next" prevElClass="cast-button-prev"/>
      </>
      <Swiper
        modules={[Navigation, A11y]}
        autoplay
        slidesPerView={"auto"}
        spaceBetween={16}
        navigation={{
          nextEl: ".cast-button-next",
          prevEl: ".cast-button-prev",
        }}
      >
        {data?.map((cast, index) => (
          <SwiperSlide key={index}>
            <CastsCard
              name={cast.name!}
              profilePath={cast?.profile_path}
              character={(cast as any)?.character}
              roles={(cast as any)?.roles}

              id={cast.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Casts
