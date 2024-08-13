import MoviePopularSkeletonCart from "./MoviePopularSkeletonCart";
const MoviePopularSkeleton = () => {
  let contents = [];
  for (let index = 0; index <= 15; index++) {
    contents.push(
      <MoviePopularSkeletonCart index={index} />
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

export default MoviePopularSkeleton;
