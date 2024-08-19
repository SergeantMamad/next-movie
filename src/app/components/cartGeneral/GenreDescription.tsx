import { movieGenre, seriesGenre } from "@/app/utils/configs/genres"
import { FilmIcon } from "@heroicons/react/24/solid"
import { Fragment } from "react"

const GenreDescription = ({
  genres,
  mediaType,
}: {
  genres: number[]
  mediaType: string
}) => {
  return (
    <div className="flex gap-2 items-center w-full">
      <FilmIcon className="w-4 h-4 text-CustomGray" />
      {genres != undefined && mediaType == "movie"
        ? movieGenre
            .filter((category) => genres.includes(category.id))
            .map((genre, index) => (
              <p
                className="text-CustomGray font-semibold text-xs truncate"
                key={index}
              >
                {genre.name} {genres.length != 1 && index % 2 == 0 && "●"}
              </p>
            ))
            .slice(0, 2)
        : mediaType == "tv" &&
          seriesGenre
            .filter((category) => genres?.includes(category.id))
            .map((genre, index) => (
              <p
                className="text-CustomGray font-semibold text-xs text-ellipsis truncate"
                key={index}
              >
                {genre.name} {genres.length != 1 && index % 2 == 0 && "●"}
              </p>
            ))
            .slice(0, 2)}
    </div>
  )
}
export default GenreDescription
