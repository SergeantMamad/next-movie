//episodeData.data.episodes[0].still_path

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
    <div className="text-[#9CA4AB] text-sm text-justify flex gap-1">
      <p>{numberOfEpisodes} Episodes ●</p>
      <p>{airDate.split("-")[0]} </p>
      {genres.map((genre, index) => (
        <p key={index}> ● {genre.name} </p>
      ))}
    </div>
  )
}
export default SeasonImageDetails
