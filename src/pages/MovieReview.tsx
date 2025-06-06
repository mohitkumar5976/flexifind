import { useParams } from "react-router-dom";
import MovieReviewCard from "../components/MovieReviewPage/MovieReview";
import { useEffect, useState } from "react";
import type { Movie } from "../types/Movie";
import { getMovieDetails } from "../api/tmdb/movies";
import PrimaryContentSection from "../components/MovieReviewPage/PrimaryContentSection";
import MovieReviewSidebar from "../components/MovieReviewPage/MovieReviewSidebar";
import TrendingCarousel from "../components/organisms/TrendingCarousel";
import FreeToWatch from "../components/organisms/FreeToWatch";

const MovieReviewViewPage: React.FC = () => {
  const params = useParams();
  const id = params.id as string;
  const type = params.type as string;

  const [data, setData] = useState<Movie[]>([]);

  const getMovie = async () => {
    try {
      const res = await getMovieDetails(type, id);
      setData([res.data]);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (id && type) {
      getMovie();
    }
  }, [id, type]);

  return (
    <div className="pt-[60px]">
      {/* Add padding from the top */}
      <section>
        <MovieReviewCard data={data} />
      </section>
      <section>
        <div className="flex flex-col sm:flex-row w-full flex-grow">
          <div className="w-full sm:w-9/12 p-2">
            <PrimaryContentSection id={id} type={type} />
          </div>
          <div className="w-full sm:w-3/12 p-2">
            <MovieReviewSidebar />
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-y-3">
        <div>
          <TrendingCarousel />
        </div>
        <div>
          <FreeToWatch />
        </div>
      </section>
    </div>
  );
};

export default MovieReviewViewPage;
