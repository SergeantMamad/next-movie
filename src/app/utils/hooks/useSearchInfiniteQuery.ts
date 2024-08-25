import { useInfiniteQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { getSearch } from "../actions/searchActions"

export function useSearchInfiniteQuery(searchParam: string, inView: boolean) {
  const searchQuery = useInfiniteQuery({
    queryKey: ["Searchall"],
    queryFn: ({ pageParam }) =>
      getSearch({
        value: searchParam,
        pageParam: pageParam,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.length ? allPages.length + 1 : undefined
    },
  })
  useEffect(() => {
    searchQuery.refetch()
  }, [searchParam])

  useEffect(() => {
    if (inView && searchQuery.hasNextPage) {
      searchQuery.fetchNextPage()
    }
  }, [inView, searchQuery.fetchNextPage, searchQuery.hasNextPage, searchQuery])

  return searchQuery
}
