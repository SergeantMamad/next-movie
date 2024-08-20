import Image from "next/image"
import MoreButtonsComponent from "../cartGeneral/MoreButtonsComponent"

type SingleFetchCardProps = {
  backdropPath: string
  name: string
  overview: string
  id: number
}

const SingleFetchCard = ({
  backdropPath,
  name,
  overview,
  id,
}: SingleFetchCardProps) => {
  return (
    <div className="relative w-full h-[650px] mt-20">
      <div className="middleSlide active">
        <Image
          fill
          src={`https://image.tmdb.org/t/p/w1280${backdropPath}`}
          className="object-cover object-top"
          alt=""
        />
        <div className="absolute left-6 right-6 xl:left-12 xl:right-0  bottom-48">
          <p className="py-1 px-6 rounded-[20px] bg-black/50 text-white w-fit font-medium text-sm xl:text-base">
            Recommended By NEXT MOVIE Team
          </p>
          <h1 className="font-bold text-white text-3xl xl:text-5xl mt-4">{name}</h1>
          <p className="text-white text-sm xl:w-1/3 mt-4 text-justify">
            {overview}
          </p>
          <MoreButtonsComponent link={`../series/${id}`} />
        </div>
      </div>
    </div>
  )
}
export default SingleFetchCard
