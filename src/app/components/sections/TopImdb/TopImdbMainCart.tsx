import { StarIcon } from "@heroicons/react/24/solid"
import MoreButtonsComponent from "../../cartGeneral/MoreButtonsComponent"
import Image from "next/image"
import { dateConvertor } from "@/app/utils/functions/dateConvertor"

type TopImdbCartProps = {
  backdropPath: string
  releaseDate: string
  title: string
  voteAverage: number
  overview: string
}
const TopImdbMainCart = ({
  backdropPath,
  releaseDate,
  title,
  voteAverage,
  overview,
}: TopImdbCartProps) => {
  return (
    <div className="w-[680px] flex flex-col gap-8">
      <div className="w-[680px] h-[315px] relative">
        <Image
          src={`https://image.tmdb.org/t/p/original${backdropPath}`}
          fill
          style={{
            objectFit: "cover",
          }}
          alt=""
        />
      </div>
      <p className="py-1 px-6 rounded-[20px] border border-gray-500 bg-black text-white w-fit font-medium">
        {`Release Date : ${dateConvertor(releaseDate)}`}
      </p>
      <h1 className="font-bold text-5xl text-white">{title}</h1>
      <div className="flex gap-2">
        <StarIcon className="w-5 h-5 text-yellow-400" />
        <p className="text-white text-xs font-bold mt-auto">
          {voteAverage.toFixed(1)}
        </p>
      </div>
      <p className="text-white text-xs line-clamp-4 text-justify w-[645px]">
        {overview}
      </p>
      <MoreButtonsComponent />
    </div>
  )
}
export default TopImdbMainCart
