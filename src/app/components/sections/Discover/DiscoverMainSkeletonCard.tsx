import Skeleton from "react-loading-skeleton"

const DiscoverMainSkeletonCard = () => {
  return (
    <div className="min-w-[290px] flex flex-col gap-3">
      <div className="w-[290px] h-[180px] relative">
        <Skeleton
          width={290}
          height={180}
          baseColor="#7c7c7c"
          highlightColor="#8c8c8c"
          className="rounded-[14px]"
        />
      </div>
      <Skeleton
        width={290}
        height={20}
        baseColor="#7c7c7c"
        highlightColor="#8c8c8c"
      />
      <div className="flex gap-2">
        <Skeleton
          width={20}
          height={20}
          baseColor="#7c7c7c"
          highlightColor="#8c8c8c"
        />
        <Skeleton
          width={40}
          height={20}
          baseColor="#7c7c7c"
          highlightColor="#8c8c8c"
        />
      </div>
    </div>
  )
}
export default DiscoverMainSkeletonCard
