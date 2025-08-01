import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovies } from "../api/tmdb/movies";
import type { Movie } from "../types/Movie";
import MovieCard from "../components/organisms/MovieCard";
const MovieDataPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const [data, setData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getMovies(`movie/${type}`);
        setData(response || []);
      } catch (error) {
        console.error("Error fetching popular data:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [type]);

  if (loading) return <p className="p-4 text-center">Loading...</p>;

  return (
    <div className="p-2 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <h4 className="text-xl mt-2 font-bold mb-6 capitalize text-center bg-gray-800 text-white p-2 rounded-lg dark:bg-white dark:text-black transition-colors duration-300 md:w-1/4 mx-auto">
        {type === "top_rated"
          ? "Top Rated Movies"
          : type === "upcoming"
          ? "Upcoming Movies"
          : "Popular Movies"}
      </h4>

      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          gap-2
          justify-center
          max-w-7xl
          mx-auto
        "
      >
        {data.map((item) => {
          const title = item?.title || item?.name || "";
          const releaseDate = item?.release_date || item?.first_air_date || "";
          const isMovie = !!item?.title;

          return (
            <Link
              key={item.id}
              to={`/${isMovie ? "movie" : "tv"}/${item.id}/${encodeURIComponent(
                title
              )}`}
              className="no-underline text-inherit block"
              style={{ width: "100%" }}
            >
              <div className="flex justify-center">
                <MovieCard
                  title={title}
                  voteAverage={item.vote_average}
                  posterPath={item.poster_path}
                  releaseDate={releaseDate}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MovieDataPage;
