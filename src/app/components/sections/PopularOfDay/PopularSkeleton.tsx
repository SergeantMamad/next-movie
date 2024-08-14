import MoviePopularSkeletonCart from "./PopularSkeletonCart";
const PopularSkeleton = () => {
  let contents = [];
  for (let index = 0; index <= 15; index++) {
    contents.push(
      <MoviePopularSkeletonCart index={index} key={index} />
    );
  }
  return (
    <div className="relative">
      <div className="flex mt-10 gap-4 overflow-hidden scroll-smooth Card-Popular">
        {contents}
      </div>
    </div>
  );
};

export default PopularSkeleton;
