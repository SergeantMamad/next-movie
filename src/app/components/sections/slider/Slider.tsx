"use client"
import SliderCard from "./SliderCard"
import SliderButton from "./SliderButton"
import { useSliderTimer } from "@/app/utils/hooks/useSliderTimer"
import { useSuspenseQuery } from "@tanstack/react-query"
import useSwipe from "@/app/utils/hooks/useSwipe"
import { getSliderItems } from "@/app/utils/actions/getSingleData"


const Slider = ({ listNumber }: { listNumber: number }) => {
  const { data } = useSuspenseQuery({
    queryKey: ["slider" + listNumber],
    queryFn: () => getSliderItems(listNumber),
  })
  const [slide, setSlide] = useSliderTimer(5000, data?.length!)
  const { onTouchEnd, onTouchMove, onTouchStart } = useSwipe({
    onSwipedLeft: () => setSlide(slide == 0 ? data?.length! - 1 : slide - 1),
    onSwipedRight: () => setSlide(slide == data?.length! - 1 ? 0 : slide + 1),
  })
  return (
    <div className="relative">
      <div
        className="relative w-full h-[780px]"
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchStart}
      >
        {data?.map((value, index) => (
          <SliderCard
            title={value.title || (value as any).name}
            image={value.backdrop_path!}
            poster={value.poster_path!}
            genres={value.genre_ids!}
            desc={value.overview!}
            index={index}
            slideN={slide}
            key={index}
            id={value.id.toString()}
            mediaType={value.media_type!}
          />
        ))}
      </div>
      <div className="flex gap-2 absolute lg:right-12  lg:bottom-24 right-1/2 translate-x-1/2">
        {data?.map((_, index) => (
          <SliderButton
            index={index}
            setSlideN={setSlide}
            slideN={slide}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider
