import React from "react";
import { Icon } from "@iconify/react";

const HMOCard = ({ name, logo }) => {
  return (
    <div className="w-[200px]  flex flex-col items-center gap-2">
      <div
        className="
          w-full h-24 sm:h-28 bg-gray-200 
          rounded-md flex items-center justify-center
          overflow-hidden
        "
      >
        {logo ? (
          <img
            src={logo}
            alt={name}
            className="w-full h-full object-contain`"
          />
        ) : (
          <Icon
            icon="mdi:image"
            width="32"
            height="32"
            className="text-gray-500"
          />
        )}
      </div>

      <p className="text-center text-sm sm:text-base font-medium">{name}</p>
    </div>
  );
};

export default HMOCard;
