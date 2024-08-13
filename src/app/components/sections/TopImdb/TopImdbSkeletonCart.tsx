import Skeleton from "react-loading-skeleton"

const TopImdbSkeletonCart = () => {
  return (
    <div className="w-[680px] flex flex-col gap-8">
      <div className="w-[680px] h-[315px] relative">
        <Skeleton
          width={680}
          height={315}
          baseColor="#7c7c7c"
          highlightColor="#8c8c8c"
        />
      </div>
      <Skeleton
        width={280}
        borderRadius={20}
        height={38}
        baseColor="#7c7c7c"
        highlightColor="#8c8c8c"
      />
      <Skeleton
        width={340}
        height={48}
        baseColor="#7c7c7c"
        highlightColor="#8c8c8c"
      />
      <Skeleton
        width={38}
        height={16}
        baseColor="#7c7c7c"
        highlightColor="#8c8c8c"
      />
      <Skeleton
        width={645}
        height={16}
        baseColor="#7c7c7c"
        highlightColor="#8c8c8c"
      />
      <Skeleton
        width={645}
        height={16}
        baseColor="#7c7c7c"
        highlightColor="#8c8c8c"
      />
      <Skeleton
        width={345}
        height={16}
        baseColor="#7c7c7c"
        highlightColor="#8c8c8c"
      />
      <div className="flex gap-4 bottom-0 mt-auto">
        <Skeleton
          width={145}
          height={46}
          baseColor="#7c7c7c"
          highlightColor="#8c8c8c"
        />
        <Skeleton
          width={145}
          height={46}
          baseColor="#7c7c7c"
          highlightColor="#8c8c8c"
        />
      </div>
    </div>
  )
}
export default TopImdbSkeletonCart