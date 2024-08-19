import Image from "next/image"
import Link from "next/link"
import CartDescription from "../../cartGeneral/CartDescription"

type DiscoverMainCardProps = {
  cat: "movie" | "tv" | "SimilarMovie" | "SimilarTv" | "anime"
  id: number
  backdropPath: string
  voteAverage: number
  title: string
  mediaType:string
  genres: number[]
}
const DiscoverMainCard = ({
  cat,
  id,
  backdropPath,
  voteAverage,
  title,
  mediaType,
  genres
}: DiscoverMainCardProps) => {
  return (
    <Link
      href={`${
        (cat == "movie" || cat == "SimilarMovie" ? `/movie/${id}` : "") ||
        (cat == "tv" || cat == "SimilarTv" ? `/series/${id}` : "") ||
        (cat == "anime" && `/series/${id}`)
      }`}
    >
      <div className="min-w-[290px] flex flex-col gap-3">
        <div className="w-[290px] h-[180px] relative">
          <Image
            src={`https://image.tmdb.org/t/p/w780${backdropPath}`}
            fill
            className="rounded-[14px]"
            style={{
              objectFit: "cover",
            }}
            alt=""
          />
        </div>
        <p className="font-bold text-white truncate w-[290px]">{title}</p>
        <CartDescription genres={genres} mediaType={mediaType} voteAverage={voteAverage} />
      </div>
    </Link>
  )
}
export default DiscoverMainCard
