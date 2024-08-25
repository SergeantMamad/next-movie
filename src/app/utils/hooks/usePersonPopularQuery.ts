import { useSuspenseInfiniteQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { getPopularPerson } from "../actions/getSingleData"

export function usePersonPopularQuery(inView: boolean,searchQuery:string) {
  const popularData = useSuspenseInfiniteQuery({
    queryKey: ["popularPeople"],
    queryFn: searchQuery == "" ? ({ pageParam }) => getPopularPerson(pageParam) : () => (null),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.length ? allPages.length + 1 : undefined
    },
  })
  useEffect(() => {
    if (inView && popularData.hasNextPage) {
      popularData.fetchNextPage()
    }
  }, [inView, popularData.fetchNextPage, popularData.hasNextPage, popularData])

  return popularData
}
