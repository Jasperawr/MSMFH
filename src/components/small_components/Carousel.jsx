import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full overflow-hidden sm:rounded-lg">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className="
              w-full 
              h-[500px]           /* mobile */
              sm:h-[280px]        /* small screens */
              md:h-[350px]        /* tablet */
              lg:h-[430px]        /* laptop */
              xl:h-[500px]        /* large screens */
              object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="
          absolute left-2 sm:left-3 
          top-1/2 -translate-y-1/2 
          text-white 
          text-2xl sm:text-3xl md:text-4xl
          px-2 sm:px-3 py-1
          sm:rounded-full
         
          transition
        "
      >
        ‹
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="
          absolute right-2 sm:right-3 
          top-1/2 -translate-y-1/2 
          text-white 
          text-2xl sm:text-3xl md:text-4xl
          px-2 sm:px-3 py-1
          rounded-full
          
          transition
        "
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`cursor-pointer rounded-full transition 
              ${
                current === index
                  ? "bg-white w-1.5 h-1.5"
                  : "bg-white/40 w-1.5 h-1.5"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
