"use client"
import { DiscoverMain } from "@/action"
import { useSuspenseQuery } from "@tanstack/react-query"
import Image from "next/image"

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
            <div className="w-[32%] h-[350px] relative">
              <Image
                src={`https://image.tmdb.org/t/p/w780${res.backdrop_path}`}
                className="object-cover rounded-lg brightness-50"
                fill
                alt=""
              />
              <div className="absolute flex flex-col pl-5 bottom-3 gap-2">
                <p className="text-3xl font-bold">{(res as any).title}</p>
                <p className="text-xs font-semibold">{res.overview}</p>
              </div>
            </div>
          )
      )}
    </div>
  )
}
export default TopSellingSection
