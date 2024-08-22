import Link from "next/link"
import { operations } from "../../../../schema"
import ResultComponent from "./ResultComponent"
import DotPulse from "../loader/DotPulse"

type SearchBodyProps = {
  data: operations["search-multi"]["responses"]["200"]["content"]["application/json"]["results"]
  searchInput: string
  searchParam: string | null
  isPending: boolean
}

const SearchBody = ({
  data,
  searchInput,
  searchParam,
  isPending,
}: SearchBodyProps) => {
  return (
    <div className="w-full max-h-[550px] overflow-y-auto p-2">
      {searchInput == "" ? (
        <p className="text-center w-full p-7 block">
          Type A Movie Or A TV Show
        </p>
      ) : data && data.length > 0 ? (
        <>
          {data.map((result, index) => (
            <ResultComponent
              id={result.id}
              mediaType={result.media_type!}
              posterPath={result.poster_path!}
              title={(result as any).name || result.title}
              voteAverage={result.vote_average}
              firstAirDate={
                result.media_type == "tv"
                  ? (result as any).first_air_date
                  : undefined
              }
              releaseDate={
                result.media_type == "movie" ? result.release_date : undefined
              }
              genres={result.genre_ids!}
              isInSearch={true}
              key={index}
            />
          ))}
          <Link
            href={`searchall/?search=${searchParam}`}
            className="block text-center w-full p-5 hover:bg-[#0e0c11] rounded-md transition-colors border-gray-900"
          >
            Search For More
          </Link>
        </>
      ) : data?.length == 0 ? (
        <p className="text-center w-full p-7 block">There is no result</p>
      ) : isPending ? (
        <div className="w-full flex items-center justify-center">
          <DotPulse />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
export default SearchBody
