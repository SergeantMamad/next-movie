"use client"
import { useRef } from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { categoris, DiscoverMain } from "@/action"
import ScrollButtons from "../../cartGeneral/ScrollButtons"
import DiscoverMainCard from "./DiscoverMainCard"
import { operations } from "../../../../../schema"
type DiscoverProps = {
  cat: categoris
  id: number
  filter: operations["discover-movie"]['parameters']['query'] | operations['discover-tv']['parameters']['query'] | null
}
const Discover = ({ cat, id, filter }: DiscoverProps) => {
  const divRef = useRef<HTMLDivElement>(null)
  const { data } = useSuspenseQuery({
    queryKey: [cat + id],
    queryFn: () =>
      DiscoverMain({
        cat,
        id ,
        filter
      }),
  })
  if (data?.length == 0) {
    return (
      <div className="flex h-[220px] items-center justify-center">
        <p className="text-white text-3xl font-semibold">
          We currently dont have anything for you :({" "}
        </p>
      </div>
    )
  }
  return (
    <div className="relative">
      <ScrollButtons ref={divRef} value={315} />
      <div
        className="flex mt-4 gap-4 overflow-hidden scroll-smooth"
        ref={divRef}
      >
        {data?.map((res, index) => (
          <DiscoverMainCard
            id={res.id}
            cat={cat}
            title={(res as any).title || (res as any).name}
            backdropPath={res.backdrop_path!}
            voteAverage={res.vote_average}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Discover
