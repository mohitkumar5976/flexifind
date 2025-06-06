import React from "react";

interface ImageComponentProps {
  posterPath?: string;
  rounded?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  posterPath,
  rounded = "",
}) => {
  const src = posterPath
    ? `http://image.tmdb.org/t/p/w500/${posterPath}`
    : `/assets/images/app/person.png`;

  return (
    <img
      className={rounded}
      src={src}
      alt="poster"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      loading="lazy"
    />
  );
};

export default ImageComponent;
