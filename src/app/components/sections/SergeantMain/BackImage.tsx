import Image from "next/image"
import MoreButtonsComponent from "../../cartGeneral/MoreButtonsComponent"

type BackImageProps = {
  slideN: number
  index: number
  image: string
  title: string
  desc: string
  id:number
  mediaType:string
}

const BackImage = ({ slideN, index, image, title, desc,id,mediaType }: BackImageProps) => {
  return (
    <div className={`middleSlide ${slideN == index ? "active visible" : "invisible"}`}>
      <Image
        fill
        key={index}
        src={`https://image.tmdb.org/t/p/w1280${image}`}
        className="object-cover"
        alt=""
      />
    </div>
  )
}
export default BackImage
