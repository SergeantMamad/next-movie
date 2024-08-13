import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { FullPicType, PicListProps } from "./MainImages"

type MainImageNavigateProps = {
    picList:PicListProps
    setFullPic:React.Dispatch<React.SetStateAction<FullPicType>>
    fullPicIndex:number
}

const MainImagesNavigate = ({
    picList,
    setFullPic,
    fullPicIndex
}:MainImageNavigateProps) => {
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
          className="w-10 h-10 bg-[#55545b] rounded-full absolute right-28 z-10"
          onClick={() => nextPic(fullPicIndex)}
        >
          <ChevronRightIcon className="w-7 h-7 mx-auto text-white" />
        </button>
      )}
      {fullPicIndex != 0 && (
        <button
          className="w-10 h-10 bg-[#55545b] rounded-full absolute left-28 z-10"
          onClick={() => prevPic(fullPicIndex)}
        >
          <ChevronLeftIcon className="w-7 h-7 mx-auto text-white" />
        </button>
      )}
    </>
  )
}
export default MainImagesNavigate
