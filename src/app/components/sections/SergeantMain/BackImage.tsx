import Image from "next/image"
import MoreButtonsComponent from "../../cartGeneral/MoreButtonsComponent"

type BackImageProps = {
  slideN: number
  index: number
  image: string
  title: string
  desc: string
}

const BackImage = ({ slideN, index, image, title, desc }: BackImageProps) => {
  return (
    <div className={`sergeantSlide ${slideN == index ? "active" : ""}`}>
      <Image
        fill
        key={index}
        src={`https://image.tmdb.org/t/p/w1280${image}`}
        className="object-cover"
        alt=""
      />
      <div className="absolute left-12 bottom-48">
        <h1 className="font-bold text-white text-5xl">{title}</h1>
        <p className="text-white text-sm w-1/3 mt-4 text-justify">{desc}</p>
        <MoreButtonsComponent />
      </div>
    </div>
  )
}
export default BackImage
