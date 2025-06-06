import { useEffect, useState } from "react";
import { getMovies } from "../../api/tmdb/movies";
import Tabs from "./Tabs";
import CarouselSection from "../atoms/CarouselSection";
import SectionHeading from "../atoms/SectionHeading";

const tabData = [
  {
    id: 0,
    title: "Streaming",
    url: "movie/now_playing",
  },
  {
    id: 1,
    title: "On TV",
    url: "movie/top_rated",
  },
  {
    id: 2,
    title: "For Rent",
    url: "movie/upcoming",
  },
  {
    id: 3,
    title: "In Theaters",
    url: "movie/popular",
  },
];

const PopularCarousel = () => {
  const [dataList, setDataList] = useState([]);
  const [tab, setTab] = useState(tabData[0].url);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await getMovies(tab);
      setDataList(res);
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [tab]);

  return (
    <div className="flex flex-col pl-2 space-y-2 dark:bg-gray-800 dark:text-white transition-colors duration-300">
      <div className="flex flex-col">
        <SectionHeading text="What's Popular" variant="h6" fontWeight="700" />
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

export default PopularCarousel;
