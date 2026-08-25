"use client"
import Image from "next/image"
import { useContext } from "react"
import { StorageContext } from "../utils/context/storageContext"
import Link from "next/link"
import { Accordion } from "@heroui/react"
import useMediaQuery from "../utils/hooks/useMediaQuery"
import WatchList from "../components/watchlist/WatchList"

const Page = () => {
  const context = useContext(StorageContext)
  const isLarge = useMediaQuery("(min-width: 1024px)")
  return (
    <main>
      <div className="relative h-[450px] slider active">
        <Image
          unoptimized
          src="/images/fury.png"
          fill
          sizes="100vw"
          alt=""
          className="object-cover  brightness-50"
        />
      </div>
      <div className="min-h-[70vw] lg:min-h-[20vw] flex items-center justify-center flex-col gap-3">
        {context?.items?.length == 0 && (
          <>
            <p className="text-2xl lg:text-5xl font-semibold text-center">
              Whoops, it looks like you don&apos;t have any item in your watchlist
            </p>
            <p className="text-lg font-semibold">
              Try Our{" "}
              <Link className="text-green-500" href="/discover">
                Discover
              </Link>{" "}
              Or{" "}
              <Link className="text-green-500" href="/advancedsearch/movie">
                Advanced Search
              </Link>{" "}
              :)
            </p>
          </>
        )}
        {context?.items?.length! > 0 && <div className="w-full lg:w-[80%]">
          <Accordion
            allowsMultipleExpanded
          >
            <Accordion.Item id="movies">
              <Accordion.Heading>
                <Accordion.Trigger className="font-semibold">Movies</Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body>
                  <WatchList isLarge={isLarge} mediaType="movie" />
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item id="series">
              <Accordion.Heading>
                <Accordion.Trigger className="font-semibold">Series</Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body>
                  <WatchList isLarge={isLarge} mediaType="tv" />
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>}
      </div>
    </main>
  )
}
export default Page
