import { type JSX } from "react";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ImageComponent from "../atoms/ImageComponent";

interface MovieReviewCardProps {
  data: any; // Replace `any` with a specific type if possible
}

const MovieReviewCard: React.FC<MovieReviewCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col">
      {data.length > 0 && (
        <div className="bg-gray-700 flex items-center h-auto sm:h-[40rem]">
          <div className="flex flex-col sm:flex-row w-full ">
            {/* Poster Image */}
            <div className="flex justify-center w-full">
              <div className="py-2 w-80 sm:w-96">
                <ImageComponent
                  rounded="rounded-3xl"
                  posterPath={data[0].poster_path}
                />
              </div>
            </div>

            {/* Movie Info Section */}
            <div className="flex flex-col justify-center p-3 text-white w-full gap-6 sm:mr-2" >
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">
                  {data[0].title}
                  <span className="text-gray-200"> (2013)</span>
                </h1>
                <div className="flex gap-2 flex-wrap">
                  {data[0].genres.map((genre: any) => (
                    <span key={genre.id}>{genre.name}</span>
                  ))}
                </div>
              </div>

              {/* Rating + Icons */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="relative w-16 h-16 bg-black rounded-full">
                  <svg
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-500"
                    width="64"
                    height="64"
                  >
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray="176"
                      strokeDashoffset={`${
                        176 -
                        (Math.floor((data[0]?.vote_average ?? 0) * 10) / 100) *
                          176
                      }`}
                    />
                  </svg>
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                    {Math.floor((data[0]?.vote_average ?? 0) * 10)}%
                  </span>
                </div>

                {/* Action Icons */}
                {(
                  [
                    ["Add to List", <FormatListBulletedIcon />],
                    ["Mark as Favorite", <FavoriteIcon />],
                    ["Add to your watchlist", <BookmarkIcon />],
                    ["Rate it!", <StarBorderIcon />],
                  ] as [string, JSX.Element][]
                ).map(([title, icon], idx) => (
                  <div
                    key={idx}
                    title={title}
                    className="rounded-full p-4 flex items-center bg-[#032541] cursor-pointer hover:bg-[#05416d]"
                  >
                    {icon}
                  </div>
                ))}

                <div className="hidden md:flex items-center cursor-pointer hover:text-gray-400">
                  <PlayArrowRoundedIcon />
                  <span>Play Trailer</span>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h2 className="text-xl font-bold">Overview</h2>
                <p className="text-sm">{data[0].overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieReviewCard;
