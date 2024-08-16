import RecommendationImageSkeleton from "@/app/components/categoryRecommendation/RecommendationImageSkeleton"
import Recommendations from "@/app/components/categoryRecommendation/Recommendations"
import CustomH1 from "@/app/components/other/CustomH1"
import Discover from "@/app/components/sections/Discover/DiscoverMain"
import DiscoverMainSkeleton from "@/app/components/sections/Discover/DiscoverMainSkeleton"
import Popular from "@/app/components/sections/PopularOfDay/Popular"
import PopularSkeleton from "@/app/components/sections/PopularOfDay/PopularSkeleton"
import WeekTrending from "@/app/components/sections/TodaysTrending/WeekTrending"
import WeekTrendingSkeleton from "@/app/components/sections/TodaysTrending/WeekTrendingSkeleton"
import SingleFetch from "@/app/components/singleFetch/SingleFetch"
import SingleFetchSkeleton from "@/app/components/singleFetch/SingleFetchSkeleton"
import Slider from "@/app/components/slider/Slider"
import SliderSkeleton from "@/app/components/slider/SliderSkeleton"
import { Suspense } from "react"

const page = () => {
  return (
    <main>
      <Suspense fallback={<SliderSkeleton />}>
        <Slider listNumber={8309952} />
      </Suspense>
      <div className="p-12">
        <CustomH1 title="Popular Series Of This Week" />
        <Suspense fallback={<PopularSkeleton />}>
          <Popular cat="tv" />
        </Suspense>
        <CustomH1 title="Trending Series This Week" />
        <Suspense fallback={<WeekTrendingSkeleton />}>
          <WeekTrending cat="tv" />
        </Suspense>
      </div>
      <Suspense fallback={<SingleFetchSkeleton />}>
        <SingleFetch />
      </Suspense>
      <div className="p-12">
        <div className="flex justify-between">
          <CustomH1 title="Best Shows From 2000s" />
          <button className="border border-white text-white px-6 text-sm font-bold py-3 rounded-xl flex gap-2 mt-20">
            Show More
          </button>
        </div>
        <Suspense fallback={<DiscoverMainSkeleton />}>
          <Discover
            id={9}
            cat="tv"
            filter={{
              "first_air_date.gte": "2000-01-01",
              "first_air_date.lte": "2009-12-30",
              sort_by:"first_air_date.desc" ,
              "vote_count.gte": 4000,
              with_origin_country: "US",
              page: 1,
            }}
          />
        </Suspense>
        <div className="flex justify-between">
          <CustomH1 title="Category: Crime & Drama" />
          <button className="border border-white text-white px-6 text-sm font-bold py-3 rounded-xl flex gap-2 mt-20">
            Show More
          </button>
        </div>
        <Suspense fallback={<DiscoverMainSkeleton />}>
          <Discover
            id={10}
            cat="tv"
            filter={{
              "vote_count.gte":1500,
              "vote_average.gte":8,
              sort_by:"vote_average.desc",
              with_genres: '18,80',
              with_origin_country: "US",
              page: 1,
            }}
          />
        </Suspense>
        <div className="flex justify-between">
          <CustomH1 title="Best OF JP" />
          <button className="border border-white text-white px-6 text-sm font-bold py-3 rounded-xl flex gap-2 mt-20">
            Show More
          </button>
        </div>
        <Suspense fallback={<DiscoverMainSkeleton />}>
          <Discover
            id={11}
            cat="tv"
            filter={{
              "vote_average.gte":8,
              sort_by:"vote_count.desc",
              with_origin_country: "JP",
              page: 1,
            }}
          />
        </Suspense>
      </div>
      <Suspense fallback={<RecommendationImageSkeleton />}>
        <Recommendations mainCategory="tv" />
      </Suspense>
    </main>
  )
}
export default page
