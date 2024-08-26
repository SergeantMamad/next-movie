"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import useOnScreen from "../utils/hooks/useOnScreen"
import { usePersonPopularQuery } from "../utils/hooks/usePersonPopularQuery"
import PeopleCard from "../components/people/PeopleCard"
import { updateQueryParams } from "../utils/functions/updateQueryParams"
import { useSearchParams } from "next/navigation"
import { usePersonSearchQuery } from "../utils/hooks/usePersonSearchQuery"
import debounce from "lodash.debounce"
import DotPulse from "../components/loader/DotPulse"

const Page = () => {
  const params = useSearchParams()
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref)
  const [personSearch, setPersonSearch] = useState(
    params.get("personSearch") || ""
  )
  const popularData = usePersonPopularQuery(isVisible, personSearch)
  const personSearchItems = usePersonSearchQuery(personSearch, isVisible)
  function handleType(e: any) {
    setPersonSearch(e.target.value)
  }
  useEffect(() => {
    updateQueryParams({
      personSearch: personSearch || null,
    })
  }, [personSearch, updateQueryParams])
  return (
    <main className="w-screen">
      <title>People Search | Next Movie</title>
      <div className="relative h-[500px] slider active">
        <Image
          unoptimized
          src="/images/people.jpg"
          fill
          alt=""
          className="object-cover brightness-50"
        />
      </div>
      <div className="relative flex flex-col justify-center gap-6">
        <input
          placeholder="Type A Person (Actor,Actress,Director,etc...)"
          className="w-5/6 mx-auto mt-32 p-3 rounded-md outline-none bg-default-100 border border-[#353535] placeholder-foreground-500 transition-all focus:border-stone-600"
          onInput={debounce(handleType, 1500)}
        />
        {personSearch == "" && (
          <>
            <p className="text-3xl font-bold text-center">Popular People</p>
            <div className="flex flex-col lg:grid lg:grid-cols-3 xl:grid-cols-4 p-5 lg:px-28 lg:place-items-center lg:gap-16 min-h-max">
              {popularData.data.pages[0] &&
                popularData.data.pages.map((page) =>
                  page?.map((res, index) => (
                    <PeopleCard
                      id={res.id}
                      profilePath={res.profile_path!}
                      knownFor={res.known_for_department!}
                      name={res.name!}
                      key={index}
                    />
                  ))
                )}
            </div>
          </>
        )}
        <div className="flex flex-col lg:grid lg:grid-cols-3 xl:grid-cols-4 p-5 lg:px-28 lg:place-items-center lg:gap-16 min-h-max">
          {personSearchItems?.data?.pages[0] &&
            personSearchItems.data.pages.map((page) =>
              page?.map((res, index) => (
                <PeopleCard
                  id={res.id}
                  profilePath={res.profile_path!}
                  knownFor={res.known_for_department!}
                  name={res.name!}
                  key={index}
                />
              ))
            )}
          {personSearchItems.data?.pages[0]?.length == 0 && (
            <p className="col-span-4 text-4xl mx-auto font-bold text-white h-screen flex items-center text-center">
              There is no resault match with your serach parameters
            </p>
          )}
        </div>
      </div>
      {popularData.isFetching ||
        (personSearchItems.isFetching && (
          <div className="w-screen flex items-center justify-center h-40">
            <DotPulse />
          </div>
        ))}
      <div ref={ref}></div>
    </main>
  )
}
export default Page