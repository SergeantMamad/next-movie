import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { VideosFullScreenProps } from "./VideosFullScreen"
import { customcn } from "@/app/utils/functions/customcn"

type VideosNavigationProps = {
  nextVid: (index: number) => void
  prevVid: (index: number) => void
} & VideosFullScreenProps

const VideosNavigation = ({
  video,
  vidList,
  nextVid,
  prevVid,
}: VideosNavigationProps) => {
  return (
    <>
      {video.index != vidList.length - 1 && (
        <button
          className={customcn(
            "w-8 h-8 xl:h-10 xl:w-10 bg-[#55545b] rounded-full absolute right-10 xl:right-28 z-10 transition-all"
          )}
          onClick={() => nextVid(video.index)}
        >
          <ChevronRightIcon className="w-4 h-4 Xl:w-7 xl:h-7 mx-auto text-white" />
        </button>
      )}
      {video.index != 0 && (
        <button
          className={customcn(
            "w-8 h-8 xl:h-10 xl:w-10 bg-[#55545b] rounded-full absolute left-10 xl:left-28 z-10 transition-opacity duration-500"
          )}
          onClick={() => prevVid(video.index)}
        >
          <ChevronLeftIcon className="w-4 h-4 Xl:w-7 xl:h-7 mx-auto text-white" />
        </button>
      )}
    </>
  )
}
export default VideosNavigation
