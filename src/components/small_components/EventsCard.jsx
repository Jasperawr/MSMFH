import React from "react";
import { Icon } from "@iconify/react";

const EventsCard = ({
  img,
  title,
  description,
  category,
  date,
  time,
  location,
  link,
}) => {
  const [month, day] = date.split(" ");
  return (
    <div className=" rounded-xl hover:shadow-lg transition-all duration-400 ease-in-out flex flex-col justify-between w-[338px] h-[420px] border border-gray-200 bg-white overflow-hidden">
      <div className=" relative overflow-hidden w-full h-full  ">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover scale-125"
        />
        <div className="absolute z-40 top-0 py-3 px-3 w-full flex justify-between">
          <div className="flex flex-col">
            <p className="text-[11px] bg-green-600 px-2 rounded-full text-white ">
              {category}
            </p>
          </div>
          <div className="rounded-md bg-white p-3 text-center flex flex-col">
            <p className="text-sm text-gray-500">{month}</p>
            <p className="text-[36px] text-green-500 ">{day}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between p-4 pb-7 h-full">
        <div className="flex flex-col gap-2">
          <p className="text-lg ">{title}</p>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[12px] flex items-center">
            <Icon
              icon="famicons:time-outline"
              width="24"
              height="24"
              className="mr-2 text-green-400"
            />
            {time}
          </p>
          <p className="text-[12px] flex items-center">
            <Icon
              icon="mynaui:location"
              width="24"
              height="24"
              className="mr-2 text-green-400"
            />
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
