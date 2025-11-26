import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import TabItem from "./TabItem";

const TabList = ({ items }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [activeIndex, setActiveIndex] = useState(0);

  // Detect active index from URL
  useEffect(() => {
    const currentUrl = window.location.href;

    // Check if the URL contains the link of any tab
    const foundIndex = items.findIndex((item) =>
      currentUrl.includes(item.link)
    );

    if (foundIndex !== -1) {
      setActiveIndex(foundIndex);
    } else {
      setActiveIndex(0); // default to first tab (All)
    }
  }, [items]);

  const handleSelectChange = (e) => {
    const index = Number(e.target.value);
    setActiveIndex(index);

    const selectedItem = items[index];
    if (selectedItem && selectedItem.link) {
      window.location.href = selectedItem.link;
    }
  };

  return (
    <div className="p-5 bg-white w-[350px] rounded-md relative">
      {isMobile ? (
        // Mobile dropdown
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
        // Desktop vertical tabs
        <div className="flex flex-col gap-3 sticky top-30">
          {items.map((item, index) => (
            <TabItem
              key={item.label}
              label={item.label}
              link={item.link}
              active={index === activeIndex}
              onClick={() => {
                setActiveIndex(index);
                window.location.href = item.link;
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TabList;
