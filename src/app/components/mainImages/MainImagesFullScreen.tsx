import Image from "next/image"
import MainImagesTopButton from "./MainImagesTopButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FullPicType, PicListProps } from "./MainImages"
import MainImagesNavigate from "./MainImagesNavigate"
import { useEffect, useRef, useState } from "react"
import { useHideButton } from "@/app/utils/hooks/useHideButton"
import useSwipe from "@/app/utils/hooks/useSwipe"

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
  function nextPic(index: number) {
    const nextIndex = (index += 1)
    const nextPic = picList.find((findIndex) => findIndex.index == nextIndex)
    setFullPic({
      index: nextPic!.index,
      filePath: nextPic!.filePath,
    })
  }

  function prevPic(index: number) {
    const prevIndex = (index -= 1)
    const prevPic = picList.find((findIndex) => findIndex.index == prevIndex)
    setFullPic({
      index: prevPic!.index,
      filePath: prevPic!.filePath,
    })
  }
  const { isButtonVisible, setClick } = useHideButton(fullPic, 5000)
  const { onTouchEnd, onTouchMove, onTouchStart } = useSwipe({
    onSwipedRight: () => nextPic(fullPic.index),
    onSwipedLeft: () => prevPic(fullPic.index),
  })
  return (
    <div
      className="overlay flex items-center justify-center z-30"
      onClick={(e) => {
        setClick(true)
        if (e.target == e.currentTarget) handleModalClose()
      }}
    >
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
        nextPic={nextPic}
        prevPic={prevPic}
        additionalButtonClassName={
          isButtonVisible ? "opacity-100 visible" : "opacity-0 invisible"
        }
      />
      <div
        className="w-[1200px] h-[60%] relative"
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchStart}
      >
        <Image
          alt=""
          fill
          src={`https://image.tmdb.org/t/p/original${fullPic.filePath}`}
          className="rounded-sm object-contain object-center"
        />
      </div>
    </div>
  )
}
export default MainImagesFullScreen
