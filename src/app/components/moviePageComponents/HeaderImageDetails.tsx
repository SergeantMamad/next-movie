import { DateDetailConvertor } from "@/app/utils/functions/dateDetailConvertor"
import { Fragment } from "react"

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
      <>{DateDetailConvertor(runtime)} ●</>
      <>{releaseDate.split("-")[0]} </>
      {genres.map((genre, index) => (
        <Fragment key={index}> ● {genre.name} </Fragment>
      ))}
    </div>
  )
}
export default HeaderImageDetails
