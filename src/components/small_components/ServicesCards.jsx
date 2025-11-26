import React from "react";
import { Icon } from "@iconify/react";

const ServicesCard = ({ icon, title, description, link }) => {
  return (
    <div
      className="
        p-4 md:p-5 
        rounded-xl 
        hover:shadow-lg 
        transition-all duration-400 ease-in-out 
        flex flex-col justify-between items-center 
        w-full sm:w-[220px] md:w-[256px] 
        h-auto md:h-[337px] 
        border border-gray-200 bg-white
      "
    >
      {/* ICON */}
      <div
        className="
          bg-green-50 
          w-[55px] h-[55px] md:w-[63px] md:h-[63px]
          flex items-center justify-center 
          rounded-xl mt-3 md:mt-5
        "
      >
        <Icon
          icon={icon}
          className="text-green-500 text-[26px] md:text-[28px]"
        />
      </div>

      {/* TEXT */}
      <div className="flex flex-col gap-1 md:gap-2 text-center">
        <p className="text-base md:text-lg font-medium">{title}</p>
        <p className="text-xs md:text-sm text-gray-400 mb-2 md:mb-3 px-1">
          {description}
        </p>
      </div>

      {/* LINK */}
      <a
        href={link}
        className="
          flex items-center justify-center gap-2 
          text-green-700 font-medium 
          text-xs md:text-sm 
          w-full 
          hover:text-green-900 
          transition-all duration-300 ease-in-out
        "
      >
        Learn more
        <Icon
          icon="iconamoon:arrow-right-2-light"
          className="text-[18px] md:text-[20px]"
        />
      </a>
    </div>
  );
};

export default ServicesCard;
