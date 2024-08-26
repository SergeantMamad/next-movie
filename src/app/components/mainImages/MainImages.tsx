"use client"
import { useRef, useState } from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import "react-tooltip/dist/react-tooltip.css"
import MainImagesPreview from "./MainImagesPreview"
import { useSetPicList } from "@/app/utils/hooks/useSetPicList"
import MainImagesFullScreen from "./MainImagesFullScreen"
import { types } from "@/app/utils/actions/config"
import { getImages } from "@/app/utils/actions/getSingleData"
import { Swiper, SwiperSlide } from "swiper/react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { A11y, Navigation } from "swiper/modules"
import SwiperCore from "swiper"
import ScrollButtons from "../cartGeneral/ScrollButtons"

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
        <ScrollButtons
          nextElClass="images-button-next"
          prevElClass="images-button-prev"
        />
        <Swiper
          modules={[Navigation, A11y]}
          autoplay
          slidesPerView={"auto"}
          spaceBetween={16}
          navigation={{
            nextEl: ".images-button-next",
            prevEl: ".images-button-prev",
          }}
        >
          {data?.map((images, index) => (
            <SwiperSlide key={index}>
              <MainImagesPreview
                handleImageClick={handleImageClick}
                filePath={images.file_path!}
                type={type}
                index={index}
                key={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
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
