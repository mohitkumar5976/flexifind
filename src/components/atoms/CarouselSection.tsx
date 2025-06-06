import { Link } from "react-router-dom";
import MovieCard from "../organisms/MovieCard";
import CardSkeleton from "./CardSkeleton";

interface CarouselSectionProps {
  dataList: any[];
  loading?: boolean;
}

const CarouselSection: React.FC<CarouselSectionProps> = ({
  dataList,
  loading,
}) => {
  const skeletonArray = Array.from({ length: 6 });

  const cardWidth = "w-[150px] md:max-w-[300px]";
  const cardHeight = "h-[300px] md:max-h-[350px]";

  return (
    <div className="flex overflow-x-auto space-x-2 w-full px-1 pb-4">
      {(loading ? skeletonArray : dataList)?.map((item: any, index: number) => {
        const key = loading ? `skeleton-${index}` : item.id;
        const title = item?.title || item?.name || "";
        const releaseDate = item?.release_date || item?.first_air_date || "";
        const isMovie = !!item?.title;

        return (
          <div key={key} className={`${cardWidth} ${cardHeight} shrink-0`}>
            {loading ? (
              <CardSkeleton width={cardWidth} height={cardHeight} />
            ) : (
              <Link
                to={`/${isMovie ? "movie" : "tv"}/${
                  item.id
                }/${encodeURIComponent(title)}`}
                className="no-underline text-inherit"
              >
                <MovieCard
                  title={title}
                  voteAverage={item.vote_average}
                  posterPath={item.poster_path}
                  releaseDate={releaseDate}
                />
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CarouselSection;
