import { Skeleton } from "@mui/material";

interface CardSkeletonProps {
  width?: string;
  height?: string;
}

const CardSkeleton: React.FC<CardSkeletonProps> = ({
  width = "w-[150px]",
  height = "h-[300px]",
}) => {
  return (
    <div className={`flex flex-col ${width} ${height} relative`}>
      {/* Poster Skeleton */}
      <div className="relative w-full h-[220px] bg-gray-600 rounded-xl overflow-hidden">
        <Skeleton
          variant="rectangular"
          animation="wave"
          className="w-full h-full"
        />
      </div>

      {/* Title & Date */}
      <div className="pl-2 pt-6 space-y-2">
        <Skeleton variant="text" width="80%" height={20} />
        <Skeleton variant="text" width="60%" height={16} />
      </div>
    </div>
  );
};

export default CardSkeleton;
