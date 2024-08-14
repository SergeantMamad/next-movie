import Image from "next/image"
import Link from "next/link"
import CartDescription from "../../cartGeneral/CartDescription"

type PopularCardProps = {
  id: number
  index: number
  posterPath: string
  title: string
  mediaType: string
  voteAverage: number
}
const PopularCard = ({
  id,
  index,
  posterPath,
  title,
  mediaType,
  voteAverage,
}: PopularCardProps) => {
  return (
    <Link href={mediaType == "tv" ? `/series/${id}` :`/movie/${id}`}>
      <div className="min-w-[410px] flex gap-4">
        <p className="my-auto text-white text-4xl font-bold">{index + 1}</p>
        <div className="min-w-[130px] min-h-[170px] w-[130px] h-[170px] relative object-cover">
          <Image
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            fill
            className="rounded-xl object-cover"
            alt="Image of a movie cover"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <p className="font-bold text-white">{title}</p>
          <CartDescription mediaType={mediaType} voteAverage={voteAverage} />
        </div>
      </div>
    </Link>
  )
}
export default PopularCard
