import Skeleton from "react-loading-skeleton"

const VideoSkeletonCart = () => {
  return (
    <div className="min-w-[320px] flex flex-col gap-1" >
      <div className="w-[320px] h-[200px] relative">
        <Skeleton
          baseColor="#7c7c7c"
          highlightColor="#8c8c8c"
          width={320}
          height={200}
          className="rounded-md"
        />
      </div>
      <Skeleton
        baseColor="#7c7c7c"
        highlightColor="#8c8c8c"
        width={320}
        height={20}
        className="rounded-sm"
      />
    </div>
  )
}
export default VideoSkeletonCart
