import { useEffect, useState } from "react"

export function useSliderTimer(time: number, sliderLength: number) {
  const [slide, setSlide] = useState(0)
  useEffect(() => {
    const Timer = setInterval(() => {
      slide == sliderLength - 1
        ? setSlide(0)
        : setSlide((prevSlide) => prevSlide + 1)
    }, time)
    return () => {
      clearInterval(Timer)
    }
  }, [slide,sliderLength,time])
  return [slide,setSlide] as const
}
