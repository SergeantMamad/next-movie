import Image from "next/image"
import MoreButtonsComponent from "../cartGeneral/MoreButtonsComponent"
import RecommendationsSliderMoreInfo from "./RecommendationsSliderMoreInfo"

type RecommendationsSliderProps = {
  backdropPath: string
  title: string
  voteAverage: number
  index: number
  slide: number
  genres: (string | undefined)[]
  releaseDate:string
  id:number
  mediaType:string
}

const RecommendationsSlider = ({
  backdropPath,
  title,
  voteAverage,
  index,
  slide,
  genres,
  releaseDate,
  id,
  mediaType
}: RecommendationsSliderProps) => {
  return (
    <>
      <div className={`middleSlide ${slide == index ? "active visible" : "invisible"}`}>
        <Image
          fill
          src={`https://image.tmdb.org/t/p/w1280${backdropPath}`}
          className="object-cover"
          alt=""
        />
        <div className="absolute top-[200px] left-[5%]">
          <p className="py-1 px-6 rounded-[20px] bg-black/50 text-white w-fit font-medium">
            Explore By Genre
          </p>
          <h1 className="font-bold text-white text-3xl lg:text-5xl mt-5 w-[50%]">{title}</h1>
          <RecommendationsSliderMoreInfo
            genres={genres}
            voteAverage={voteAverage}
            releaseDate={releaseDate}
          />
          <MoreButtonsComponent link={mediaType == "tv" ? `/series/${id}` : `/movie/${id}`} />
        </div>
      </div>
    </>
  )
}
export default RecommendationsSlider
