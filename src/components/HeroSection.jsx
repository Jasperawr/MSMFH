import React from "react";
import { Icon } from "@iconify/react";

import hallway from "../assets/img/empty-hallway-background.jpg";

const Hero = () => {
  return (
    <section className="flex flex-col items-center py-20 bg-white">
      <div className="w-[1100px] flex justify-between gap-[119px]">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-4">
            <div className="flex">
              <p className="text-[11px] bg-[#F0FDF4] px-2 py-[2px] rounded-full font-semibold text-[#267F1E] ">
                Trusted Healthcare Since 1985
              </p>
            </div>
            <div className="font-sf">
              <p className="text-[58px] leading-16">Your Health,</p>
              <p className="text-[58px] leading-16">Our Priority</p>
            </div>
          </div>
          <p className=" text-[18px] text-gray-500">
            Delivering world-class medical care with compassion, innovation, and
            excellence. Your trusted partner in health for over 40 years.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="flex justify-center gap-5 items-center bg-green-600 text-white text-sm  py-2 px-5 rounded-md rounded-md hover:bg-green-700 transition-all duration-200 ease-in-out"
            >
              Find a Doctor
              <Icon icon="stash:arrow-right-duotone" width="20" height="20" />
            </a>
            <a
              href="#"
              className="flex justify-center gap-3 items-center border border-green-600 text-green-600 text-sm  py-2 px-5 rounded-md"
            >
              Emergency Services
            </a>
          </div>
          <div className="flex justify-between border-t border-gray-200 pt-6">
            <div className="flex flex-col gap-1">
              <p className="text-4xl text-green-600">40+</p>
              <p className="text-sm text-gray-400">Years of Excellence</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-4xl text-green-600">100+</p>
              <p className="text-sm text-gray-400">Medical Expert</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-4xl text-green-600">30K+</p>
              <p className="text-sm text-gray-400">Patients Served</p>
            </div>
          </div>
        </div>
        <div>
          <div className="h-[490px] w-[510px] overflow-hidden rounded-2xl box-shadowfight">
            <img src={hallway} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
