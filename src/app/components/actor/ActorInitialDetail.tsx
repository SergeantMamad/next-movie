import { Gender } from "@/app/utils/configs/genderChange"
import { differenceInYears, format } from "date-fns"
import Image from "next/image"
import Detail from "./Detail"
import { customcn } from "@/app/utils/functions/customcn"

type ActorInitialDetailProps = {
  name: string
  profilePath: string
  gender: number
  birthday: string
  placeOfBirth: string
  knownForDepartment: string
  deathday: string | undefined
  isInModal: boolean
}

const ActorInitialDetail = ({
  name,
  profilePath,
  gender,
  birthday,
  placeOfBirth,
  knownForDepartment,
  deathday,
  isInModal,
}: ActorInitialDetailProps) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h1 className="text-3xl font-bold text-white">{name}</h1>
      <div
        className={customcn(
          "relative w-[300px] h-[400px]",
          isInModal && "w-[200px] h-[200px]"
        )}
      >
        <Image
          src={`https://image.tmdb.org/t/p/original${profilePath}`}
          fill
          alt=""
          className={customcn(
            "object-cover rounded-md",
            isInModal && "rounded-full"
          )}
        />
      </div>
      <div className={customcn("flex flex-col gap-4", isInModal && "grid grid-cols-2 gap-6 md:flex md:flex-row md:gap-24")}>
        <Detail isInModal={isInModal} title="Gender">
          {Gender[gender]}
        </Detail>
        <Detail isInModal={isInModal} title="Birthday">
          {format(birthday!, "e LLLL yyyy")} (
          <>{differenceInYears(deathday || new Date(), birthday!)} Years Old</>)
        </Detail>
        {deathday != null && (
          <Detail isInModal={isInModal} title="Day of Death">
            {deathday}
          </Detail>
        )}
        <Detail isInModal={isInModal} title="Place Of Birth">
          {placeOfBirth}
        </Detail>
        <Detail isInModal={isInModal} title="Known For">
          {knownForDepartment}
        </Detail>
      </div>
    </div>
  )
}
export default ActorInitialDetail
