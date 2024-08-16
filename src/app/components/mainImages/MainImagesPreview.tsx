import Image from "next/image"

type MainImagesPreviewProps = {
  handleImageClick: (index: number, file_path: string) => void
  index: number
  filePath: string
}

const MainImagesPreview = ({
  handleImageClick,
  index,
  filePath,
}: MainImagesPreviewProps) => {
  return (
    <div className="h-[200px] min-w-[300px] relative">
      <Image
        fill
        alt=""
        className="rounded-sm object-cover hover:cursor-pointer"
        src={`https://image.tmdb.org/t/p/w780${filePath}`}
        onClick={() => handleImageClick(index, filePath)}
      />
    </div>
  )
}
export default MainImagesPreview
