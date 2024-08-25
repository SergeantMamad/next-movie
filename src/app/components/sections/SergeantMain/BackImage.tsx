import Image from "next/image"

type BackImageProps = {
  slideN: number
  index: number
  image: string
}

const BackImage = ({ slideN, index, image }: BackImageProps) => {
  return (
    <div className={`middleSlide ${slideN == index ? "block" : "hidden"}`}>
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
