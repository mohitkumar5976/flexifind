import React from "react";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import ImageComponent from "./ImageComponent";

interface VideoCardProps {
  title: string;
  posterPath: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, posterPath }) => {
  return (
    <>
      <div className="w-[300px] transition-transform duration-300 hover:scale-105">
        <div className="relative w-full h-[185px] rounded-xl overflow-hidden">
          <ImageComponent posterPath={posterPath} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <PlayArrowRoundedIcon
              className="text-white drop-shadow-md"
              sx={{ fontSize: "5rem" }}
            />
          </div>
        </div>
      </div>

      <div className="text-center text-white mt-2">
        <p className="text-[17px] font-bold">{title} trailer</p>
        <p className="text-[15px] text-slate-300">Final Trailer</p>
      </div>
    </>
  );
};

export default VideoCard;
