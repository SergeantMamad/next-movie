"use client"
import { useState } from "react"
import SkeletonSearch from "./SkeletonSearch"
import React from "react"
import debounce from "debounce"
import { useInView } from "react-intersection-observer"
import TrendingCard from "../components/sections/TodaysTrending/TrendingCard"
import { useSearchInfiniteQuery } from "../utils/hooks/useSearchInfiniteQuery"
import { useSetParam } from "../utils/hooks/useSetParam"

const page = () => {
  const { ref, inView } = useInView()
  const [searchParam, setSearchParam] = useState("")

  const searchQuery = useSearchInfiniteQuery(searchParam, inView)
  useSetParam(searchParam)

  function handleType(e:any) {
    setSearchParam(e.target.value)
  }

  const content =
    searchQuery.data.pages[0] &&
    searchQuery.data.pages.map((page) =>
      page?.map((res, index) => {
        if (page.length == index + 1) {
          return res.vote_average == 0.0 ? null : (
            <TrendingCard
              isInSergeantMain={false}
              id={res.id}
              mediaType={res.media_type!}
              posterPath={res.poster_path!}
              title={res.title! || (res as any).name}
              voteAverage={res.vote_average}
            />
          )
        }
        return res.vote_average == 0.0 ? null : (
          <TrendingCard
            isInSergeantMain={false}
            id={res.id}
            mediaType={res.media_type!}
            posterPath={res.poster_path!}
            title={res.title! || (res as any).name}
            voteAverage={res.vote_average}
          />
        )
      })
    )

  return (
    <>
      <div className="relative flex justify-center">
        <input
          placeholder="Type A Movie Or A Series Name"
          className="w-2/3 mt-32 p-3 rounded-md outline-none bg-[#08070A] border border-[#353535] placeholder-gray-800 transition-all focus:border-white"
          onInput={debounce(handleType, 1500)}
        />
      </div>
      {searchParam !== "" ? (
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 px-28 items-center justify-center p-5 gap-32">
          {content}
          <div ref={ref}></div>
          {searchQuery.isFetching && (
            <>
              <SkeletonSearch />
            </>
          )}
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <p className="text-white text-6xl font-black text-center">
            Looking For Something?
            <br /> Search Your Movie or Series In SearchBox
          </p>
        </div>
      )}
    </>
  )
}

export default page
