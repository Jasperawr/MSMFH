import React from "react";

import imgBG from "../../assets/img/flat-lay-pills-green-background.jpg";

const Title = ({ tag, title, subtitle }) => {
  return (
    <header className="relative flex flex-col items-center py-20 overflow-hidden">
      <img
        src={imgBG}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover object-[65%_35%]`}
      />

      <div className="absolute inset-0 bg-[#21A341]/80"></div>

      <div className="relative z-10 w-[1100px] flex flex-col">
        {tag && (
          <p className="text-[11px] bg-[#F0FDF4] px-2 py-0.5 mb-2 rounded-full   text-[#267F1E] w-fit">
            {tag}
          </p>
        )}

        <p className="text-white text-[36px]">{title}</p>

        {subtitle && (
          <p className="text-[#E6E6E6] text-[16px] mt-1">{subtitle}</p>
        )}
      </div>
    </header>
  );
};

export default Title;
