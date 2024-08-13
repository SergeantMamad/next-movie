import Image from "next/image"
import MoreButtonsComponent from "../../cartGeneral/MoreButtonsComponent"
import { sergeantSlideObjType } from "./sergeantMainSlide"

type BackImageProps = {
    slideN:number
    index:number
    sergeantSlideObj:sergeantSlideObjType
}

const BackImage = ({
    slideN,
    index,
    sergeantSlideObj
}:BackImageProps) => {
  return (
    <div
      className={`sergeantSlide ${slideN == index ? "active" : ""}`}
    >
      <Image
        key={index}
        src={sergeantSlideObj[slideN].image}
        layout="fill"
        objectFit="cover"
        alt=""
      />
      <div className="absolute left-12 bottom-48">
        <h1 className="font-bold text-white text-5xl">
          {sergeantSlideObj[slideN].title}
        </h1>
        <p className="text-white text-sm w-1/3 mt-4 text-justify">
          {sergeantSlideObj[slideN].desc}
        </p>
        <MoreButtonsComponent />
      </div>
    </div>
  )
}
export default BackImage
