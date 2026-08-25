import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { cache } from "react"
import SeriesPageClient from "./SeriesPageClient"
import { getSeries } from "@/app/utils/actions/getSingleData"

type PageProps = Readonly<{ params: Promise<{ id: string }> }>
const getSeriesCached = cache((id: number) => getSeries(id))

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const data = await getSeriesCached(Number(id))
  return { title: data?.name ?? "Series" }
}

export default async function SeriesPage({ params }: PageProps) {
  const { id: rawId } = await params
  const id = Number(rawId)
  const data = await getSeriesCached(id)
  if (!data) notFound()
  return <SeriesPageClient id={id} data={data} />
}
