import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { cache } from "react"
import PersonPageClient from "./PersonPageClient"
import { getPerson } from "@/app/utils/actions/getSingleData"

type PageProps = Readonly<{ params: Promise<{ id: string }> }>
const getPersonCached = cache((id: number) => getPerson(id))

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const data = await getPersonCached(Number(id))
  return { title: data?.name ?? "Person" }
}

export default async function PersonPage({ params }: PageProps) {
  const { id: rawId } = await params
  const id = Number(rawId)
  const data = await getPersonCached(id)
  if (!data) notFound()
  return <PersonPageClient id={id} data={data} />
}
