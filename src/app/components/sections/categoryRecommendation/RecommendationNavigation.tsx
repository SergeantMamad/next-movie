import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { UseQueryResult } from "@tanstack/react-query"
import SliderButton from "../slider/SliderButton"
type RecommendationNavigationProps = {
  getMovieFromCategory: UseQueryResult<any>
  slide: number
  setSlide: React.Dispatch<React.SetStateAction<number>>
  handleLeft: () => void
  handleRight: () => void
}
const RecommendationNavigation = ({
  getMovieFromCategory,
  slide,
  handleLeft,
  handleRight,
  setSlide
}: RecommendationNavigationProps) => {

  

  return (
    <div className="absolute top-[60%] w-full">
      <div className="relative flex w-[90%] mx-auto justify-between items-center">
        <div className="flex gap-2">
          <button
            className="w-10 h-10 bg-[#55545b] rounded-full"
            onClick={handleLeft}
          >
            <ChevronLeftIcon className="w-7 h-7 mx-auto text-white" />
          </button>
          <button
            className="w-10 h-10 bg-[#55545b] rounded-full"
            onClick={handleRight}
          >
            <ChevronRightIcon className="w-7 h-7 mx-auto text-white" />
          </button>
        </div>
        <div className="flex gap-2">
          {getMovieFromCategory?.data?.slice(0, 6).map((_:any, index:number) => (
            <SliderButton setSlideN={setSlide} index={index} slideN={slide} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default RecommendationNavigation
