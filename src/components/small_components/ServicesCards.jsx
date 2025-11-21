import React from "react";
import { Icon } from "@iconify/react";

const ServicesCard = ({ icon, title, description, link }) => {
  return (
    <div className="p-5 rounded-xl hover:shadow-lg transition-all duration-400 ease-in-out flex flex-col justify-between items-center w-[256px] h-[337px] border border-gray-200 bg-white">
      <div className=" bg-green-50 w-[63px] h-[63px] flex items-center justify-center rounded-xl mt-5">
        <Icon icon={icon} width="28" height="28" className=" text-green-500" />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-lg ">{title}</p>
        <p className="text-sm text-gray-400 mb-3">{description}</p>
      </div>

      <a
        href={link}
        className="flex items-center justify-end gap-2 text-green-700 font-medium text-sm w-full text-shadow-green-100 hover:text-shadow-md transition-all duration-300 ease-in-out"
      >
        Learn more
        <Icon icon="iconamoon:arrow-right-2-light" width="20" height="20" />
      </a>
    </div>
  );
};

export default ServicesCard;
