"use client"

import { useEffect, useState } from "react"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { A11y, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import ScrollButtons from "../cartGeneral/ScrollButtons"

type FullscreenImage = {
  imageUrl: string
  description?: string
}

type FullscreenImageGalleryProps = {
  images: FullscreenImage[]
  initialSlide?: number
  onClose: () => void
}

const FullscreenImageGallery = ({
  images,
  initialSlide = 0,
  onClose
}: FullscreenImageGalleryProps) => {
  const firstSlide = Math.min(Math.max(initialSlide, 0), images.length - 1)
  const [activeIndex, setActiveIndex] = useState(firstSlide)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  if (!images.length) return null

  const activeImage = images[activeIndex]

  return (
    <div
      className="overlay z-30 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Fullscreen image gallery"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="absolute top-5 z-10 flex w-[min(1200px,90vw)] items-center justify-between">
        <button
          onClick={onClose}
          className="w-[30px] h-[30px] border border-red-700 rounded-md"
        >
          <FontAwesomeIcon className="text-red-700" icon={faXmark} />
        </button>
      </div>

      <div className="relative h-[75vh] w-[min(1200px,90vw)]">
        <ScrollButtons
          nextElClass="trending-button-prev"
          prevElClass="trending-button-next"
        />
        <Swiper
          modules={[Navigation, A11y]}
          initialSlide={firstSlide}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="h-full"
          navigation={{
            nextEl: ".trending-button-next",
            prevEl: ".trending-button-prev"
          }}
          dir="rtl"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={`${image.imageUrl}-${index}`}
              className="!flex !h-full !w-full !items-center !justify-center"
            >
              <Image
                src={image.imageUrl}
                alt={image.description || `Gallery image ${index + 1}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
              {image.description && (
                <p className="absolute bottom-4 left-1/2 z-10 w-[min(720px,85%)] -translate-x-1/2 rounded-md bg-black/75 px-4 py-2 text-center text-sm text-white">
                  {image.description}
                </p>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export type { FullscreenImage, FullscreenImageGalleryProps }
export default FullscreenImageGallery
