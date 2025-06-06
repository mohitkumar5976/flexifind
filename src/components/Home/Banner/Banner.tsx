import { useState, useEffect } from "react";
// import Search from "../Search/Search";
import { bannerImages } from "../../../data/banner";
import SearchInput from "../Search/SearchInput";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[300px] md:h-[600px] w-full pt-6">
      {/* Carousel wrapper */}
      <div className="relative w-full h-full">
        {bannerImages.map((image: any, index: number) => (
          <img
            key={image.id}
            src={image.url}
            alt={`Slide ${image.id + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>

      {/* Overlay content */}
      <div className="absolute bottom-4 sm:bottom-16 z-20 w-full px-3 sm:px-12">
        <div className="flex flex-col gap-2 sm:gap-5">
          <div className="flex flex-col">
            <h1 className="text-white font-bold text-[30px] sm:text-[70px]">
              Welcome.
            </h1>
            <p className="text-white font-bold text-[13px] sm:text-[23px]">
              Millions of movies, TV shows and people to discover. Explore now.
            </p>
          </div>
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default Banner;
