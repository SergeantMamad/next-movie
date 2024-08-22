import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { VideosProps, VidListProps } from "./Videos"
import VideosNavigation from "./VideosNavigation"
export type VideosFullScreenProps = {
  vidList: VidListProps
  video: VideosProps
  setVideo: React.Dispatch<React.SetStateAction<VideosProps>>
}

const VideosFullScreen = ({
  vidList,
  video,
  setVideo,
}: VideosFullScreenProps) => {
  function handleModalClose() {
    setVideo({
      index: 0,
      youtubeKey: "",
    })
  }
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
    <div
      className="overlay flex items-center justify-center"
    >
      <div className="flex justify-between top-5 absolute w-3/4 z-10">
        <p className="font-bold text-2xl text-center">
          {video.index + 1} of {vidList.length}
        </p>
        <button
          onClick={handleModalClose}
          className="w-[30px] h-[30px] border border-red-700 rounded-md"
        >
          <FontAwesomeIcon className="text-red-700" icon={faXmark} />
        </button>
      </div>
      <VideosNavigation
        video={video}
        setVideo={setVideo}
        vidList={vidList}
        nextVid={nextVid}
        prevVid={prevVid}
      />
      <div className="w-[1300px] h-[80%] relative">
        <iframe
          className="w-full h-full aspect-video"
          src={`https://www.youtube.com/embed/${video.youtubeKey}`}
          title="YouTube video player"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
export default VideosFullScreen
