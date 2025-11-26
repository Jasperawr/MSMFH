import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import TabItem from "./TabItem";
import { useNavigate } from "react-router-dom";

const TabList = ({ items }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [activeIndex, setActiveIndex] = useState(0);

  // Detect active tab from URL
  useEffect(() => {
    const path = window.location.pathname;

    const foundIndex = items.findIndex((item) => item.link === path);

    if (foundIndex !== -1) {
      setActiveIndex(foundIndex);
    }
  }, [items]);

  const handleSelectChange = (e) => {
    const index = Number(e.target.value);
    setActiveIndex(index);
    navigate(items[index].link);
  };

  return (
    <div className="p-5 bg-white w-[350px] rounded-md relative">
      {isMobile ? (
        <select
          className="w-full p-2 border border-gray-300 rounded-md"
          value={activeIndex}
          onChange={handleSelectChange}
        >
          {items.map((item, index) => (
            <option key={item.label} value={index}>
              {item.label}
            </option>
          ))}
        </select>
      ) : (
        <div className="flex flex-col gap-3 sticky top-30">
          {items.map((item, index) => (
            <TabItem
              key={item.label}
              label={item.label}
              link={item.link}
              active={index === activeIndex}
              onClick={() => {
                setActiveIndex(index);
                navigate(item.link);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TabList;
