"use client"
import Image from "next/image"
import { useSuspenseQuery } from "@tanstack/react-query"
import { createRef, Suspense, useEffect, useState } from "react"
import { getSeries } from "@/action"
import Link from "next/link"
import { BookmarkIcon } from "@heroicons/react/24/outline"
import CastsSkeleton from "@/app/components/casts/CastsSkeleton"
import Casts from "@/app/components/casts/Casts"
import styled from "styled-components"
import MainImagesSekelton from "@/app/components/mainImages/MainImagesSekelton"
import VideosSkeleton from "@/app/components/videos/VideosSkeleton"
import MainImages from "@/app/components/mainImages/MainImages"
import Videos from "@/app/components/videos/Videos"
import { Select, SelectItem } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import Discover from "@/app/components/sections/Discover/DiscoverMain"
import DiscoverMainSkeleton from "@/app/components/sections/Discover/DiscoverMainSkeleton"
import NotFound from "../../not-found"
import HeaderImage from "@/app/components/DetailPageComponents/HeaderImage"
import SelectBox from "@/app/components/seriesPageComponent/SelectBox"
import TabItems from "@/app/components/DetailPageComponents/TabItems"
import { useRouteToSeason } from "@/app/utils/hooks/useRouteToSeason"

const page = ({
  params: { id },
}: {
  params: {
    id: number
  }
}) => {
  let seasons = []
  const { data } = useSuspenseQuery({
    queryKey: ["tv" + id],
    queryFn: () => getSeries(id),
  })
  if (!data) {
    return <NotFound />
  } else {
    for (let i = 1; i <= data.number_of_seasons; i++) {
      seasons.push(i)
    }
  }

  const [tabItem, setTabItem] = useState("Seasons")
  const [season, setSeason] = useState("")
  useRouteToSeason(id, season)

  return (
    <div>
      <title>{data.name}</title>
      <HeaderImage
        backdropPath={data.backdrop_path!}
        genres={data.genres!}
        isTvSeason={false}
        isTvSeries={true}
        title={data.original_name!}
        firstAirDate={data.first_air_date}
        numberOfSeasons={data.number_of_seasons}
      />
      <div className="p-12">
        <div>
          <h1 className="text-white text-lg font-semibold">Overview</h1>
          <p className="text-[#9CA4AB] mt-3">{data.overview}</p>
        </div>
        <div className="mt-5">
          <h1 className="text-white text-lg font-semibold">Top Cast</h1>
          <Suspense fallback={<CastsSkeleton />}>
            <Casts type="tv" id={id} season={0} />
          </Suspense>
        </div>
        <TabItems
          tabItems={["Seasons", "Pictures", "Videos"]}
          item={tabItem}
          setItem={setTabItem}
        />
        <div
          className={`relative flex h-[240px] items-center justify-center ${
            tabItem === "Seasons" ? `block` : `hidden`
          }`}
        >
          <SelectBox
            season={season}
            seasons={seasons}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSeason(e.target.value)
            }
          />
          <p className="text-white text-3xl font-semibold">Select A Season</p>
        </div>
        <div className={tabItem === "Pictures" ? "block" : "hidden"}>
          <Suspense fallback={<MainImagesSekelton />}>
            <MainImages type="tv" id={id} season={0} />
          </Suspense>
        </div>
        <div className={tabItem === "Videos" ? "block" : "hidden"}>
          <Suspense fallback={<VideosSkeleton />}>
            <Videos type="tv" id={id} season={0} />
          </Suspense>
        </div>
      </div>
      <div className="border-t border-gray-700 p-0"></div>
      <div className="p-12">
        <div>
          <h1 className="text-white text-2xl font-bold">Similar TV Series</h1>
          <Suspense fallback={<DiscoverMainSkeleton />}>
            <Discover cat="SimilarTv" id={id} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default page
