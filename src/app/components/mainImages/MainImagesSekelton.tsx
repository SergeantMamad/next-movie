import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
let contents = []
for (let index = 0; index <= 15; index++) {
  contents.push(
    <div className="w-[300px] h-[200px] min-w-[300px] relative" key={index}>
      <Skeleton
        baseColor="#7c7c7c"
        highlightColor="#8c8c8c"
        width={300}
        height={200}
        className="rounded-sm"
      />
    </div>
  )
}

const MainImagesSekelton = () => {
  return (
    <div className="relative flex items-center mt-10">
      <div className="flex overflow-hidden scroll-smooth gap-3">
        {contents}
      </div>
    </div>
  )
}

export default MainImagesSekelton
