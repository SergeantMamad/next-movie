"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import { updateQueryParams } from "../../utils/functions/updateQueryParams"
import useDebounce from "../../utils/hooks/useDebounce"
import { checkIfObjectHasValue } from "../../utils/functions/checkIfObjectHasValue"
import AccordionAdvanced from "../../components/advancedsearch/AccordionAdvanced"
import { useDiscoverInfiniteQuery } from "../../utils/hooks/useDiscoverInfiniteQuery"
import DotPulse from "../../components/loader/DotPulse"
import ResultComponent from "../../components/search/ResultComponent"
import TrendingCard from "../../components/sections/TodaysTrending/TrendingCard"
import useOnScreen from "../../utils/hooks/useOnScreen"
import { useDisclosure } from "@nextui-org/react"
import useMediaQuery from "../../utils/hooks/useMediaQuery"
import { FunnelIcon } from "@heroicons/react/24/outline"
import FilterModal from "../../components/modals/FilterModal"
import SortItems from "../../components/advancedsearch/SortItems"
import AdvancedDescription from "../../components/advancedsearch/AdvancedDescription"
import NotFound from "@/app/not-found"

export type filter = {
  title: string
  genres: string[]
  releaseDate: string[]
  country: string[]
  voteCount: string[]
  ratings: string[]
  runtime: string[]
  sortBy:
    | "original_title.asc"
    | "original_title.desc"
    | "popularity.asc"
    | "popularity.desc"
    | "revenue.asc"
    | "revenue.desc"
    | "primary_release_date.asc"
    | "title.asc"
    | "title.desc"
    | "primary_release_date.desc"
    | "vote_average.asc"
    | "vote_average.desc"
    | "vote_count.asc"
    | "vote_count.desc"
    | string
}

const Page = ({
  params: { category },
}: {
  params: {
    category: "movie" | "tv"
  }
}) => {
  const params = useSearchParams()
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref)
  const isLarge = useMediaQuery("(min-width: 1024px)")
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [filter, setFilter] = useState<filter>({
    title: params.get("title") || "",
    genres: params.get("genres")?.split("-") || [],
    releaseDate: params.get("releaseDate")?.split("_") || [],
    country: params.get("country")?.split("-") || [],
    voteCount: params.get("voteCount")?.split("-") || [],
    ratings: params.get("ratings")?.split("-") || [],
    runtime: params.get("runtime")?.split("-") || [],
    sortBy: params.get("sortBy") || "",
  })
  const debouncedQuery = useDebounce(filter, 1000)
  useEffect(() => {
    updateQueryParams({
      title: debouncedQuery.title || null,
      genres:
        debouncedQuery.genres.length > 0
          ? debouncedQuery.genres.join("-")
          : null,
      releaseDate:
        debouncedQuery.releaseDate.length > 0
          ? debouncedQuery.releaseDate.join("_")
          : null,
      country:
        debouncedQuery.country.length > 0
          ? debouncedQuery.country.join("-")
          : null,
      voteCount:
        debouncedQuery.voteCount.length > 0
          ? debouncedQuery.voteCount.join("-")
          : null,
      ratings:
        debouncedQuery.ratings.length > 0
          ? debouncedQuery.ratings.join("-")
          : null,
      runtime:
        debouncedQuery.runtime.length > 0
          ? debouncedQuery.runtime.join("-")
          : null,
      sortBy: debouncedQuery.sortBy ? debouncedQuery.sortBy : null,
    })
  }, [debouncedQuery])
  const searchQuery = useDiscoverInfiniteQuery(
    debouncedQuery,
    isVisible,
    category
  )
  if (category != "movie" && category != "tv") {
    return <NotFound />
  }
  return (
    <main>
      <title>Advanced Search | Next Movie</title>
      <div className="relative h-[400px] slider active">
        <Image
          unoptimized
          src="/images/BackImage2.jpg"
          fill
          alt=""
          className="object-cover brightness-50"
        />
      </div>
      <div className="flex flex-col lg:flex-row px-6 lg:px-12 gap-7 mt-10">
        <AccordionAdvanced
          filter={filter}
          setFilter={setFilter}
          category={category}
        />
        <div className="w-full">
          <div className="flex justify-between lg:justify-end w-full gap-3">
            <FunnelIcon
              onClick={onOpen}
              className="mb-8 text-white w-7 h-7 block lg:hidden"
            />
            <FilterModal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              filter={filter}
              setFilter={setFilter}
            />
            <SortItems
              category={category}
              filter={filter}
              setFilter={setFilter}
            />
          </div>
          {checkIfObjectHasValue(debouncedQuery) ? (
            <>
              <div className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full gap-x-20 gap-y-10 min-h-screen mt-3">
                {searchQuery?.data?.pages[0] &&
                  searchQuery.data.pages.map((page) =>
                    page?.map((res, index) => {
                      return isLarge ? (
                        <TrendingCard
                          type="search"
                          id={res.id}
                          mediaType={"movie"}
                          posterPath={res.poster_path!}
                          title={(res as any).title! || (res as any).name}
                          voteAverage={res.vote_average}
                          genres={res.genre_ids!}
                          key={index}
                        />
                      ) : (
                        <ResultComponent
                          id={res.id}
                          mediaType={"movie"}
                          posterPath={res.poster_path!}
                          title={(res as any).name || (res as any).title!}
                          voteAverage={res.vote_average}
                          releaseDate={(res as any).release_date}
                          genres={res.genre_ids!}
                          isInSearch={true}
                          key={index}
                        />
                      )
                    })
                  )}
                {searchQuery.data?.pages[0]?.length == 0 && (
                  <p className="col-span-4 text-4xl mx-auto font-bold text-white h-screen flex items-center text-center">
                    There is no resault match with your serach parameters
                  </p>
                )}
              </div>
            </>
          ) : (
            <AdvancedDescription category={category} />
          )}
        </div>
      </div>
      {searchQuery.isFetching && (
        <div className="w-screen flex items-center justify-center h-40">
          <DotPulse />
        </div>
      )}

      <div ref={ref}></div>
    </main>
  )
}
export default Page