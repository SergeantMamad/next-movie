import { Tab, Tabs } from "@nextui-org/react"
import SelectBox from "../seriesPageComponent/SelectBox"
import MainImages from "../mainImages/MainImages"
import { Suspense } from "react"
import MainImagesSekelton from "../mainImages/MainImagesSekelton"
import Videos from "../videos/Videos"
import VideosSkeleton from "../videos/VideosSkeleton"
import MoreInfo from "../moviePageComponents/MoreInfo"
import EpisodesSkeleton from "../episodes/EpisodesSkeleton"
import Episodes from "../episodes/Episodes"
import { operations } from "../../../../schema"

type TabItemsProps = {
  tabItems: string[]
  setItem: React.Dispatch<React.SetStateAction<string>>
  item: string
  season?: string
  seasons?: any[]
  setSeason?: React.Dispatch<React.SetStateAction<string>>
  setCurrentSeason?:React.Dispatch<React.SetStateAction<{
    selected: boolean;
    season: string;
}>>
  id: number
  mediaType: "tv" | "movie" | "TvSeason"
  moreInfoData?: {
    budget: number
    revenue: number
    language: string
    productionCompanies: {
      id: number
      logo_path?: string
      name?: string
      origin_country?: string
    }[]
    releaseDate: string
    voteAverage: number
    productionCountries: {
      iso_3166_1?: string
      name?: string
    }[]
  }
  episodes?:operations['tv-episode-details']['responses']['200']['content']['application/json'][]
}
const TabItems = ({
  tabItems,
  setItem,
  item,
  season,
  seasons,
  setSeason,
  id,
  mediaType,
  moreInfoData,
  episodes,
  setCurrentSeason
}: TabItemsProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      <Tabs
        className="mt-5"
        variant="underlined"
        color="primary"
        selectedKey={item}
        onSelectionChange={setItem as any}
      >
        {tabItems.map((tab, index) => (
          <Tab className="w-full" key={tab} title={tab}>
            {tab == "Seasons" ? (
              <div className="relative flex h-[240px] items-center justify-center">
                <SelectBox
                  season={season!}
                  seasons={seasons!}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setSeason!(e.target.value)
                  }
                />
                <p className="text-white text-3xl font-semibold">
                  Select A Season
                </p>
              </div>
            ) : tab == "Pictures" ? (
              <Suspense fallback={<MainImagesSekelton />}>
                <MainImages type={mediaType} id={id} season={season ? parseInt(season) : 0} />
              </Suspense>
            ) : tab == "Videos" ? (
              <Suspense fallback={<VideosSkeleton />}>
                <Videos type={mediaType} id={id} season={season ? parseInt(season) : 0} />
              </Suspense>
            ) : tab == "More Info" ? (
              <MoreInfo
                budget={moreInfoData!.budget}
                revenue={moreInfoData!.revenue}
                language={moreInfoData!.language!}
                productionCompanies={moreInfoData!.productionCompanies!}
                productionCountries={moreInfoData!.productionCountries!}
                releaseDate={moreInfoData!.releaseDate!}
                voteAverage={moreInfoData!.voteAverage}
              />
            ) : tab == "Episodes" ? (
              <>
                <SelectBox
                  className="relative ml-auto mb-3"
                  season={season!}
                  seasons={seasons!}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setCurrentSeason!({
                      season: e.target.value,
                      selected: true,
                    })
                  }
                />
                <Suspense fallback={<EpisodesSkeleton />}>
                  <Episodes episodes={episodes!} />
                </Suspense>
              </>
            ) : (
              ""
            )}
          </Tab>
        ))}
      </Tabs>
    </div>
  )
}
export default TabItems
