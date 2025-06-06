import { useState } from "react";

const Tabs = ({
  data,
  setTab,
  bgColor = "bg-black",
  textColor = "text-white",
}: any) => {
  const [index, setIndex] = useState(0);

  const handleClick = (id: any, url: any) => {
    setIndex(id);
    setTab(url);
  };

  return (
    <div className="flex flex-wrap space-x-2 py-1 items-center w-fit">
      {data?.length > 0 &&
        data.map((item: any) => (
          <div
            key={item.id}
            onClick={() => handleClick(item.id, item.url)}
            className={`cursor-pointer px-4 py-1 rounded-2xl border text-sm transition-colors duration-200
              ${
                index === item.id
                  ? `${bgColor} ${textColor}`
                  : "bg-transparent text-black border-gray-300"
              }`}
          >
            {item.title}
          </div>
        ))}
    </div>
  );
};

export default Tabs;
