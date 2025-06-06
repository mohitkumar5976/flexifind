import React from "react";
import CarouselSection from "../atoms/CarouselSection";
import Tabs from "./Tabs";

const Carousel = ({tabList, data }: any) => {
  return (
    <div>
      <div><Tabs/></div>
      <div>
        <CarouselSection dataList={data} />
      </div>
    </div>
  );
};

export default Carousel;
