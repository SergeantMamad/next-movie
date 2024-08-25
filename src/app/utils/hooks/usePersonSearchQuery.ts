import { useInfiniteQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { getPersonSearch } from "../actions/searchActions"

export function usePersonSearchQuery(searchQuery: string, inView: boolean) {
  const personData = useInfiniteQuery({
    queryKey: ["searchPeople"+searchQuery],
    queryFn: ({ pageParam }) => getPersonSearch(searchQuery,pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.length ? allPages.length + 1 : undefined
    },
  })
  useEffect(() => {
    personData.refetch()
  }, [searchQuery])
  useEffect(() => {
    if (inView && personData.hasNextPage) {
        personData.fetchNextPage()
    }
  }, [inView, personData.fetchNextPage, personData.hasNextPage])

  return personData
}
