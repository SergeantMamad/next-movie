import Image from "next/image"
import MainImagesTopButton from "./MainImagesTopButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FullPicType, PicListProps } from "./MainImages"
import MainImagesNavigate from "./MainImagesNavigate"
import { useEffect, useRef, useState } from "react"
import { useHideButton } from "@/app/utils/hooks/useHideButton"

type MainImagesFullScreenProps = {
  fullPic: FullPicType
  setFullPic: React.Dispatch<React.SetStateAction<FullPicType>>
  id: number
  picList: PicListProps
}

const MainImagesFullScreen = ({
  fullPic,
  id,
  picList,
  setFullPic,
}: MainImagesFullScreenProps) => {
  function handleModalClose() {
    setFullPic({
      index: 0,
      filePath: "",
    })
  }
  const {isButtonVisible,click} = useHideButton(fullPic,5000)
  return (
    <div className="overlay flex items-center justify-center">
      <div className="flex justify-between top-5 absolute w-3/4 z-10">
        <MainImagesTopButton filePath={fullPic.filePath} id={id} />
        <p className="font-bold text-2xl text-center">
          {fullPic.index + 1} of {picList.length}
        </p>
        <button
          onClick={handleModalClose}
          className="w-[30px] h-[30px] border border-red-700 rounded-md"
        >
          <FontAwesomeIcon className="text-red-700" icon={faXmark} />
        </button>
      </div>
      <MainImagesNavigate
        fullPicIndex={fullPic.index}
        picList={picList}
        setFullPic={setFullPic}
        additionalButtonClassName={
          isButtonVisible ? "opacity-100 visible" : "opacity-0 invisible"
        }
      />
      <div className="w-[1300px] h-[80%] relative">
        <Image
          alt=""
          fill
          src={`https://image.tmdb.org/t/p/original${fullPic.filePath}`}
          className="rounded-sm object-contain object-center"
          onClick={() => click()}
        />
      </div>
    </div>
  )
}
export default MainImagesFullScreen
