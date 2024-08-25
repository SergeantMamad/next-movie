import Image from "next/image"
import Link from "next/link"
import CartDescription from "../../cartGeneral/CartDescription"
import { customcn } from "@/app/utils/functions/customcn"

type TrendingCardProps = {
  mediaType: string
  id: number
  slideN?: number
  posterPath: string
  title: string
  voteAverage?: number
  genres:number[]
  type: "sergenat" | "main" | "search"
  onClick?: () => void
}

const TrendingCard = ({
  mediaType,
  id,
  slideN,
  posterPath,
  title,
  voteAverage,
  genres,
  type,
  onClick,
}: TrendingCardProps) => {
  const content = (
    <div
      onClick={onClick}
      className={customcn(`min-w-[310px] min-h-[430px] relative cursor-pointer rounded-xl`,slideN == id && "bg-green-200",type == "search" && "min-w-0 min-h-0 w-[280px] h-[410px]")}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w342${posterPath}`}
        fill
        className={customcn(`rounded-2xl object-cover`, slideN == id && "border border-green-500 mix-blend-multiply",posterPath == null && 'bg-stone-950 border border-stone-950')}
        alt=""
      />
      <div className="absolute bottom-5 ml-5">
        <p className="text-white font-bold mb-2">{title}</p>
          <CartDescription mediaType={mediaType} voteAverage={voteAverage} genres={genres} />
      </div>
    </div>
  )
  return (type == "main" || type == "search") ? (
    <Link href={mediaType == "tv" ? `series/${id}` : `movie/${id}`}>
      {content}
    </Link>
  ) : (
    content
  )
}
export default TrendingCard
