import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import { ChevronRightIcon } from "@heroicons/react/24/solid"

const RecommendationNavigation = () => {
  return (
    <div className="absolute top-[60%] w-full">
      <div className="relative flex w-[90%] mx-auto justify-between items-center">
        <div className="flex gap-2 z-10">
          <button
            className="w-10 h-10 bg-[#55545b] rounded-full recommended-button-prev"
          >
            <ChevronLeftIcon className="w-7 h-7 mx-auto text-white" />
          </button>
          <button
            className="w-10 h-10 bg-[#55545b] rounded-full recommended-button-next"
            
          >
            <ChevronRightIcon className="w-7 h-7 mx-auto text-white" />
          </button>
        </div>
        <div className="flex gap-4">
          <div className="recommended-bullets z-10"></div>
        </div>
      </div>
    </div>
  )
}
export default RecommendationNavigation
