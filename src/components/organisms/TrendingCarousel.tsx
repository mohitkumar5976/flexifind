import { useEffect, useState } from "react";
import { getMovies } from "../../api/tmdb/movies";
import SectionHeading from "../atoms/SectionHeading";
import Tabs from "./Tabs";
import CarouselSection from "../atoms/CarouselSection";

const tabData = [
  {
    id: 0,
    title: "Today",
    url: "trending/movie/day",
  },
  {
    id: 1,
    title: "This Week",
    url: "trending/movie/week",
  },
];

const TrendingCarousel = () => {
  const [dataList, setDataList] = useState([]);
  const [tab, setTab] = useState(tabData[0].url);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await getMovies(tab);
      setDataList(res);
    } catch (err) {
      console.error("Error fetching trending data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [tab]);

  return (
    <div className="flex flex-col pl-2 space-y-2 dark:bg-gray-800 dark:text-white transition-colors duration-300">
      <div className="flex flex-col md:flex-row md:items-center ">
        <SectionHeading text="Trending" variant="h6" fontWeight="700" />
        <Tabs
          data={tabData}
          setTab={setTab}
          bgColor="bg-black"
          textColor="text-white"
        />
      </div>

      <CarouselSection dataList={dataList} loading={loading} />
    </div>
  );
};

export default TrendingCarousel;
