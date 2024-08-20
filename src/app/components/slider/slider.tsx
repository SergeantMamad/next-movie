"use client"
import { slideObj } from "./slides"
import SliderCard from "./SliderCard"
import SliderButton from "./SliderButton"
import { useSliderTimer } from "@/app/utils/hooks/useSliderTimer"
import { useSuspenseQuery } from "@tanstack/react-query"
import { SliderItems } from "@/action"

const Slider = ({ listNumber }: { listNumber: number }) => {
  const { data } = useSuspenseQuery({
    queryKey: ["slider" + listNumber],
    queryFn: () => SliderItems(listNumber),
  })
  const [slide, setSlide] = useSliderTimer(5000, data?.length!)

  return (
    <div className="relative">
      <div className="relative w-full h-[780px]">
        {data?.map((value, index) => (
          <SliderCard
            title={value.title || (value as any).name}
            image={value.backdrop_path!}
            desc={value.overview!}
            index={index}
            slideN={slide}
            key={index}
            id={value.id.toString()}
            mediaType={value.media_type!}
          />
        ))}
      </div>
      <div className="flex gap-2 absolute xl:right-12  xl:bottom-24 right-1/2 translate-x-1/2">
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
