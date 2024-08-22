import { useRef, useState } from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { getVids, types } from "@/action"
import "react-tooltip/dist/react-tooltip.css"
import VideosPreview from "./VideosPreview"
import { useSetVidList } from "@/app/utils/hooks/useSetVidList"
import ScrollButtons from "../cartGeneral/ScrollButtons"
import VideosFullScreen from "./VideosFullScreen"
import { useObserveElementWidth } from "@/app/utils/hooks/useObserveElementWidth"
import useSwipe from "@/app/utils/hooks/useSwipe"
import { scrollLeftRight } from "@/app/utils/functions/scrollLeftRight"

export type VidListProps = {
  index: number
  youtubeKey: string
}[]

export type VideosProps = {
  index: number
  youtubeKey: string
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

  const [vidList, setVidList] = useSetVidList(data)

  const { ref: divRef, width } = useObserveElementWidth<HTMLDivElement>()
  const { onTouchEnd, onTouchMove, onTouchStart } = useSwipe({
    onSwipedLeft: () => scrollLeftRight(divRef, "left", width + 12),
    onSwipedRight: () => scrollLeftRight(divRef, "right", width + 12),
  })

  function handleVideoClick(index: number, youtubeKey: string) {
    setVideo({
      index,
      youtubeKey,
    })
  }

  return (
    <>
      <div className="relative flex items-center mt-10">
        <ScrollButtons ref={divRef} value={width + 12} />
        <div
          className="flex overflow-hidden scroll-smooth gap-3"
          ref={divRef}
          onTouchEnd={onTouchEnd}
          onTouchMove={onTouchMove}
          onTouchStart={onTouchStart}
        >
          {data &&
            data?.map((vids, index) => (
              <VideosPreview
                handleVideoClick={handleVideoClick}
                index={index}
                youtubeKey={vids.key!}
                name={vids.name!}
                key={index}
              />
            ))}
        </div>
      </div>
      {video.youtubeKey != "" && (
        <VideosFullScreen video={video} setVideo={setVideo} vidList={vidList} />
      )}
    </>
  )
}

export default Videos
