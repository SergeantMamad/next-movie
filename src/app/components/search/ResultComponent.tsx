import Image from "next/image"
import Link from "next/link"
import GenreDescription from "../cartGeneral/GenreDescription"
import CartDescription from "../cartGeneral/CartDescription"
import { customcn } from "@/app/utils/functions/customcn"
import JobDescription from "../cartGeneral/JobDescription"

type ResultComponentProps = {
  mediaType: string
  id: number
  posterPath: string
  title: string
  releaseDate?: string
  voteAverage: number
  firstAirDate?: string
  genres: number[]
  isInSearch: boolean
  job?: string
}

const ResultComponent = ({
  mediaType,
  id,
  posterPath,
  title,
  releaseDate,
  voteAverage,
  firstAirDate,
  genres,
  isInSearch,
  job,
}: ResultComponentProps) => {
  return (
    <Link href={mediaType == "tv" ? `/series/${id}` : `/movie/${id}`}>
      <div
        className={customcn(
          `min-w-[250px] p-2 flex gap-3 hover:bg-[#0e0c11] rounded-md transition-colors`,
          isInSearch && "max-w-full border-b rounded-b-none border-gray-900"
        )}
      >
        <div className="relative min-w-[70px] min-h-[120px]">
          <Image
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            fill
            className="object-cover rounded-md"
            alt={id.toString()}
          />
        </div>
        <div className="flex flex-col justify-center gap-[6px]">
          <p className="font-semibold">{title}</p>
          {isInSearch == false && <JobDescription job={job!} />}
          <GenreDescription genres={genres} mediaType={mediaType} />
          <CartDescription
            genres={undefined}
            mediaType={
              firstAirDate == undefined
                ? mediaType + " ● " + releaseDate?.split("-")[0]!
                : mediaType + " ● " + +firstAirDate?.split("-")[0]!
            }
            voteAverage={voteAverage}
          />
        </div>
      </div>
    </Link>
  )
}
export default ResultComponent
