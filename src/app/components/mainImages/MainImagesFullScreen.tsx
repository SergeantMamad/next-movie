import Image from "next/image"
import MainImagesTopButton from "./MainImagesTopButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FullPicType, PicListProps } from "./MainImages"
import MainImagesNavigate from "./MainImagesNavigate"

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
  return (
    <div className="overlay flex items-center justify-center">
      <MainImagesTopButton filePath={fullPic.filePath} id={id} />
      <MainImagesNavigate
        fullPicIndex={fullPic.index}
        picList={picList}
        setFullPic={setFullPic}
      />
      <button
        onClick={handleModalClose}
        className="w-[30px] h-[30px] absolute bg-red-600 top-5 right-28 rounded-md transition-colors hover:bg-red-700"
      >
        <FontAwesomeIcon className="text-white" icon={faXmark} />
      </button>
      <div className="w-[1300px] h-[900px] relative">
        <Image
          alt=""
          fill
          src={`https://image.tmdb.org/t/p/original${fullPic.filePath}`}
          className="rounded-sm object-contain"
        />
      </div>
      <p className="absolute bottom-14 font-bold text-2xl">
        {fullPic.index + 1} of {picList.length}
      </p>
    </div>
  )
}
export default MainImagesFullScreen
