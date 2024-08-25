"use client"
import { useSuspenseQuery } from "@tanstack/react-query"
import TopSellingCard from "./TopSellingCard"
import { getDiscover } from "@/app/utils/actions/sectionsAuction"

const TopSellingSection = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["movie" + 7],
    queryFn: () =>
      getDiscover({
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
    <div className="flex-col xl:flex-row flex justify-between mt-3 gap-5">
      {data?.map(
        (res, index) =>
          index <= 2 && (
            <TopSellingCard
              genres={res.genre_ids!}
              posterPath={res.poster_path!}
              backdropPath={res.backdrop_path!}
              overview={res.overview!}
              title={(res as any).title}
              id={res.id}
              key={index}
            />
          )
      )}
    </div>
  )
}
export default TopSellingSection
