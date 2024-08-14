import CustomH1 from "@/app/components/other/CustomH1"
import Popular from "@/app/components/sections/PopularOfDay/Popular"
import PopularSkeleton from "@/app/components/sections/PopularOfDay/PopularSkeleton"
import WeekTrending from "@/app/components/sections/TodaysTrending/WeekTrending"
import WeekTrendingSkeleton from "@/app/components/sections/TodaysTrending/WeekTrendingSkeleton"
import SingleFetch from "@/app/components/singleFetch/SingleFetch"
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
      <Suspense fallback={<p>Loading</p>}>
        <SingleFetch />
      </Suspense>
    </main>
  )
}
export default page
