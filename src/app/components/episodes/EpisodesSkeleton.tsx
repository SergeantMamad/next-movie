import "react-loading-skeleton/dist/skeleton.css";
import EpisodesSkeletonCart from "./EpisodesSkeletonCart";
let contents = [];
for (let index = 0; index <= 15; index++) {
  contents.push(
    <EpisodesSkeletonCart key={index}/>
  );
}

const EpisodesSkeleton = () => {
  return (
    <div className="relative flex items-center mt-10">
      <div
        className="flex mt-10 overflow-hidden scroll-smooth gap-3"
      >
        {contents}
      </div>
    </div>
  );
};

export default EpisodesSkeleton;
