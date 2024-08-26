import Image from "next/image"
import RecommendationsSliderMoreInfo from "./RecommendationsSliderMoreInfo"
import { movieGenre } from "@/app/utils/configs/genres"
import MoreButtonsComponent from "../../cartGeneral/MoreButtonsComponent"

type RecommendationsSliderProps = {
  backdropPath: string
  title: string
  voteAverage: number
  index: number
  slide: number
  releaseDate: string
  id: number
  mediaType: string
  genreIds: number[]
  posterPath: string
}

const RecommendationsSlider = ({
  backdropPath,
  title,
  voteAverage,
  index,
  slide,
  releaseDate,
  id,
  mediaType,
  genreIds,
  posterPath,
}: RecommendationsSliderProps) => {
  return (
    <>
      <div
        className={`middleSlide relative w-full h-[900px] ${
          slide == index ? "active visible" : "invisible"
        }`}
      >
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
          <h1 className="font-bold text-white text-3xl lg:text-5xl mt-5 w-[50%]">
            {title}
          </h1>
          <RecommendationsSliderMoreInfo
            genres={movieGenre
              .filter((category) => genreIds?.includes(category.id))
              .map((category) => category.name)}
            voteAverage={voteAverage}
            releaseDate={releaseDate}
          />
          <MoreButtonsComponent
            genres={genreIds}
            id={id.toString()}
            mediaType={mediaType}
            posterPath={posterPath}
            title={title}
            link={mediaType == "tv" ? `/series/${id}` : `/movie/${id}`}
          />
        </div>
      </div>
    </>
  )
}
export default RecommendationsSlider
