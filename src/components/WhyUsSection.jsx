import React from "react";
import { Icon } from "@iconify/react";

import lab from "../assets/img/laboratory-team-working-together.jpg";

const WhyUsSection = () => {
  return (
    <section className="flex flex-col items-center py-20 bg-white">
      <div className="w-[1100px] flex justify-between gap-[119px]">
        <div className="flex flex-col gap-7 w-full">
          <div className="flex flex-col gap-2">
            <div className="flex">
              <p className="text-[11px] bg-[#F0FDF4] px-2 py-[2px] rounded-full font-semibold text-[#267F1E] ">
                Why Choose Us
              </p>
            </div>
            <p className="text-[28px] text-[#333333]">
              Excellence in Healthcare Since 1985
            </p>
            <p className=" text-[17px] text-gray-400 leading-5">
              We combine cutting-edge medical technology with compassionate care
              to deliver the best possible outcomes for our patients.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex gap-2 items-start">
              <div className=" bg-green-50 p-4 flex items-center justify-center rounded-xl">
                <Icon
                  icon="icon-park-outline:check-one"
                  width="28"
                  height="28"
                  className="text-green-500"
                />
              </div>
              <div>
                <p className="text-[20px] text-green-600">
                  World-Class Facilities
                </p>
                <p className="text-[13px] text-gray-400">
                  State-of-the-art equipment and internationally accredited
                  medical services
                </p>
              </div>
            </div>

            <div className="flex gap-2 items-start">
              <div className=" bg-green-50 p-4 flex items-center justify-center rounded-xl">
                <Icon
                  icon="icon-park-outline:check-one"
                  width="28"
                  height="28"
                  className="text-green-500"
                />
              </div>
              <div>
                <p className="text-[20px] text-green-600">
                  Expert Medical Team
                </p>
                <p className="text-[13px] text-gray-400">
                  Board-certified specialists with years of experience and
                  training
                </p>
              </div>
            </div>

            <div className="flex gap-2 items-start">
              <div className=" bg-green-50 p-4 flex items-center justify-center rounded-xl">
                <Icon
                  icon="icon-park-outline:check-one"
                  width="28"
                  height="28"
                  className="text-green-500"
                />
              </div>
              <div>
                <p className="text-[20px] text-green-600">
                  Patient-Centered Care
                </p>
                <p className="text-[13px] text-gray-400">
                  Personalized treatment plans focused on your unique health
                  needs
                </p>
              </div>
            </div>

            <div className="flex gap-2 items-start">
              <div className=" bg-green-50 p-4 flex items-center justify-center rounded-xl">
                <Icon
                  icon="icon-park-outline:check-one"
                  width="28"
                  height="28"
                  className="text-green-500"
                />
              </div>
              <div>
                <p className="text-[20px] text-green-600">
                  24/7 Emergency Care
                </p>
                <p className="text-[13px] text-gray-400 text-wrap">
                  Round-the-clock emergency services with rapid response teams
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="h-[490px] w-[510px] overflow-hidden rounded-2xl box-shadowfight">
            <img src={lab} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
