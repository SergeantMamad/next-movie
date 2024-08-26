import { StarIcon } from "@heroicons/react/24/solid"
import MoreButtonsComponent from "../../cartGeneral/MoreButtonsComponent"
import Image from "next/image"
import { dateConvertor } from "@/app/utils/functions/dateConvertor"
import CartDescription from "../../cartGeneral/CartDescription"

type TopImdbCartProps = {
  backdropPath: string
  releaseDate: string
  title: string
  voteAverage: number
  overview: string
  id: number
  genres: number[]
  posterPath: string
}
const TopImdbMainCart = ({
  backdropPath,
  releaseDate,
  title,
  voteAverage,
  overview,
  id,
  genres,
  posterPath,
}: TopImdbCartProps) => {
  return (
    <div className="w-[90vw] xl:w-[645px] flex flex-col gap-8">
      <div className="w-full xl:w-[645px] min-h-[300px] relative">
        <Image
          src={`https://image.tmdb.org/t/p/original${backdropPath}`}
          fill
          className="object-cover object-top"
          alt=""
        />
      </div>
      <p className="py-1 px-6 rounded-[20px] border border-gray-500 bg-black text-white w-fit font-medium">
        {`Release Date : ${dateConvertor(releaseDate)}`}
      </p>
      <h1 className="font-bold text-5xl text-white">{title}</h1>
      <CartDescription
        mediaType="movie"
        genres={genres}
        voteAverage={voteAverage}
      />
      <p className="text-white text-xs line-clamp-4 text-justify w-full">
        {overview}
      </p>
      <MoreButtonsComponent
        genres={genres}
        id={id.toString()}
        title={title}
        mediaType="movie"
        link={`/movie/${id}`}
        posterPath={posterPath}
      />
    </div>
  )
}
export default TopImdbMainCart
