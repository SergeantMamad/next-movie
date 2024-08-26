import { filter } from "@/app/advancedsearch/[category]/page"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { checkIfObjectHasValue } from "../functions/checkIfObjectHasValue"
import { getDiscover } from "../actions/sectionsAuction"

export function useDiscoverInfiniteQuery(filter: filter, inView: boolean,category:"movie" | "tv") {
  const searchQuery = useInfiniteQuery({
    queryKey: ["discover" + category + filter],
    queryFn: ({ pageParam }) =>
      checkIfObjectHasValue(filter)
        ? getDiscover({
            cat: category,
            id: 0,
            filter: {
              "primary_release_date.gte": filter.releaseDate[0] || undefined,
              "primary_release_date.lte": filter.releaseDate[1] || undefined,
              "first_air_date.gte":filter.releaseDate[0] || undefined,
              "first_air_date.lte":filter.releaseDate[1] || undefined,
              "vote_count.gte": parseInt(filter.voteCount[0]) || undefined,
              "vote_count.lte": parseInt(filter.voteCount[1]) || undefined,
              "vote_average.gte":parseInt(filter.ratings[0])|| undefined,
              "vote_average.lte": parseInt(filter.ratings[1]) || undefined,
              "with_runtime.gte": parseInt(filter.runtime[0]) || undefined,
              "with_runtime.lte": parseInt(filter.runtime[1]) || undefined,
              include_adult:false,
              with_origin_country: filter.country.join('|'),
              with_genres: filter.genres.join("|") || undefined,
              "certification.lte":"R",
              ["with_text_query" as any]: filter.title,
              sort_by: filter.sortBy as any,
              page: pageParam,
            },
          })
        : null,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.length ? allPages.length + 1 : undefined
    },
  })
  useEffect(() => {
    searchQuery.refetch()
  }, [filter,searchQuery.refetch])

  useEffect(() => {
    if (inView && searchQuery.hasNextPage) {
      searchQuery.fetchNextPage()
    }
  }, [inView, searchQuery.fetchNextPage, searchQuery.hasNextPage, searchQuery])

  return searchQuery
}
