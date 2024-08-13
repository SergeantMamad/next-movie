import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { VideosProps, VidListProps } from "./Videos"
import VideosNavigation from "./VideosNavigation"
export type VideosFullScreenProps = {
  vidList: VidListProps
  video:VideosProps
  setVideo:React.Dispatch<React.SetStateAction<VideosProps>>
}

const VideosFullScreen = ({ vidList, video,setVideo }: VideosFullScreenProps) => {
  function handleModalClose() {
    setVideo({
      index: 0,
      youtubeKey: "",
    })
  }
  return (
    <div className="overlay flex items-center justify-center">
      <VideosNavigation video={video} setVideo={setVideo} vidList={vidList} />
      <button
        onClick={() => handleModalClose()}
        className="w-[30px] h-[30px] absolute bg-red-600 top-5 right-28 rounded-md transition-colors hover:bg-red-700"
      >
        <FontAwesomeIcon className="text-white" icon={faXmark} />
      </button>
      <div className="w-[1500px] h-[900px] relative">
        <iframe
          width="1500"
          height="900"
          src={`https://www.youtube.com/embed/${video.youtubeKey}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
export default VideosFullScreen
