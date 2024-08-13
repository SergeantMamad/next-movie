import Skeleton from "react-loading-skeleton"

const CastsSkeletonCart = () => {
  return (
    <div className="flex items-center gap-3 min-w-[300px]">
      <Skeleton
        width={90}
        height={90}
        baseColor="#7c7c7c"
        highlightColor="#8c8c8c"
        className="rounded-full"
      />
      <div className="flex flex-col gap-3">
        <Skeleton
          width={122}
          height={28}
          baseColor="#7c7c7c"
          highlightColor="#8c8c8c"
        />
        <Skeleton
          width={50}
          height={16}
          baseColor="#7c7c7c"
          highlightColor="#8c8c8c"
        />
      </div>
    </div>
  )
}
export default CastsSkeletonCart