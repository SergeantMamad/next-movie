"use client"
import { getSeason, getSeries } from "@/action"
import Casts from "@/app/components/casts/Casts"
import NotFound from "@/app/not-found"
import CastsSkeleton from "@/app/components/casts/CastsSkeleton"
import Episodes from "@/app/components/episodes/Episodes"
import EpisodesSkeleton from "@/app/components/episodes/EpisodesSkeleton"
import MainImages from "@/app/components/mainImages/MainImages"
import MainImagesSekelton from "@/app/components/mainImages/MainImagesSekelton"
import Videos from "@/app/components/videos/Videos"
import VideosSkeleton from "@/app/components/videos/VideosSkeleton"
import { select, Select, SelectItem } from "@nextui-org/react"
import { useSuspenseQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { Suspense, useEffect, useState } from "react"
import HeaderImage from "@/app/components/DetailPageComponents/HeaderImage"
import SelectBox from "@/app/components/seriesPageComponent/SelectBox"
import TabItems from "@/app/components/DetailPageComponents/TabItems"
import { useRouteToSeason } from "@/app/utils/hooks/useRouteToSeason"

const Page = ({
  params: { id, season },
}: {
  params: {
    id: number
    season: number
  }
}) => {
  let seasons = []
  const episodeData = useSuspenseQuery({
    queryKey: [id + season + "episode"],
    queryFn: () =>
      getSeason({
        id,
        season,
      }),
  })
  const seasonData = useSuspenseQuery({
    queryKey: ["tv" + id],
    queryFn: () => getSeries(id),
  })
  if (!seasonData.data || !episodeData.data) {
    return <NotFound />
  } else {
    for (let i = 1; i <= seasonData.data.number_of_seasons; i++) {
      seasons.push(i)
    }
  }
  const [tabItem, setTabItem] = useState("Episodes")
  const [currentSeason, setCurrentSeason] = useState({
    selected: false,
    season: season.toString(),
  })
  useRouteToSeason(id, currentSeason.season, currentSeason.selected)
  return (
    <div>
      <title>
        {seasonData.data.name} Season {season}
      </title>
      <HeaderImage
        backdropPath={episodeData.data.episodes![0].still_path!}
        genres={seasonData.data.genres!}
        isTvSeason={true}
        isTvSeries={true}
        firstAirDate={episodeData.data.air_date}
        title={`${seasonData.data.name} Season ${season}`}
        numberOfEpisodes={episodeData.data.episodes?.length}
      />
      <div className="p-12">
        <div>
          <h1 className="text-white text-lg font-semibold">Overview</h1>
          <p className="text-[#9CA4AB] mt-3">
            {episodeData.data.overview != ""
              ? episodeData.data.overview
              : seasonData.data.overview}
          </p>
        </div>
        <div className="mt-5">
          <h1 className="text-white text-lg font-semibold">Top Cast</h1>
          <Suspense fallback={<CastsSkeleton />}>
            <Casts type="TvSeason" id={id} season={season} />
          </Suspense>
        </div>
        <TabItems
          tabItems={["Episodes", "Pictures", "Videos"]}
          item={tabItem}
          setItem={setTabItem}
        />
        <div
          className={`relative ${tabItem === "Episodes" ? `block` : `hidden`}`}
        >
          <SelectBox
            className="static ml-auto"
            season={currentSeason.season}
            seasons={seasons}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setCurrentSeason({
                season: e.target.value,
                selected: true,
              })
            }
          />
          <Suspense fallback={<EpisodesSkeleton />}>
            <Episodes episodes={episodeData.data.episodes!} />
          </Suspense>
        </div>
        <div className={tabItem === "Pictures" ? "block" : "hidden"}>
          <Suspense fallback={<MainImagesSekelton />}>
            <MainImages type="TvSeason" id={id} season={season} />
          </Suspense>
        </div>
        <div className={tabItem === "Videos" ? "block" : "hidden"}>
          <Suspense fallback={<VideosSkeleton />}>
            <Videos type="TvSeason" id={id} season={season} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Page
