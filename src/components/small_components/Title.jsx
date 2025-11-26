import React from "react";
import imgBG from "../../assets/img/flat-lay-pills-green-background.jpg";

const Title = ({ tag, title, subtitle }) => {
  return (
    <header className="relative flex flex-col items-center py-16 sm:py-20 overflow-hidden">
      {/* Background Image */}
      <img
        src={imgBG}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[65%_35%]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#21A341]/80"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1100px] flex flex-col px-4 sm:px-6 lg:px-0">
        {tag && (
          <p className="text-xs sm:text-sm bg-[#F0FDF4] px-2 py-1 mb-2 rounded-full text-[#267F1E] w-fit">
            {tag}
          </p>
        )}

        <p className="text-white text-2xl sm:text-3xl md:text-4xl leading-snug">
          {title}
        </p>

        {subtitle && (
          <p className="text-[#E6E6E6] text-sm sm:text-base mt-1 max-w-[600px]">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
};

export default Title;
