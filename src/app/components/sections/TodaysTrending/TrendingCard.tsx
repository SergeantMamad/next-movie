import Image from "next/image"
import Link from "next/link"
import CartDescription from "../../cartGeneral/CartDescription"

type TrendingCardProps = {
  mediaType: string
  id: number
  slideN?: number
  posterPath: string
  title: string
  voteAverage: number
  isInSergeantMain: boolean
  onClick?: () => void
}

const TrendingCard = ({
  mediaType,
  id,
  slideN,
  posterPath,
  title,
  voteAverage,
  isInSergeantMain,
  onClick,
}: TrendingCardProps) => {
  const content = (
    <div
      onClick={onClick}
      className={`min-w-[310px] h-[450px] relative cursor-pointer `}
    >
      <Image
        src={
          isInSergeantMain
            ? `${posterPath}`
            : `https://image.tmdb.org/t/p/original${posterPath}`
        }
        fill
        className={`rounded-xl object-cover ${
          slideN == id && "border border-green-500"
        }`}
        alt=""
      />
      <div className="absolute bottom-5 ml-5">
        <p className="text-white font-bold">{title}</p>
        {isInSergeantMain == false && <CartDescription mediaType={mediaType} voteAverage={voteAverage} />}
      </div>
    </div>
  )
  return isInSergeantMain == false ? (
    <Link href={mediaType == "tv" ? `series/${id}` : `movie/${id}`}>
      {content}
    </Link>
  ) : (
    content
  )
}
export default TrendingCard
