import { Suspense } from "react";
import TodayTrending from "./components/sections/TodaysTrending/TodayTrending";
import TodaysTrendingSkeleton from "./components/sections/TodaysTrending/TodaysTrendingSkeleton";
import MoviePopular from "./components/sections/PopularMovieOfDay/MoviePopular";
import MoviePopularSkeleton from "./components/sections/PopularMovieOfDay/MoviePopularSkeleton";
import SergeantMain from "./components/sections/SergeantMain/SergeantMain";
import Discover from "./components/sections/Discover/DiscoverMain";
import DiscoverMainSkeleton from "./components/sections/Discover/DiscoverMainSkeleton";
import TopImdbMain from "./components/sections/TopImdb/TopImdbMain";
import UpTop from "./components/sections/UpTop/UpTop";
import UpTopSkeleton from "./components/sections/UpTop/UpTopSkeleton";
import TopImdbSkeleton from "./components/sections/TopImdb/TopImdbSkeleton";
import Slider from "./components/slider/slider";
export default async function Home() {
  return (
    <>
      <div>
      <Slider />
      </div>
      <main>
        <div className="p-12">
          <h1 className="text-white text-2xl font-bold">Today's Trending</h1>
          <Suspense fallback={<TodaysTrendingSkeleton />}>
            <TodayTrending />
          </Suspense>
          <div className="flex justify-between">
            <h1 className="text-white text-2xl font-bold mt-20">
              Popular Movie's Of The Day
            </h1>
            <button className="border border-white text-white px-6 text-sm font-bold py-3 rounded-xl flex gap-2 mt-20">
              Show More
            </button>
          </div>
          <Suspense fallback={<MoviePopularSkeleton />}>
            <MoviePopular />
          </Suspense>
        </div>
        <div className="mt-10">
          <SergeantMain />
        </div>
        <div className="p-12">
          <div className="flex justify-between">
            <h1 className="text-white text-2xl font-bold mt-20">Movies</h1>
            <button className="border border-white text-white px-6 text-sm font-bold py-3 rounded-xl flex gap-2 mt-20">
              Show More
            </button>
          </div>
          <Suspense fallback={<DiscoverMainSkeleton />}>
            <Discover cat="movie" />
          </Suspense>
          <div className="flex justify-between">
            <h1 className="text-white text-2xl font-bold mt-20">Tv Series</h1>
            <button className="border border-white text-white px-6 text-sm font-bold py-3 rounded-xl flex gap-2 mt-20">
              Show More
            </button>
          </div>
          <Suspense fallback={<DiscoverMainSkeleton />}>
            <Discover cat="tv" />
          </Suspense>
          <div className="flex justify-between">
            <h1 className="text-white text-2xl font-bold mt-20">Anime</h1>
            <button className="border border-white text-white px-6 text-sm font-bold py-3 rounded-xl flex gap-2 mt-20">
              Show More
            </button>
          </div>
          <Suspense fallback={<DiscoverMainSkeleton />}>
            <Discover cat="anime" />
          </Suspense>
          <div className="flex justify-between">
            <div>
            <h1 className="text-white text-2xl font-bold mt-20">Top IMDB Movies</h1>
            <Suspense fallback={<TopImdbSkeleton />} >
            <TopImdbMain />
            </Suspense>
            </div>
            <div>
              <h1 className="text-white text-2xl font-bold mt-20">Top Selling</h1>
              <Suspense fallback={<UpTopSkeleton />}>
              <UpTop cat="Top" />
              </Suspense>
            </div>
            <div>
              <h1 className="text-white text-2xl font-bold mt-20">Up Coming</h1>
              <Suspense fallback={<UpTopSkeleton />}>
              <UpTop cat="Up" />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
