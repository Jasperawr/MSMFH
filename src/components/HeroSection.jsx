import React from "react";
import { Icon } from "@iconify/react";
import hallway from "../assets/img/empty-hallway-background.jpg";

const Hero = () => {
  return (
    <section className="flex flex-col items-center py-14 sm:py-20 bg-white">
      <div className="w-full max-w-[1100px] flex flex-col-reverse md:flex-row justify-between gap-10 md:gap-[119px] px-5">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-7 w-full">
          <div className="flex flex-col gap-4">
            <div className="flex">
              <p className="text-[10px] sm:text-[11px] bg-[#F0FDF4] px-2 py-[2px] rounded-full font-semibold text-[#267F1E]">
                Trusted Healthcare Since 1986
              </p>
            </div>

            <div className="font-sf">
              <p className="text-[42px] sm:text-[58px] leading-[1.1]">
                Your Health,
              </p>
              <p className="text-[42px] sm:text-[58px] leading-[1.1]">
                Our Priority
              </p>
            </div>
          </div>

          <p className="text-[16px] sm:text-[18px] text-gray-500 leading-[1.6]">
            Delivering world-class medical care with compassion, innovation, and
            excellence. Your trusted partner in health for over 40 years.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-row gap-3">
            <a
              href="/ourdoctors"
              className="flex justify-center gap-3 items-center bg-green-600 text-white text-sm py-2.5 px-6 rounded-md hover:bg-green-700 transition-all duration-200"
            >
              Find a Doctor
              <Icon icon="stash:arrow-right-duotone" width="20" height="20" />
            </a>

            <a
              href="#"
              className="flex justify-center gap-3 items-center border border-green-600 text-green-600 text-sm py-2.5 px-6 rounded-md"
            >
              Emergency Services
            </a>
          </div>

          {/* STATISTICS */}
          <div className="flex justify-between border-t border-gray-200 pt-6">
            <div className="flex flex-col gap-1">
              <p className="text-3xl sm:text-4xl text-green-600">40+</p>
              <p className="text-xs sm:text-sm text-gray-400">
                Years of Excellence
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-3xl sm:text-4xl text-green-600">100+</p>
              <p className="text-xs sm:text-sm text-gray-400">Medical Expert</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-3xl sm:text-4xl text-green-600">30K+</p>
              <p className="text-xs sm:text-sm text-gray-400">
                Patients Served
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="w-full flex justify-center md:justify-end">
          <div className="h-[280px] sm:h-[350px] md:h-[490px] w-full sm:w-[400px] md:w-[510px] overflow-hidden box-shadowfight">
            <img src={hallway} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
