import { DateDetailConvertor } from "@/app/utils/functions/dateDetailConvertor"

type HeaderImageDetailsProps = {
  runtime: number
  releaseDate: string
  genres: {
    id: number
    name?: string
  }[]
}
const HeaderImageDetails = ({
  runtime,
  releaseDate,
  genres,
}: HeaderImageDetailsProps) => {
  console.log(runtime)
  return (
    <div className="text-[#9CA4AB] text-sm text-justify flex gap-1">
      <p>{DateDetailConvertor(runtime)} ●</p>
      <p>{releaseDate.split("-")[0]} </p>
      {genres.map((genre, index) => (
        <p key={index}> ● {genre.name} </p>
      ))}
    </div>
  )
}
export default HeaderImageDetails
