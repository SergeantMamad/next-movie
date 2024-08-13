import CustomH1 from "@/app/components/other/CustomH1"
import Discover from "@/app/components/sections/Discover/DiscoverMain"
import DiscoverMainSkeleton from "@/app/components/sections/Discover/DiscoverMainSkeleton"
import Slider from "@/app/components/slider/Slider"
import TopSellingSection from "@/app/components/topSellingSection/TopSellingSection"
import { Suspense } from "react"

const page = () => {
  return (
    <main>
      <Slider listNumber={8309849} />
      <div className="p-12">
        <div className="flex justify-between">
          <CustomH1 title="Popular Movies OF 2024" />
          <button className="border border-white text-white px-6 text-sm font-bold py-3 rounded-xl flex gap-2 mt-20">
            Show More
          </button>
        </div>
        <Suspense fallback={<DiscoverMainSkeleton />}>
          <Discover
            id={4}
            cat="movie"
            filter={{
              sort_by: "vote_count.desc",
              primary_release_year: 2024,
              page: 1,
            }}
          />
        </Suspense>
        <div className="flex justify-between">
          <CustomH1 title="Best of Hollywood" />
          <button className="border border-white text-white px-6 text-sm font-bold py-3 rounded-xl flex gap-2 mt-20">
            Show More
          </button>
        </div>
        <Suspense fallback={<DiscoverMainSkeleton />}>
          <Discover
            id={5}
            cat="movie"
            filter={{
              sort_by:"vote_average.desc",
              "vote_count.gte":18000,
              with_origin_country:"US",
              page: 1,
            }}
          />
        </Suspense>
        <div className="flex justify-between">
          <CustomH1 title="Best Drama Movies From 2010s" />
          <button className="border border-white text-white px-6 text-sm font-bold py-3 rounded-xl flex gap-2 mt-20">
            Show More
          </button>
        </div>
        <Suspense fallback={<DiscoverMainSkeleton />}>
          <Discover
            id={6}
            cat="movie"
            filter={{
              "primary_release_date.gte":"2010-01-01",
              "primary_release_date.lte":"2019-12-30",
              sort_by:"vote_average.desc",
              with_genres:"18",
              "vote_count.gte":13000,
              with_origin_country:"US",
              page: 1,
            }}
          />
        </Suspense>
        <CustomH1 title="Three Best Selling Movies Of 2024" />
        <TopSellingSection />
      </div>
    </main>
  )
}
export default page
