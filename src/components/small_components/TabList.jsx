import React, { useState } from "react";
import TabItem from "./TabItem";

const TabList = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="p-5 bg-white w-[350px] rounded-md ">
      <div className="flex flex-col gap-3">
        {items.map((label, index) => (
          <TabItem
            key={label}
            label={label}
            active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TabList;
