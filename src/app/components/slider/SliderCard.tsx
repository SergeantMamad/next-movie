import Image from "next/image"
import MoreButtonsComponent from "../cartGeneral/MoreButtonsComponent"

type SliderCard = {
  title: string
  desc: string
  image: string
  slideN: number
  index: number
  id:string
  mediaType:string
}
const SliderCard = ({ title, desc, image, slideN, index,id,mediaType }: SliderCard) => {
  console.log(mediaType)
  return (
    <div className={`slider ${slideN == index ? "active visible" : "invisible"}`}>
      <Image src={`https://image.tmdb.org/t/p/original${image}`} fill className="object-cover object-top" alt="" />
      <div className="absolute left-12 bottom-20">
        <h1 className="font-bold text-white text-4xl">{title}</h1>
        <p className="text-white text-sm w-1/3 mt-4 text-justify">{desc}</p>
        <div className="flex gap-4">
          <MoreButtonsComponent link={mediaType == "tv" ? `series/${id}` : `/movie/${id}`} />
        </div>
      </div>
    </div>
  )
}
export default SliderCard
