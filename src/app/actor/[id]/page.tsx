"use client"
import { getActor } from "@/action"
import { useSuspenseQuery } from "@tanstack/react-query"
import Image from "next/image"
import { useMemo } from "react"
import { Tab, Tabs } from "@nextui-org/react"
import { removeDuplicates } from "@/app/utils/functions/removeDuplicates"
import KnownForSlider from "@/app/components/actor/KnownForSlider"
import MainImages from "@/app/components/mainImages/MainImages"
import ActorInitialDetail from "@/app/components/actor/ActorInitialDetail"
import Biography from "@/app/components/actor/Biography"
import ActorAccordion from "@/app/components/actor/ActorAccordion"

type ActorProps = {
  params: {
    id: number
  }
}
const Actor = ({ params: { id } }: ActorProps) => {
  const { data } = useSuspenseQuery({
    queryKey: ["actor" + id],
    queryFn: () => getActor(id),
  })

  
  const cast = useMemo(() => {
    return removeDuplicates(data?.combined_credits.cast!, "id")
  }, [data?.combined_credits.cast])
  const crew = useMemo(() => {
    return removeDuplicates(data?.combined_credits.crew!, "id")
  }, [data?.combined_credits.crew])
  return (
    <main>
      <div className="relative h-[400px] slider active">
        <Image
          unoptimized
          src="/images/BackImage.jpg"
          fill
          alt=""
          className="object-cover brightness-50"
        />
      </div>
      <div className="p-12 grid grid-cols-1 xl:grid-cols-[30%_70%]">
        <ActorInitialDetail
          birthday={data?.birthday!}
          deathday={data?.deathday}
          gender={data?.gender!}
          knownForDepartment={data?.known_for_department!}
          name={data?.name!}
          placeOfBirth={data?.place_of_birth!}
          profilePath={data?.profile_path!}
          isInModal={false}
        />
        <div className="max-w-[100%]">
          <Biography isInModal={false} biography={data?.biography!} />
          <KnownForSlider works={removeDuplicates([...crew, ...cast], "id")} />
          <Tabs variant="underlined" color="primary">
            <Tab title="All Works">
              <ActorAccordion isInModal={false} credits={data?.combined_credits!} defaultPagination={6} />
            </Tab>
            <Tab title="Picture">
              <MainImages type="actor" id={id} season={0} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
export default Actor
