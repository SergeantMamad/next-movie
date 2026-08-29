"use client"
import { useState } from "react"
import FullscreenImageGallery from "../mainImages/FullscreenImageGallery"
import ImageGalleryItem from "./ImageGalleryItem"

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null)
  const images = [
    {
      imageUrl: "/images/EarlyBuilds.png",
      description: "کد بیس اولیه (اسفند 1402)"
    },
    {
      imageUrl: "/images/FirstCardDesign.png",
      description: "طراحی اولیه کارت ها (اسفند 1402)"
    },
    {
      imageUrl: "/images/instagramStory.jpg",
      description: "استوری اینستاگرامی 10 روز قبل از دپلوی پروژه"
    },
    {
      imageUrl: "/images/poster.jpg",
      description: "پوستر زمان دپلوی پروژه یک روز قبل از دپلوی"
    }
  ]
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-4">
      {images.map((image) => (
        <ImageGalleryItem
          key={image.imageUrl}
          imageUrl={image.imageUrl}
          description={image.description}
          onClick={() => setIsOpen(images.indexOf(image))}
        />
      ))}
      {isOpen != null && (
        <FullscreenImageGallery
          images={images}
          initialSlide={isOpen}
          onClose={() => setIsOpen(null)}
        />
      )}
    </div>
  )
}
export default ImageGallery
