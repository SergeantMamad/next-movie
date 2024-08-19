import { customcn } from "@/app/utils/functions/customcn"
import Image from "next/image"

type MainImagesPreviewProps = {
  handleImageClick: (index: number, file_path: string) => void
  index: number
  filePath: string
  type:string
}

const MainImagesPreview = ({
  handleImageClick,
  index,
  filePath,
  type
}: MainImagesPreviewProps) => {
  return (
    <div className={customcn("h-[200px] min-w-[300px] relative",type == "actor" && "h-[250px] min-w-[90px]")}>
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
