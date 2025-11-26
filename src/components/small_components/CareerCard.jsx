import React from "react";
import { Icon } from "@iconify/react";

const CareerCard = ({
  img,
  title,
  description,
  date,
  link,
  layout = "vertical", // vertical (default) OR horizontal
}) => {
  const isHorizontal = layout === "horizontal";

  return (
    <div
      className={
        isHorizontal
          ? "rounded-xl hover:shadow-lg transition-all duration-400 ease-in-out flex w-[700px] h-[250px] border border-gray-200 bg-white overflow-hidden"
          : "rounded-xl hover:shadow-lg transition-all duration-400 ease-in-out flex flex-col justify-between w-[338px] h-[420px] border border-gray-200 bg-white overflow-hidden"
      }
    >
      {/* IMAGE */}
      <div
        className={
          isHorizontal
            ? "relative overflow-hidden w-[45%] h-full"
            : "relative overflow-hidden w-full h-full"
        }
      >
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover scale-125"
        />
      </div>

      {/* CONTENT */}
      <div
        className={
          isHorizontal
            ? "flex flex-col justify-between p-4 w-[55%]"
            : "flex flex-col justify-between p-4 pb-7 h-full"
        }
      >
        {/* KEEPING EXACT VERTICAL DESIGN */}
        {!isHorizontal && (
          <div className="flex flex-col gap-2">
            <p className="text-lg">{title}</p>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        )}

        {/* HORIZONTAL VERSION CONTENT (slightly adjusted but same styling) */}
        {isHorizontal && (
          <div className="flex flex-col gap-2">
            <p className="text-lg">{title}</p>
            <p className="text-sm text-gray-500 line-clamp-3">{description}</p>
          </div>
        )}

        <div className="flex flex-col gap-3">
          <p className="text-xs text-gray-900">{date}</p>
          {/* <a
            href={link}
            className="w-full text-center border rounded-md py-1.5 text-sm hover:bg-green-600 hover:text-white hover:border-green-700 transition-all duration-300 ease-in-out"
          >
            View Details
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
