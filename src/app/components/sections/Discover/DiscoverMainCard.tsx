import { StarIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"


type DiscoverMainCardProps = {
    cat: "movie" | "tv" | "SimilarMovie" | "SimilarTv" | "anime"
    id:number
    backdropPath:string
    voteAverage:number
    title:string
}
const DiscoverMainCard = ({cat,id,backdropPath,voteAverage,title}: DiscoverMainCardProps) => {
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
            src={`https://image.tmdb.org/t/p/original${backdropPath}`}
            fill
            className="rounded-[14px]"
            style={{
              objectFit: "cover",
            }}
            alt=""
          />
        </div>
        <p className="font-bold text-white truncate w-[290px]">
            {title}
        </p>
        <div className="flex gap-2">
          <StarIcon className="w-5 h-5 text-yellow-400" />
          <p className="text-white text-xs font-bold mt-auto">
            {voteAverage.toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  )
}
export default DiscoverMainCard
