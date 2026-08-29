"use client"
import useMediaQuery from "@/app/utils/hooks/useMediaQuery"
import { FilmIcon, TvIcon } from "@heroicons/react/24/solid"
import { Tabs } from "@heroui/react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const AnniversaryMemorialSkeleton = () => {
  const tabItems = [
    { id: "all", label: "All" },
    { id: "movie", label: "Movies" },
    { id: "tv", label: "Series" }
  ]
  const isLarge = useMediaQuery("(min-width: 1024px)")
  return (
    <div className={"mt-4 w-full"} dir="ltr">
      <Skeleton
        width={200}
        height={40}
        baseColor="#7c7c7c"
        highlightColor="#8c8c8c"
        className="rounded-full"
      />
      <Tabs className="mt-6 w-max max-lg:w-full" variant="secondary">
        <Tabs.ListContainer>
          <Tabs.List aria-label="Content sections">
            {tabItems.map((tab) => (
              <Tabs.Tab
                id={tab.id}
                key={tab.id}
                className="w-max max-lg:w-full"
              >
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
        {isLarge ? (
          Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              width={310}
              height={465}
              borderRadius={12}
              baseColor="#7c7c7c"
              highlightColor="#8c8c8c"
              key={index}
            />
          ))
        ) : (
          Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              height={138}
              borderRadius={12}
              baseColor="#7c7c7c"
              highlightColor="#8c8c8c"
              key={index}
            />
          ))
        )}
      </div>
      <Skeleton
        width={200}
        height={24}
        baseColor="#7c7c7c"
        highlightColor="#8c8c8c"
        className="rounded-full"
      />
    </div>
  )
}
export default AnniversaryMemorialSkeleton
