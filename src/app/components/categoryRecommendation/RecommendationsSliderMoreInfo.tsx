import { StarIcon } from "@heroicons/react/24/solid"
import { Fragment } from "react"

type RecommendationsSliderMoreInfoProps = {
  releaseDate: string
  voteAverage: number
  genres: (string | undefined)[]
}

const RecommendationsSliderMoreInfo = ({
  voteAverage,
  genres,
  releaseDate,
}: RecommendationsSliderMoreInfoProps) => {
  return (
    <div className="flex gap-2 mt-2 text-sm items-center">
      <div className="flex gap-2">
        <StarIcon className="w-5 h-5 xl:w-6 xl:h-6 text-yellow-400" />
        <p className="text-white text-sm font-bold mt-auto">
          {voteAverage.toFixed(1)}
        </p>
      </div>
      <p className="font-medium text-gray-500 text-xs">|</p>
      <div className="flex text-gray-500 gap-2 text-sm">
        {releaseDate.split("-")[0]}
        {genres.map((genre, index) => (
          <Fragment key={index}> ● {genre} </Fragment>
        ))}
      </div>
    </div>
  )
}
export default RecommendationsSliderMoreInfo
