"use client"
import React, { useRef } from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { TodayPopular } from "@/action"
import MoviePopularCard from "./MoviePopularCard"
import ScrollButtons from "../../cartGeneral/ScrollButtons"

const MoviePopular = () => {
  const divRef = useRef<HTMLDivElement>(null)
  const { data } = useSuspenseQuery({
    queryKey: ["todayPopular"],
    queryFn: TodayPopular,
  })
  return (
    <div className="relative">
      <ScrollButtons ref={divRef} value={310} />
      <div className="flex mt-10 gap-4 overflow-hidden scroll-smooth Card-Popular" ref={divRef}>
        {data?.map((res, index) => (
          <MoviePopularCard
            id={res.id}
            index={index}
            title={res.title!}
            posterPath={res.poster_path!}
            mediaType="Movie"
            voteAverage={res.vote_average}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default MoviePopular
