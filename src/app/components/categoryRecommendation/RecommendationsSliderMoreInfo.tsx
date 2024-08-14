import { StarIcon } from "@heroicons/react/24/solid"

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
        <StarIcon className="w-6 h-6 text-yellow-400" />
        <p className="text-white text-sm font-bold mt-auto">
          {voteAverage.toFixed(1)}
        </p>
      </div>
      <p className="font-medium text-gray-500 text-sm">|</p>
      <div className="flex text-gray-500 gap-2">
        {releaseDate.split("-")[0]}
        {genres.map((genre, index) => (
          <p key={index}> ● {genre} </p>
        ))}
      </div>
    </div>
  )
}
export default RecommendationsSliderMoreInfo
