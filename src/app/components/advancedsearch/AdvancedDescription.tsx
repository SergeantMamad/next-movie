import { TvIcon } from "@heroicons/react/24/outline"
import { FilmIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const AdvancedDescription = ({
    category
}:{
    category:string
}) => {
  return (
    <div className="h-[600px] flex flex-col items-center justify-center w-full gap-3">
      {category == "movie" ? <FilmIcon className="w-64 h-64 lg:w-96 lg:h-96" /> : <TvIcon className="w-64 h-64 lg:w-96 lg:h-96"/>}
      <p className="text-3xl lg:text-4xl font-bold text-white/90 text-center">
        This is the best section of next movie
      </p>
      <p className="text-base lg:text-lg font-semibold text-white/90 text-center">
        Search all of the {category == "movie" ? "movies" : "tv Series"} with your customized options, Choose between
        Genres,Release Date,Title and etc...
      </p>
      <Link href={category == "movie" ? "/advancedsearch/tv" : "/advancedsearch/movie"} className="text-green-500 font-semibold text-xs">
        Or check the {category == "movie" ? "movies" : "tv series"} section
      </Link>
    </div>
  )
}
export default AdvancedDescription
