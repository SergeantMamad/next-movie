"use client"
import React, { useRef } from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { TodayPopular } from "@/action"
import PopularCard from "./PopularCard"
import ScrollButtons from "../../cartGeneral/ScrollButtons"

const Popular = ({cat}:{
  cat:"movie" | "tv"
}) => {
  const divRef = useRef<HTMLDivElement>(null)
  const { data } = useSuspenseQuery({
    queryKey: ["todayPopular"],
    queryFn: () =>TodayPopular(cat),
  })
  return (
    <div className="relative">
      <ScrollButtons ref={divRef} value={310} />
      <div className="flex mt-10 gap-4 overflow-hidden scroll-smooth Card-Popular" ref={divRef}>
        {data?.map((res, index) => (
          <PopularCard
            id={res.id}
            index={index}
            title={(res as any).title! || (res as any).name!}
            posterPath={res.poster_path!}
            mediaType={cat}
            voteAverage={res.vote_average}
            key={index}
            genres={res.genre_ids!}
          />
        ))}
      </div>
    </div>
  )
}

export default Popular
