import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { VideosFullScreenProps } from "./VideosFullScreen"

const VideosNavigation = ({
  video,
  setVideo,
  vidList,
}: VideosFullScreenProps) => {
  function nextVid(index: number) {
    const nextIndex = (index += 1)
    const nextVid = vidList.find((findIndex) => findIndex.index == nextIndex)
    setVideo({
      index: nextVid!.index,
      youtubeKey: nextVid!.youtubeKey,
    })
  }

  function prevVid(index: number) {
    const prevIndex = (index -= 1)
    const prevVid = vidList.find((findIndex) => findIndex.index == prevIndex)
    setVideo({
      index: prevVid!.index,
      youtubeKey: prevVid!.youtubeKey,
    })
  }
  return (
    <>
      {video.index != vidList.length - 1 && (
        <button
          className="w-10 h-10 bg-[#55545b] rounded-full absolute right-28 z-10"
          onClick={() => nextVid(video.index)}
        >
          <ChevronRightIcon className="w-7 h-7 mx-auto text-white" />
        </button>
      )}
      {video.index != 0 && (
        <button
          className="w-10 h-10 bg-[#55545b] rounded-full absolute left-28 z-10"
          onClick={() => prevVid(video.index)}
        >
          <ChevronLeftIcon className="w-7 h-7 mx-auto text-white" />
        </button>
      )}
    </>
  )
}
export default VideosNavigation
