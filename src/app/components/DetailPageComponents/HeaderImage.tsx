import Image from "next/image"
import MoreButtonsComponent from "../cartGeneral/MoreButtonsComponent"
import HeaderImageDetails from "../moviePageComponents/HeaderImageDetails"
import SeriesImageDetails from "../seriesPageComponent/SeriesImageDetails"
import SeasonImageDetails from "../seriesPageComponent/SeasonImageDetails"

type HeaderImageProps = {
  backdropPath: string
  title: string
  isTvSeries: boolean
  isTvSeason: boolean
  releaseDate?: string
  runtime?: number
  genres: {
    id: number
    name?: string
  }[]
  firstAirDate?: string
  numberOfSeasons?: number
  numberOfEpisodes?: number
  link:string
}

const HeaderImage = ({
  backdropPath,
  title,
  isTvSeries,
  isTvSeason,
  releaseDate,
  runtime,
  genres,
  firstAirDate,
  numberOfSeasons,
  numberOfEpisodes,
  link
}: HeaderImageProps) => {
  console.log(isTvSeries)
  return (
    <div className="relative w-full h-[780px]">
      <div className="slider active">
        <div className="h-[780px] relative">
          <Image
            src={`https://image.tmdb.org/t/p/original${backdropPath}`}
            fill
            className="object-cover h-full object-top"
            alt="title"
          />
        </div>
        <div className="absolute grid grid-cols-1 gap-6 left-12 bottom-20">
          <p className="py-1 px-4 rounded-[20px] border border-gray-500 bg-black text-white w-fit font-medium text-xs">
            Movie
          </p>
          <h1 className="font-bold text-white text-4xl">{title}</h1>
          {isTvSeries == false && (
            <HeaderImageDetails
              releaseDate={releaseDate!}
              genres={genres}
              runtime={runtime!}
            />
          )}
          {isTvSeries == true && isTvSeason != true ? (
            <SeriesImageDetails
              genres={genres}
              firstAirDate={firstAirDate!}
              numberOfSeasons={numberOfSeasons!}
            />
          ) : (
            isTvSeries == true &&
            isTvSeason == true && (
              <SeasonImageDetails
                airDate={firstAirDate!}
                genres={genres}
                numberOfEpisodes={numberOfEpisodes!}
              />
            )
          )}
          <MoreButtonsComponent link={link} />
        </div>
      </div>
    </div>
  )
}
export default HeaderImage
