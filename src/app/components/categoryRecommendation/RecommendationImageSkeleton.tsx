import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css";

const RecommendationImageSkeleton = () => {
  return (
    <Skeleton
      height={900}
      baseColor="#1c1c1c"
      highlightColor="#3c3c3c"
    />
  )
}
export default RecommendationImageSkeleton
