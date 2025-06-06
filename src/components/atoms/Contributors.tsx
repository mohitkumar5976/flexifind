import React from "react";
import ImageComponent from "./ImageComponent";

const Contributors: React.FC = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="w-12 h-12">
        <ImageComponent
          rounded="rounded-full"
          posterPath="https://www.themoviedb.org/t/p/w138_and_h175_face/zDBEVA7Skrje3A8bmR2VOJRwkZc.jpg"
        />
      </div>
      <div>
        <p className="font-bold text-sm">213</p>
        <p className="text-gray-500 text-xs">Giger</p>
      </div>
    </div>
  );
};

export default Contributors;
