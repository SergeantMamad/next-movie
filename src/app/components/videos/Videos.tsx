import { useRef, useState } from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { getVids, types } from "@/action"
import "react-tooltip/dist/react-tooltip.css"
import VideosPreview from "./VideosPreview"
import { useSetVidList } from "@/app/utils/hooks/useSetVidList"
import ScrollButtons from "../cartGeneral/ScrollButtons"
import VideosFullScreen from "./VideosFullScreen"

export type VidListProps = {
  index:number
  youtubeKey:string
}[]

export type VideosProps = {
  index:number
  youtubeKey:string
}

const Videos = ({
  type,
  id,
  season,
}: {
  type: types
  id: number
  season: number
}) => {
  const { data } = useSuspenseQuery({
    queryKey: [type + id + (season ? season : 0) + "vids"],
    queryFn: () => getVids({ type, id, season }),
  })
  const [video, setVideo] = useState<VideosProps>({
    index: 0,
    youtubeKey: "",
  })

  const [vidList,setVidList] = useSetVidList(data)
  
  const vidRef = useRef(null)

  function handleVideoClick(index:number, youtubeKey:string) {
    setVideo({
      index,
      youtubeKey,
    })
  }

  return (
    <>
      <div className="relative flex items-center mt-10">
        <ScrollButtons ref={vidRef} value={320} />
        <div
          className="flex overflow-hidden scroll-smooth gap-3"
          ref={vidRef}
        >
          {data?.map((vids, index) => (
            <VideosPreview handleVideoClick={handleVideoClick} index={index} key={vids.key!} name={vids.name!} />
          ))}
        </div>
      </div>
      {video.youtubeKey != "" && (
        <VideosFullScreen video={video} setVideo={setVideo} vidList={vidList}/>
      )}
    </>
  )
}

export default Videos
