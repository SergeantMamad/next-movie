import Image from "next/image"
import Link from "next/link"
import CartDescription from "../../cartGeneral/CartDescription"
import GenreDescription from "../../cartGeneral/GenreDescription"

type UpTopCard = {
  id: number
  posterPath: string
  title: string
  voteAverage: number
  mediaType: string
  genres:number[]
}

const UpTopCard = ({
  id,
  posterPath,
  title,
  voteAverage,
  mediaType,
  genres
}: UpTopCard) => {
  return (
    <Link href={`movie/${id}`}>
      <div className="min-w-[310px] flex gap-4">
        <div className="min-w-[130px] min-h-[150px] relative object-cover">
          <Image
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            fill
            className="rounded-xl object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <p className="font-bold text-white">{title}</p>
          <GenreDescription genres={genres} mediaType={mediaType} />
          <CartDescription
            mediaType={mediaType}
            voteAverage={voteAverage}
            genres={undefined}
          />
        </div>
      </div>
    </Link>
  )
}
export default UpTopCard
