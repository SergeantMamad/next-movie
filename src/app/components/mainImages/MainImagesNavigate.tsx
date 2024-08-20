import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { FullPicType, PicListProps } from "./MainImages"
import { customcn } from "@/app/utils/functions/customcn"

type MainImageNavigateProps = {
  picList: PicListProps
  setFullPic: React.Dispatch<React.SetStateAction<FullPicType>>
  fullPicIndex: number
  additionalButtonClassName?: string
}

const MainImagesNavigate = ({
  picList,
  setFullPic,
  fullPicIndex,
  additionalButtonClassName,
}: MainImageNavigateProps) => {
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

  return (
    <>
      {fullPicIndex != picList.length - 1 && (
        <button
          className={customcn(
            "w-8 h-8 xl:h-10 xl:w-10 bg-[#55545b] rounded-full absolute right-10 xl:right-28 z-10 transition-all",
            additionalButtonClassName
          )}
          onClick={() => {
            nextPic(fullPicIndex)
          }}
        >
          <ChevronRightIcon className="w-4 h-4 Xl:w-7 xl:h-7 mx-auto text-white" />
        </button>
      )}
      {fullPicIndex != 0 && (
        <button
          className={customcn(
            "w-8 h-8 xl:h-10 xl:w-10 bg-[#55545b] rounded-full absolute left-10 xl:left-28 z-10 transition-opacity duration-500",
            additionalButtonClassName
          )}
          onClick={() => {
            prevPic(fullPicIndex)
          }}
        >
          <ChevronLeftIcon className="w-4 h-4 Xl:w-7 xl:h-7 mx-auto text-white" />
        </button>
      )}
    </>
  )
}
export default MainImagesNavigate
