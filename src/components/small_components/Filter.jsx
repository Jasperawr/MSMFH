import React from "react";

import { Icon } from "@iconify/react";

const Filter = () => {
  return (
    <div className="flex justify-center items-center py-5">
      <div className="flex w-[1100px] gap-4 ">
        <div className="flex relative bg-[#E6E6E6] items-center rounded-md">
          <input
            type="text"
            placeholder="Search"
            className="text-sm px-5 pr-9 py-2"
          />
          <Icon
            icon="carbon:search"
            width="20"
            height="20"
            className="text-gray-500 text-sm absolute right-3"
          />
        </div>
        <button className="flex relative bg-white text-gray-500 rounded-md shadow text-sm px-4 pr-11 py-2  hover:bg-gray-50 transition-all duration-200 ease-in-out cursor-pointer">
          Select Specialization
          <Icon
            icon="oui:arrow-down"
            width="20"
            height="20"
            className="text-gray-500 text-sm absolute right-3"
          />
        </button>

        <button className="flex relative bg-white text-gray-500 rounded-md shadow text-sm px-4 pr-11 py-2  hover:bg-gray-50 transition-all duration-200 ease-in-out cursor-pointer">
          Select Sub-Specialization
          <Icon
            icon="oui:arrow-down"
            width="20"
            height="20"
            className="text-gray-500 text-sm absolute right-3"
          />
        </button>

        <button className="flex relative bg-red-400 text-white items-center rounded-md shadow text-sm px-10 py-2 hover:bg-red-500 transition-all duration-200 ease-in-out cursor-pointer">
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filter;
