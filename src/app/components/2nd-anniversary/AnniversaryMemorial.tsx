"use client"
import { getSliderItems } from "@/app/utils/actions/getSingleData"
import { rubik, vazirMatn } from "@/app/utils/fonts"
import ResultComponent from "@/app/components/search/ResultComponent"
import TrendingCard from "@/app/components/sections/TodaysTrending/TrendingCard"
import { FilmIcon, TvIcon } from "@heroicons/react/24/solid"
import { Tabs } from "@heroui/react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { useMemo, useState } from "react"
import { useMediaQuery } from "usehooks-ts"

type Props = {
  listNumber: number
  name: string
  description?: string | null
}

const tabItems = [
  { id: "all", label: "All" },
  { id: "movie", label: "Movies" },
  { id: "tv", label: "Series" }
]

const AnniversaryMemorial = ({ listNumber, name, description }: Props) => {
  const [selectedTab, setSelectedTab] = useState("all")
  const isLarge = useMediaQuery("(min-width: 1024px)")

  const { data } = useSuspenseQuery({
    queryKey: ["slider" + listNumber],
    queryFn: () => getSliderItems(listNumber)
  })

  const filteredData = useMemo(() => {
    if (!data) return []

    return selectedTab === "all"
      ? data
      : data.filter((item: any) => item?.media_type === selectedTab)
  }, [data, selectedTab])

  return (
    <div className={`${rubik.className} mt-4 w-full`} dir="ltr">
      <p className="font-bold text-4xl text-[#00925daa] drop-shadow-[0_0_8px_#00925d]">{name}</p>

      <Tabs
        className="mt-6 w-max max-lg:w-full"
        selectedKey={selectedTab}
        onSelectionChange={(key) => setSelectedTab(String(key) as typeof selectedTab)}
        variant="secondary"
      >
        <Tabs.ListContainer>
          <Tabs.List aria-label="Content sections">
            {tabItems.map((tab) => (
              <Tabs.Tab id={tab.id} key={tab.id} className="w-max max-lg:w-full">
                <div className="flex items-center gap-2">
                  {tab.id === "movie" && <FilmIcon className="size-4" />}
                  {tab.id === "tv" && <TvIcon className="size-4" />}
                  {tab.label}
                </div>
                <Tabs.Indicator />
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs.ListContainer>
      </Tabs>

      <div className="mt-8 gap-4 w-full lg:grid lg:grid-cols-3 2xl:grid-cols-4 flex flex-col">
        {filteredData.length === 0 ? (
          <p className="font-bold">No items found.</p>
        ) : (
          filteredData.map((item: any) => {
            const mediaType = item?.media_type || "movie"
            const title = item?.title || item?.name || "Untitled"

            return isLarge ? (
              <TrendingCard
                key={item.id}
                type="search"
                id={Number(item.id)}
                mediaType={mediaType}
                posterPath={item.poster_path || item.poster || ""}
                title={title}
                genres={Array.isArray(item.genre_ids) ? item.genre_ids : []}
              />
            ) : (
              <ResultComponent
                key={item.id}
                isInSearch={true}
                id={Number(item.id)}
                mediaType={mediaType}
                posterPath={item.poster_path || item.poster || ""}
                title={title}
                genres={Array.isArray(item.genre_ids) ? item.genre_ids : []}
              />
            )
          })
        )}
      </div>
      {description && (
        <p className={`text-stone-400 mt-4 text-right ${vazirMatn.className}`} dir="rtl">توضیحات : {description}</p>
      )}
    </div>
  )
}

export default AnniversaryMemorial
