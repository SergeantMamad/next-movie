//episodeData.data.episodes[0].still_path

import { Fragment } from "react"

type SeasonImageDetailsProps = {
  numberOfEpisodes: number
  airDate: string
  genres: {
    id: number
    name?: string
  }[]
}
const SeasonImageDetails = ({
  numberOfEpisodes,
  airDate,
  genres,
}: SeasonImageDetailsProps) => {
  return (
    <div className="text-[#9CA4AB] text-xs flex gap-1 h-fit w-fit">
      <>{numberOfEpisodes} Episodes ●</>
      <>{airDate.split("-")[0]} </>
      {genres.map((genre, index) => (
        <Fragment key={index}> ● {genre.name} </Fragment>
      ))}
    </div>
  )
}
export default SeasonImageDetails
