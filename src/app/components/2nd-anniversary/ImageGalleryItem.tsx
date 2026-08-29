import Image from "next/image"

type Props = {
  imageUrl: string
  description: string
  onClick?: () => void
}
const ImageGalleryItem = ({ imageUrl, description, onClick }: Props) => {
  return (
    <div className="space-y-4 w-full cursor-pointer" onClick={onClick}>
      <div className="aspect-video relative rounded-2xl border border-[#3b3b3b]">
        <Image alt={description} src={imageUrl} fill className="object-contain" />
      </div>
      <p className="text-sm text-center text-stone-600 mt-4">{description}</p>
    </div>
  )
}
export default ImageGalleryItem
