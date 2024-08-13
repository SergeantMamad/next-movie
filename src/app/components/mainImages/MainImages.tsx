"use client"
import { useRef, useState } from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { getImages, types } from "@/action"
import "react-tooltip/dist/react-tooltip.css"
import ScrollButtons from "../cartGeneral/ScrollButtons"
import MainImagesPreview from "./MainImagesPreview"
import { useSetPicList } from "@/app/utils/hooks/useSetPicList"
import MainImagesFullScreen from "./MainImagesFullScreen"

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
  const imageRef = useRef(null)

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
      <div className="relative flex items-center mt-10">
        <ScrollButtons ref={imageRef} value={325} />
        <div
          className="flex overflow-hidden scroll-smooth gap-3"
          ref={imageRef}
        >
          {data?.map((images, index) => (
            <MainImagesPreview
              handleImageClick={handleImageClick}
              filePath={images.file_path!}
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
