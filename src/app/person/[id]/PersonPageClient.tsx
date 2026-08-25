"use client"
import Image from "next/image"
import { Suspense, useMemo } from "react"
import { Tabs } from "@heroui/react"
import { removeDuplicates } from "@/app/utils/functions/removeDuplicates"
import KnownForSlider from "@/app/components/person/KnownForSlider"
import MainImages from "@/app/components/mainImages/MainImages"
import PersonInitialDetail from "@/app/components/person/PersonInitialDetail"
import Biography from "@/app/components/person/Biography"
import PersonAccordion from "@/app/components/person/PersonAccordion"
import MainImagesSekelton from "@/app/components/mainImages/MainImagesSekelton"
import type { getPerson } from "@/app/utils/actions/getSingleData"

type Person = NonNullable<Awaited<ReturnType<typeof getPerson>>>

export default function PersonPageClient({
  id,
  data
}: {
  id: number
  data: Person
}) {
  const cast = useMemo(
    () => removeDuplicates(data.combined_credits.cast!, "id"),
    [data.combined_credits.cast]
  )
  const crew = useMemo(
    () => removeDuplicates(data.combined_credits.crew!, "id"),
    [data.combined_credits.crew]
  )

  return (
    <main>
      <div className="relative h-[400px] slider active">
        <Image
          unoptimized
          src="/images/BackImage.jpg"
          fill
          sizes="100vw"
          alt=""
          className="object-cover brightness-50"
        />
      </div>
      <div className="p-12 grid grid-cols-1 xl:grid-cols-[30%_70%]">
        <PersonInitialDetail
          birthday={data.birthday!}
          deathday={data.deathday}
          gender={data.gender!}
          knownForDepartment={data.known_for_department!}
          name={data.name!}
          placeOfBirth={data.place_of_birth!}
          profilePath={data.profile_path!}
          isInModal={false}
        />
        <div className="max-w-[100%]">
          <Biography isInModal={false} biography={data.biography!} />
          <KnownForSlider works={removeDuplicates([...crew, ...cast], "id")} />
          <Tabs variant="secondary">
            <Tabs.ListContainer>
              <Tabs.List aria-label="Person sections">
                <Tabs.Tab id="all-works" className="w-max">
                  All Works
                  <Tabs.Indicator />
                </Tabs.Tab>
                <Tabs.Tab id="picture" className="w-max">
                  Picture
                  <Tabs.Indicator />
                </Tabs.Tab>
              </Tabs.List>
            </Tabs.ListContainer>
            <Tabs.Panel id="all-works">
              <PersonAccordion
                isInModal={false}
                credits={data.combined_credits!}
                defaultPagination={6}
              />
            </Tabs.Panel>
            <Tabs.Panel id="picture">
              <Suspense fallback={<MainImagesSekelton />}>
                <MainImages type="actor" id={id} season={0} />
              </Suspense>
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
