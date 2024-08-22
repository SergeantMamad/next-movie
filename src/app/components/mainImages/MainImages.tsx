"use client"
import { useRef, useState } from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { getImages, types } from "@/action"
import "react-tooltip/dist/react-tooltip.css"
import ScrollButtons from "../cartGeneral/ScrollButtons"
import MainImagesPreview from "./MainImagesPreview"
import { useSetPicList } from "@/app/utils/hooks/useSetPicList"
import MainImagesFullScreen from "./MainImagesFullScreen"
import { customcn } from "@/app/utils/functions/customcn"
import { useObserveElementWidth } from "@/app/utils/hooks/useObserveElementWidth"
import useSwipe from "@/app/utils/hooks/useSwipe"
import { scrollLeftRight } from "@/app/utils/functions/scrollLeftRight"

export type PicListProps = {
  index: number
  filePath: string
}[]

export type FullPicType = {
  index: number
  filePath: string
}

const MainImages = ({
  type,
  id,
  season,
}: {
  type: types
  id: number
  season: number
}) => {
  const { data } = useSuspenseQuery({
    queryKey: [type + id + (season ? season : 0) + "pics"],
    queryFn: () => getImages({ type, id, season }),
  })

  const { ref: divRef, width } = useObserveElementWidth<HTMLDivElement>()
  const { onTouchEnd, onTouchMove, onTouchStart } = useSwipe({
    onSwipedLeft: () => scrollLeftRight(divRef, "left", width + 16),
    onSwipedRight: () => scrollLeftRight(divRef, "right", width + 16),
  })

  const [fullPic, setFullPic] = useState<FullPicType>({
    index: 0,
    filePath: "",
  })
  const [picList, setPicList] = useSetPicList(data)

  function handleImageClick(index: number, filePath: string) {
    setFullPic({
      index,
      filePath,
    })
  }

  return (
    <>
      <div className="relative">
        <ScrollButtons ref={divRef} value={width + 16}/>
        <div
          className={customcn(
            "flex mt-4 gap-4 overflow-hidden scroll-smooth",
            type == "actor" && "grid grid-cols-2 place-items-center md:grid-cols-4 xl:grid-cols-6 min-w-0 min-h-0"
          )}
          ref={divRef}
          onTouchEnd={onTouchEnd}
          onTouchMove={onTouchMove}
          onTouchStart={onTouchStart}
        >
          {data?.map((images, index) => (
            <MainImagesPreview
              handleImageClick={handleImageClick}
              filePath={images.file_path!}
              type={type}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
      {fullPic.filePath != "" && (
        <MainImagesFullScreen
          fullPic={fullPic}
          picList={picList}
          id={id}
          setFullPic={setFullPic}
        />
      )}
    </>
  )
}

export default MainImages
