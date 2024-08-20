import { Fragment } from "react"

type SeriesImageDeatilsProps = {
  numberOfSeasons: number
  firstAirDate: string
  genres: {
    id: number
    name?: string
  }[]
}

const SeriesImageDetails = ({
  numberOfSeasons,
  firstAirDate,
  genres,
}: SeriesImageDeatilsProps) => {
  return (
    <div className="text-[#9CA4AB] text-xs flex gap-1 h-fit w-fit">
      <>{numberOfSeasons} Seasons ●</>
      <>{firstAirDate.split("-")[0]} </>
      {genres.map((genre, index) => (
        <Fragment key={index}> ● {genre.name} </Fragment>
      ))}
    </div>
  )
}
export default SeriesImageDetails
