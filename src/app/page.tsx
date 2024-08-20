import { Suspense } from "react"
import TodayTrending from "./components/sections/TodaysTrending/WeekTrending"
import SergeantMain from "./components/sections/SergeantMain/SergeantMain"
import Discover from "./components/sections/Discover/DiscoverMain"
import DiscoverMainSkeleton from "./components/sections/Discover/DiscoverMainSkeleton"
import TopImdbMain from "./components/sections/TopImdb/TopImdbMain"
import UpTop from "./components/sections/UpTop/UpTop"
import UpTopSkeleton from "./components/sections/UpTop/UpTopSkeleton"
import TopImdbSkeleton from "./components/sections/TopImdb/TopImdbSkeleton"
import Slider from "./components/slider/Slider"
import CustomH1 from "./components/other/CustomH1"
import SliderSkeleton from "./components/slider/SliderSkeleton"
import PopularSkeleton from "./components/sections/PopularOfDay/PopularSkeleton"
import Popular from "./components/sections/PopularOfDay/Popular"
import WeekTrendingSkeleton from "./components/sections/TodaysTrending/WeekTrendingSkeleton"
import WeekTrending from "./components/sections/TodaysTrending/WeekTrending"
export default async function Home() {
  return (
    <>
      <main>
        <div>
          <Suspense fallback={<SliderSkeleton />}>
            <Slider listNumber={8309819} />
          </Suspense>
        </div>
        <div className="p-6 xl:p-12">
          <CustomH1 title="This Week's Trending" />
          <Suspense fallback={<WeekTrendingSkeleton />}>
            <WeekTrending cat="all" />
          </Suspense>
          <div className="flex justify-between">
            <CustomH1 title="Popular Movie's Of The Day" />
            <button className="border border-white text-white px-6 text-sm font-bold py-3 rounded-xl flex gap-2 mt-20">
              Show More
            </button>
          </div>
          <Suspense fallback={<PopularSkeleton />}>
            <Popular cat="movie" />
          </Suspense>
        </div>
        <div className="mt-10">
          <Suspense fallback={<SliderSkeleton />}>
            <SergeantMain listNumber={8309843} />
          </Suspense>
        </div>
        <div className="p-6 xl:p-12">
          <div className="flex justify-between">
            <CustomH1 title="Movies" />
            <button className="border border-white text-white px-6 text-sm font-bold py-3 rounded-xl flex gap-2 mt-20">
              Show More
            </button>
          </div>
          <Suspense fallback={<DiscoverMainSkeleton />}>
            <Discover
              id={0}
              cat="movie"
              filter={{
                sort_by: "vote_count.desc",
                primary_release_year: 2024,
                page: 1,
              }}
            />
          </Suspense>
          <div className="flex justify-between">
            <CustomH1 title="TV Series" />
            <button className="border border-white text-white px-6 text-sm font-bold py-3 rounded-xl flex gap-2 mt-20">
              Show More
            </button>
          </div>
          <Suspense fallback={<DiscoverMainSkeleton />}>
            <Discover
              cat="tv"
              id={1}
              filter={{
                include_null_first_air_dates: false,
                page: 1,
                sort_by: "vote_count.desc",
              }}
            />
          </Suspense>
          <div className="flex justify-between">
            <CustomH1 title="Anime" />
            <button className="border border-white text-white px-6 text-sm font-bold py-3 rounded-xl flex gap-2 mt-20">
              Show More
            </button>
          </div>
          <Suspense fallback={<DiscoverMainSkeleton />}>
            <Discover
              id={2}
              cat="tv"
              filter={{
                include_adult: false,
                include_null_first_air_dates: false,
                language: "en-US",
                page: 1,
                with_genres: "16",
                sort_by: "vote_count.desc",
                with_origin_country: "JP",
              }}
            />
          </Suspense>
          <div className="flex flex-col xl:flex-row justify-between">
            <div>
              <CustomH1 title="Top IMDB Movies" />
              <Suspense fallback={<TopImdbSkeleton />}>
                <TopImdbMain />
              </Suspense>
            </div>
            <div>
              <CustomH1 title="Top Selling" />
              <Suspense fallback={<UpTopSkeleton />}>
                <UpTop cat="Top" />
              </Suspense>
            </div>
            <div>
              <CustomH1 title="UP Coming" />
              <Suspense fallback={<UpTopSkeleton />}>
                <UpTop cat="Up" />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
