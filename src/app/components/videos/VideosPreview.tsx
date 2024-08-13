import Image from "next/image"

type VideosPreviewProps = {
    index:number
    key:string
    name:string
    handleVideoClick: (index:number, youtube_key:string) => void
}

const VideosPreview = ({
    index,
    key,
    name,
    handleVideoClick
}:VideosPreviewProps) => {
  return (
    <div className="min-w-[320px] flex flex-col gap-1">
      <div className="w-[320px] h-[200px] relative">
        <Image
          fill
          alt=""
          className="rounded-md object-cover hover:cursor-pointer"
          src={`https://img.youtube.com/vi/${key}/hqdefault.jpg`}
          onClick={() => handleVideoClick(index, key)}
        />
      </div>
      <p className="text-white font-bold truncate w-[320px] mx-auto">
        {name}
      </p>
    </div>
  )
}
export default VideosPreview
