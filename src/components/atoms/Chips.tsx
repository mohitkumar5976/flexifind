import React from "react";

interface ChipsProps {
  list: string[];
}

const Chips: React.FC<ChipsProps> = ({ list }) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {list?.map((item, index) => (
        <li
          key={index}
          className="bg-gray-200 rounded-xl px-2 py-1 text-sm font-medium text-gray-700"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Chips;
