import { movieGenre, seriesGenre } from "@/app/utils/configs/genres"
import { StarIcon } from "@heroicons/react/24/solid"
import { Fragment } from "react"

type CartDescriptionType = {
  voteAverage: number
  mediaType: string
  genres: number[] | undefined
}
const CartDescription = ({
  voteAverage,
  mediaType,
  genres,
}: CartDescriptionType) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="flex gap-2">
        <StarIcon className="w-5 h-5 text-yellow-400" />
        <p className="text-white text-sm font-bold mt-auto">
          {voteAverage.toFixed(1)}
        </p>
      </div>
      <p className="font-medium text-CustomGray  text-sm">|</p>
      <p className="text-CustomGray font-semibold text-xs capitalize">
        {mediaType}
        {genres != undefined && mediaType == "movie"
          ? movieGenre
              .filter((category) => genres.includes(category.id))
              .map((genre, index) => (
                <Fragment key={index}> ● {genre.name} </Fragment>
              ))
              .slice(0, 2)
          : mediaType == "tv" &&
            seriesGenre
              .filter((category) => genres?.includes(category.id))
              .map((genre, index) => (
                <Fragment key={index}> ● {genre.name} </Fragment>
              ))
              .slice(0, 2)}
      </p>
    </div>
  )
}
export default CartDescription
