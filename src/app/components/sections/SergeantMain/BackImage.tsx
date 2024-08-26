import Image from "next/image"

type BackImageProps = {
  slideN: number
  index: number
  image: string
}

const BackImage = ({ slideN, index, image }: BackImageProps) => {
  return (
    <div className={`middleSlide w-screen h-[1200px] lg:h-[800px]`}>
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
