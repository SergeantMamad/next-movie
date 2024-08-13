import { Suspense } from "react"
import TodayTrending from "./components/sections/TodaysTrending/TodayTrending"
import TodaysTrendingSkeleton from "./components/sections/TodaysTrending/TodaysTrendingSkeleton"
import MoviePopular from "./components/sections/PopularMovieOfDay/MoviePopular"
import MoviePopularSkeleton from "./components/sections/PopularMovieOfDay/MoviePopularSkeleton"
import SergeantMain from "./components/sections/SergeantMain/SergeantMain"
import Discover from "./components/sections/Discover/DiscoverMain"
import DiscoverMainSkeleton from "./components/sections/Discover/DiscoverMainSkeleton"
import TopImdbMain from "./components/sections/TopImdb/TopImdbMain"
import UpTop from "./components/sections/UpTop/UpTop"
import UpTopSkeleton from "./components/sections/UpTop/UpTopSkeleton"
import TopImdbSkeleton from "./components/sections/TopImdb/TopImdbSkeleton"
import Slider from "./components/slider/Slider"
import CustomH1 from "./components/other/CustomH1"
export default async function Home() {
  return (
    <>
      <main>
        <div>
          <Slider listNumber={8309819} />
        </div>
        <div className="p-12">
          <CustomH1 title="Today's Trending" />
          <Suspense fallback={<TodaysTrendingSkeleton />}>
            <TodayTrending />
          </Suspense>
          <div className="flex justify-between">
            <CustomH1 title="Popular Movie's Of The Day" />
            <button className="border border-white text-white px-6 text-sm font-bold py-3 rounded-xl flex gap-2 mt-20">
              Show More
            </button>
          </div>
          <Suspense fallback={<MoviePopularSkeleton />}>
            <MoviePopular />
          </Suspense>
        </div>
        <div className="mt-10">
          <SergeantMain listNumber={8309843} />
        </div>
        <div className="p-12">
          <div className="flex justify-between">
            <CustomH1 title="Movies" />
            <button className="border border-white text-white px-6 text-sm font-bold py-3 rounded-xl flex gap-2 mt-20">
              Show More
            </button>
          </div>
          <Suspense fallback={<DiscoverMainSkeleton />}>
            <Discover id={0} cat="movie" filter={{
              sort_by: "vote_count.desc",
              primary_release_year:2024,
              page:1
            }} />
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
          <div className="flex justify-between">
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
