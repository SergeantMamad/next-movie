import ScrollButtons from "../cartGeneral/ScrollButtons"
import ResultComponent from "../search/ResultComponent"
import { operations } from "../../../../schema"
import { A11y, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

type KnownForSliderProps = {
  works:
    | operations["person-combined-credits"]["responses"]["200"]["content"]["application/json"]["cast"]
    | operations["person-combined-credits"]["responses"]["200"]["content"]["application/json"]["crew"]
}

const KnownForSlider = ({ works }: KnownForSliderProps) => {
  return (
    <div className="relative">
      <ScrollButtons
        nextElClass="known-button-next"
        prevElClass="known-button-prev"
      />
      <Swiper
        modules={[Navigation, A11y]}
        autoplay
        slidesPerView={"auto"}
        spaceBetween={16}
        navigation={{
          nextEl: ".known-button-next",
          prevEl: ".known-button-prev",
        }}
      >
        {works!
          .sort(
            (a, b) =>
              (b.vote_count * b.vote_average) /
                ((b as any).order <= 10 || (b as any).order == null
                  ? 1
                  : (b as any).order) -
              (a.vote_count * a.vote_average) /
                ((a as any).order <= 10 || (a as any).order == null
                  ? 1
                  : (a as any).order)
          )
          .slice(0, 11)
          .map((work, index) => (
            <SwiperSlide key={index}>
              <ResultComponent
                id={work!.id}
                mediaType={work!.media_type!}
                posterPath={work!.poster_path!}
                title={work!.title! || (work as any).name}
                voteAverage={work!.vote_average}
                releaseDate={work!.release_date}
                firstAirDate={(work as any).first_air_date}
                genres={work.genre_ids!}
                isInSearch={false}
                job={(work as any).character || (work as any).job}
                key={index}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
export default KnownForSlider
