import React from "react";
import { Link } from "react-router-dom";
import type { Movie } from "../../../types/Movie";
import MovieCard from "../../organisms/MovieCard";
import CardSkeleton from "../../atoms/CardSkeleton";

interface SearchContainerProps {
  search: Movie[];
  loading: boolean;
}

const SearchContainer: React.FC<SearchContainerProps> = ({
  search,
  loading,
}) => {
  const itemsToRender: (Movie | undefined)[] = loading
    ? Array.from({ length: 8 })
    : search;

  return (
    <div className="flex flex-col gap-4 dark:bg-slate-900 dark:text-white p-2 transition-colors duration-300">
      <h2 className="text-center bg-black text-white py-2 text-lg dark:bg-white dark:text-black font-bold rounded-md">
        Search Results ({search.length})
      </h2>

     <div className="grid grid-cols-2 md:grid-cols-6 gap-6 place-items-center">

        {itemsToRender.map((movie, index) => (
          <div
            key={(movie as Movie)?.id ?? index}
            className="w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%] xl:w-[15%] min-w-[140px] max-w-[250px]"
          >
            {loading ? (
              <CardSkeleton />
            ) : movie ? (
              <Link
                to={`/${movie.title ? "movie" : "tv"}/${
                  movie.id
                }/${encodeURIComponent(movie.title || movie.name || "")}`}
              >
                <MovieCard
                  title={movie.title || movie.name || ""}
                  voteAverage={movie.vote_average ?? 0}
                  posterPath={movie.poster_path}
                  releaseDate={movie.release_date}
                />
              </Link>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchContainer;
