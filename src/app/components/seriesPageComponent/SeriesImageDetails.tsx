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
    <div className="text-[#9CA4AB] text-sm text-justify flex gap-1">
      <p>{numberOfSeasons} Seasons ●</p>
      <p>{firstAirDate.split("-")[0]} </p>
      {genres.map((genre, index) => (
        <p key={index}> ● {genre.name} </p>
      ))}
    </div>
  )
}
export default SeriesImageDetails
