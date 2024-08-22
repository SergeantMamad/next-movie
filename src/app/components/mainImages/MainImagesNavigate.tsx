import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { FullPicType, PicListProps } from "./MainImages"
import { customcn } from "@/app/utils/functions/customcn"

type MainImageNavigateProps = {
  picList: PicListProps
  fullPicIndex: number
  additionalButtonClassName?: string
  nextPic: (index: number) => void
  prevPic: (index:number) => void
}

const MainImagesNavigate = ({
  picList,
  fullPicIndex,
  additionalButtonClassName,
  nextPic,
  prevPic
}: MainImageNavigateProps) => {
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
