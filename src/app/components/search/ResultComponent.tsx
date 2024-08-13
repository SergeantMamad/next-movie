import Image from "next/image"
import Link from "next/link"

type ResultComponentProps = {
  mediaType: string
  id: number
  posterPath:string
  title: string
  releaseDate?:string
  voteAverage: number
  firstAirDate?: string
}

const ResultComponent = ({
  mediaType,
  id,
  posterPath,
  title,
  releaseDate,
  voteAverage,
  firstAirDate,
}: ResultComponentProps) => {
  return (
    <Link href={mediaType == "tv" ? `/series/${id}` : `/movie/${id}`}>
      <div
        className={`w-full p-2 flex gap-3 hover:bg-[#0e0c11] rounded-md transition-colors border-b rounded-b-none border-gray-900`}
      >
        <Image
          src={`https://image.tmdb.org/t/p/original${posterPath}`}
          width="80"
          height="120"
          className="object-cover rounded-md"
          alt={id.toString()}
        />
        <div className="flex flex-col justify-between">
          <p className="font-semibold">{title}</p>
          <p className="uppercase text-gray-500">{mediaType}</p>
          <p className="text-gray-500">
            {mediaType == "tv"
              ? firstAirDate
                ? firstAirDate.split("-")[0]
                : "Unknown"
              : mediaType == "movie"
              ? releaseDate
                ? releaseDate.split("-")[0]
                : "Unknown"
              : ""}
          </p>
          <p className="text-gray-500">{voteAverage.toFixed(1) + "/10"}</p>
        </div>
      </div>
    </Link>
  )
}
export default ResultComponent
