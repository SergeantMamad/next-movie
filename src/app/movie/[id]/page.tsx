import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { cache } from "react"
import MoviePageClient from "./MoviePageClient"
import { getMovie } from "@/app/utils/actions/getSingleData"

type PageProps = Readonly<{
  params: Promise<{ id: string }>
}>

const getMovieCached = cache((id: number) => getMovie(id))

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const data = await getMovieCached(Number(id))

  return {
    title: data?.title ?? "Movie",
  }
}

export default async function MoviePage({ params }: PageProps) {
  const { id: rawId } = await params
  const id = Number(rawId)
  const data = await getMovieCached(id)

  if (!data) {
    notFound()
  }

  return <MoviePageClient id={id} data={data} />
}
