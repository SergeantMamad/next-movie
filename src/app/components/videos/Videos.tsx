import { useRef, useState } from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import "react-tooltip/dist/react-tooltip.css"
import VideosPreview from "./VideosPreview"
import { useSetVidList } from "@/app/utils/hooks/useSetVidList"
import ScrollButtons from "../cartGeneral/ScrollButtons"
import VideosFullScreen from "./VideosFullScreen"
import { getVids } from "@/app/utils/actions/getSingleData"
import { types } from "@/app/utils/actions/config"
import { A11y, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore from "swiper"
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

  function handleVideoClick(index: number, youtubeKey: string) {
    setVideo({
      index,
      youtubeKey,
    })
  }

  return (
    <>
      <div className="relative flex items-center mt-10">
        <ScrollButtons
          nextElClass="videos-button-next"
          prevElClass="videos-button-prev"
        />
        <Swiper
          modules={[Navigation, A11y]}
          autoplay
          slidesPerView={"auto"}
          spaceBetween={16}
          navigation={{
            nextEl: ".videos-button-next",
            prevEl: ".videos-button-prev",
          }}
        >
          {data &&
            data?.map((vids, index) => (
              <SwiperSlide key={index}>
                <VideosPreview
                  handleVideoClick={handleVideoClick}
                  index={index}
                  youtubeKey={vids.key!}
                  name={vids.name!}
                  key={index}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {video.youtubeKey != "" && (
        <VideosFullScreen video={video} setVideo={setVideo} vidList={vidList} />
      )}
    </>
  )
}

export default Videos
