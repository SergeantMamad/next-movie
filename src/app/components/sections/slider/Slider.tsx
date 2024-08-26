"use client"
import SliderCard from "./SliderCard"
import { useSliderTimer } from "@/app/utils/hooks/useSliderTimer"
import { useSuspenseQuery } from "@tanstack/react-query"
import { getSliderItems } from "@/app/utils/actions/getSingleData"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, A11y } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const Slider = ({ listNumber }: { listNumber: number }) => {
  const { data } = useSuspenseQuery({
    queryKey: ["slider" + listNumber],
    queryFn: () => getSliderItems(listNumber),
  })
  const [slide, setSlide] = useSliderTimer(5000, data?.length!)
  return (
    <div className="relative h-[780px] max-w-[100vw]">
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={1}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data?.map((value, index) => (
          <SwiperSlide className="!w-screen !h-full !ml-0" key={index}>
            <SliderCard
              title={value.title || (value as any).name}
              image={value.backdrop_path!}
              poster={value.poster_path!}
              genres={value.genre_ids!}
              desc={value.overview!}
              index={index}
              slideN={slide}
              id={value.id.toString()}
              mediaType={value.media_type!}
            />
          </SwiperSlide>
        ))}
        <div className="flex gap-2 absolute lg:right-12  lg:bottom-24 right-1/2 translate-x-1/2 w-full z-50">
          <div className="swiper-pagination flex justify-center mt-4"></div>
        </div>
      </Swiper>
    </div>
  )
}

export default Slider
