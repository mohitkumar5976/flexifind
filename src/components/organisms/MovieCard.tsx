import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import ImageComponent from "../atoms/ImageComponent";

interface MovieCardProps {
  title?: string;
  releaseDate?: string;
  posterPath?: string;
  voteAverage?: number;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  releaseDate,
  posterPath,
  voteAverage = 0,
}) => {
  const progressValue = Math.floor((voteAverage * 100) / 10);

  return (
    <div className="flex flex-col w-[150px] h-[300px] relative">
      {/* Poster Image */}
      <div className="relative w-full h-[220px] bg-gray-200 rounded-xl flex items-center justify-center">
        {posterPath ? (
          <ImageComponent rounded="rounded-xl" posterPath={posterPath} />
        ) : (
          <CircularProgress color="error" />
        )}

        {/* Circular progress badge */}
        {posterPath && (
          <div className="absolute -bottom-5 right-3">
            <div className="relative w-[50px] h-[50px] bg-black rounded-full flex items-center justify-center">
              <CircularProgress
                variant="determinate"
                value={progressValue}
                size={50}
                sx={{
                  color:
                    progressValue >= 75
                      ? "#22c55e"
                      : progressValue >= 50
                      ? "#f97316"
                      : "#ef4444",
                }}
              />
              <div
                className="absolute top-1/2 left-1/2 text-xs font-semibold"
                style={{
                  transform: "translate(-50%, -50%)",
                  color:
                    progressValue >= 75
                      ? "#22c55e"
                      : progressValue >= 50
                      ? "#f97316"
                      : "#ef4444",
                }}
              >
                {progressValue}
                <sup className="text-[10px] ml-1">%</sup>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Title & Date */}
      <div className="pl-2 pt-6">
        <h3 className="text-sm font-bold line-clamp-2 leading-tight">{title}</h3>
        <p className="text-sm text-slate-500">{releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
