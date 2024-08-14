"use client"
import { DiscoverMain } from "@/action"
import { useSuspenseQuery } from "@tanstack/react-query"
import Image from "next/image"
import TopSellingCard from "./TopSellingCard"

const TopSellingSection = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["movie" + 7],
    queryFn: () =>
      DiscoverMain({
        cat: "movie",
        id: 7,
        filter: {
          primary_release_year: 2024,
          sort_by: "revenue.desc",
          "vote_count.gte": 500,
          with_origin_country: "US",
        },
      }),
  })
  return (
    <div className="flex justify-between mt-3">
      {data?.map(
        (res, index) =>
          index <= 2 && (
            <TopSellingCard backdropPath={res.backdrop_path!} overview={res.overview!} title={(res as any).title} id={res.id} key={index}/>
          )
      )}
    </div>
  )
}
export default TopSellingSection
