import { scrollLeftRight } from "@/app/utils/functions/scrollLeftRight"
import useScrollOverflow from "@/app/utils/hooks/useScrollOverflow"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { ForwardedRef } from "react"
import { SwiperClass, SwiperRef } from "swiper/react"
import SwiperCore from "swiper"

const ScrollButtons = ({
  nextElClass,
  prevElClass
}:{
  nextElClass:string
  prevElClass:string
}) => {
  return (
    <>
      <button
        className={`w-10 h-10 bg-[#55545b] rounded-full absolute z-10 top-1/2 -translate-y-1/2 -right-0 max-lg:w-6 max-lg:h-6 ${nextElClass}`}
      >
        <ChevronRightIcon className="w-7 h-7 max-lg:w-3 max-lg:h-3 mx-auto text-white" />
      </button>
      <button
        className={`w-10 h-10 bg-[#55545b] rounded-full absolute top-1/2 -translate-y-1/2 -left-0 z-10 max-lg:w-6 max-lg:h-6 ${prevElClass}`}
      >
        <ChevronLeftIcon className="w-7 h-7 max-lg:w-3 max-lg:h-3 mx-auto text-white" />
      </button>
    </>
  )
}

export default ScrollButtons
