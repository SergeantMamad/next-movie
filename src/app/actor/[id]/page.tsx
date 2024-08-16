"use client"
import { getActor, getActorCredits } from "@/action"
import { Gender } from "@/app/utils/configs/genderChange"
import { useSuspenseQuery } from "@tanstack/react-query"
import Image from "next/image"
import { format, differenceInYears } from "date-fns"
import { useState } from "react"
import { customcn } from "@/app/utils/functions/customcn"
import { Tab, Tabs } from "@nextui-org/react"
import ResultComponent from "@/app/components/search/ResultComponent"
import { uniq } from "lodash"
import { removeDuplicates } from "@/app/utils/functions/removeDuplicates"

type ActorProps = {
  params: {
    id: number
  }
}
const Actor = ({ params: { id } }: ActorProps) => {
  const ActorData = useSuspenseQuery({
    queryKey: ["actor" + id],
    queryFn: () => getActor(id),
  })
  const CombinedData = useSuspenseQuery({
    queryKey: ["acotor_credit" + id],
    queryFn: () => getActorCredits(id),
  })
  console.log(CombinedData.data?.cast)
  const [state, setState] = useState(false)
  const newCombinedData = removeDuplicates(CombinedData.data?.cast!, "id")
  return (
    <div>
      <div className="relative h-[400px] slider active">
        <Image
          unoptimized
          src="/images/BackImage.jpg"
          fill
          alt=""
          className="object-cover brightness-50"
        />
      </div>
      <div className="flex justify-between p-12 gap-28">
        <div className="w-max flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold text-white">
            {ActorData.data?.name}
          </h1>
          <div className="relative w-[300px] h-[400px]">
            <Image
              src={`https://image.tmdb.org/t/p/original${ActorData.data?.profile_path}`}
              fill
              alt=""
              className="object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col justify-between w-full items-center">
            <h1 className="text-xl font-semibold">Gender</h1>
            <p className="text-sm text-gray-500">
              {Gender[ActorData.data!.gender]}
            </p>
          </div>
          <div className="flex flex-col justify-between w-full items-center">
            <h1 className="text-xl font-semibold">Birthday</h1>
            <p className="text-sm text-gray-500">
              {format(ActorData.data?.birthday!, "e LLLL yyyy")} (
              {ActorData.data?.deathday == null && (
                <>
                  {differenceInYears(new Date(), ActorData.data?.birthday!)}{" "}
                  Years Old
                </>
              )}
              )
            </p>
          </div>
          <div className="flex flex-col justify-between w-full items-center">
            <h1 className="text-xl font-semibold">Place Of Birth</h1>
            <p className="text-sm text-gray-500">
              {ActorData.data?.place_of_birth}
            </p>
          </div>
          <div className="flex flex-col justify-between w-full items-center">
            <h1 className="text-xl font-semibold">Known For</h1>
            <p className="text-sm text-gray-500">
              {ActorData.data?.known_for_department}
            </p>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-3xl font-bold text-white">Biography</h1>
          <div
            className={customcn(
              "overflow-hidden transition-[max-height] duration-1000 ease-in-out mt-4",
              state ? "max-h-[1000px]" : "max-h-[10em]"
            )}
          >
            <p className="whitespace-pre-wrap text-sm text-gray-500">
              {ActorData.data?.biography}
            </p>
          </div>
          <button
            onClick={() => setState((prevState) => !prevState)}
            className="text-green-500 mt-5 text-sm"
          >
            {state == false ? "Show More +" : "Show Less -"}
          </button>
          <h1 className="text-3xl font-bold text-white mt-5">
            Most Famous Works
          </h1>
          <Tabs variant="underlined" color="primary">
            <Tab title="AS Cast">
              {newCombinedData
                .sort((a, b) => b.vote_count - a.vote_count)
                .map((cast) => (
                  <ResultComponent
                    id={cast.id}
                    mediaType={cast.media_type!}
                    posterPath={cast.poster_path!}
                    title={cast.title!}
                    voteAverage={cast.vote_average}
                    releaseDate={cast.release_date}
                    firstAirDate={cast.first_air_date}
                  />
                ))}
            </Tab>
            <Tab title="AS Crew"></Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
export default Actor
