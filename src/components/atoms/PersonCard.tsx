import React from "react";
import ImageComponent from "./ImageComponent";

interface PersonCardProps {
  profilePath: string;
  name: string;
  character: string;
}

const PersonCard: React.FC<PersonCardProps> = ({
  profilePath,
  name,
  character,
}) => {
  return (
    <div className="flex flex-col gap-2 shadow-lg h-full bg-white rounded overflow-hidden">
      <div className="relative w-full h-[180px]">
        <ImageComponent
          posterPath={profilePath}
        />
      </div>

      <div className="pl-4 pb-1 flex-1">
        <p className="text-base font-bold w-3/4 truncate">{name}</p>
        <p className="text-sm text-slate-500 truncate">{character}</p>
      </div>
    </div>
  );
};

export default PersonCard;
