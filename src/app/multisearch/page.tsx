"use client"
import { useEffect, useRef, useState } from "react"
import React from "react"
import debounce from "debounce"
import TrendingCard from "../components/sections/TodaysTrending/TrendingCard"
import { useSearchInfiniteQuery } from "../utils/hooks/useSearchInfiniteQuery"
import { useSearchParams } from "next/navigation"
import DotPulse from "../components/loader/DotPulse"
import ResultComponent from "../components/search/ResultComponent"
import useOnScreen from "../utils/hooks/useOnScreen"
import useMediaQuery from "../utils/hooks/useMediaQuery"
import { updateQueryParams } from "../utils/functions/updateQueryParams"
import Image from "next/image"

const Page = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref)
  const params = useSearchParams()
  const [searchParam, setSearchParam] = useState(params.get("search") || "")
  const isLarge = useMediaQuery("(min-width: 1024px)")

  const searchQuery = useSearchInfiniteQuery(searchParam, isVisible)
  useEffect(() => {
    updateQueryParams({ search: searchParam })
  }, [searchParam])

  function handleType(e: any) {
    setSearchParam(e.target.value)
  }

  const content =
    searchQuery?.data?.pages[0] &&
    searchQuery?.data.pages.map((page) =>
      page?.map((res, index) => {
        return res.vote_average == 0.0 ? null : isLarge ? (
          <TrendingCard
            type="search"
            id={res.id}
            mediaType={res.media_type!}
            posterPath={res.poster_path!}
            title={res.title! || (res as any).name}
            voteAverage={res.vote_average}
            genres={res.genre_ids!}
            key={index}
          />
        ) : (
          <ResultComponent
            id={res.id}
            mediaType={res.media_type!}
            posterPath={res.poster_path!}
            title={(res as any).name || res.title}
            voteAverage={res.vote_average}
            firstAirDate={
              res.media_type == "tv" ? (res as any).first_air_date : undefined
            }
            releaseDate={
              res.media_type == "movie" ? res.release_date : undefined
            }
            genres={res.genre_ids!}
            isInSearch={true}
            key={index}
          />
        )
      })
    )

  return (
    <>
    <title>Multi Search | Next Movie</title>
      <div className="relative h-[500px] slider active">
        <Image
          unoptimized
          src="/images/sherlock.jpg"
          fill
          alt=""
          className="object-cover brightness-50 object-top"
        />
      </div>
      <div className="relative flex justify-center">
        <input
          defaultValue={searchParam}
          placeholder="Type A Movie Or A Series Name"
          className="w-5/6 p-3 mt-7 rounded-md outline-none bg-default-100 border border-[#353535] placeholder-foreground-500 transition-all focus:border-stone-600"
          onInput={debounce(handleType, 1500)}
        />
      </div>
      {searchParam !== "" ? (
        <>
          <div className="flex flex-col lg:grid lg:grid-cols-3 xl:grid-cols-4 p-5 lg:px-28 lg:place-items-center lg:gap-32 min-h-max">
            {content}
          </div>
          {searchQuery.isFetching && (
            <div className="w-screen flex items-center justify-center h-40">
              <DotPulse />
            </div>
          )}
        </>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <p className="text-white text-4xl lg:text-6xl font-black text-center">
            Looking For Something?
            <br /> Search Your Movie or Series In SearchBox
          </p>
        </div>
      )}
      <div ref={ref}></div>
    </>
  )
}

export default Page