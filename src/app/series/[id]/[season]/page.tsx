import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { cache } from "react"
import SeasonPageClient from "./SeasonPageClient"
import { getSeason, getSeries } from "@/app/utils/actions/getSingleData"

type PageProps = Readonly<{ params: Promise<{ id: string; season: string }> }>
const getSeriesCached = cache((id: number) => getSeries(id))
const getSeasonCached = cache((id: number, season: number) => getSeason({ id, season }))

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id, season } = await params
  const data = await getSeriesCached(Number(id))
  return { title: data?.name ? `${data.name} Season ${season}` : "TV Season" }
}

export default async function SeasonPage({ params }: PageProps) {
  const { id: rawId, season: rawSeason } = await params
  const id = Number(rawId)
  const season = Number(rawSeason)
  const [seriesData, episodeData] = await Promise.all([
    getSeriesCached(id),
    getSeasonCached(id, season),
  ])
  if (!seriesData || !episodeData) notFound()
  return <SeasonPageClient id={id} season={season} episodeData={episodeData} seriesData={seriesData} />
}
