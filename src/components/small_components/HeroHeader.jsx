import React from "react";
import { Icon } from "@iconify/react";

import lab from "../../assets/img/eventsimg/high-angle-doctor-checking-patient.jpg";

const HeroHeader = () => {
  return (
    <section className="flex flex-col items-center py-20">
      <div className="w-[1100px] flex justify-between gap-[119px]">
        <div className="flex flex-col gap-7 w-full">
          <div className="flex flex-col gap-4 pt-10">
            <div className="flex flex-col gap-2">
              <div className="flex">
                <p className="text-[11px] bg-green-600 px-2 py-[2px] rounded-full font-semibold text-white ">
                  Events
                </p>
              </div>
              <p className="text-[28px] text-[#333333]">
                Free Health Screening
              </p>
              <p className=" text-[17px] text-gray-400 leading-5">
                Take charge of your health with our complimentary health
                screening program. Services include blood pressure monitoring,
                blood sugar testing, and BMI measurement. Participants will also
                receive brief health advice from our on-site medical
                professionals.
              </p>
            </div>
            <div>
              <p className="text-[24px] text-green-600">Goal</p>
              <p className=" text-[17px] text-gray-400 leading-5">
                To encourage early detection of common health conditions and
                promote regular health check-ups.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[14px] flex items-center text-gray-500">
              <Icon
                icon="iconoir:calendar"
                width="24"
                height="24"
                className="mr-2 text-green-400"
              />
              November 22, 2025
            </p>
            <p className="text-[14px] flex items-center text-gray-500">
              <Icon
                icon="famicons:time-outline"
                width="24"
                height="24"
                className="mr-2 text-green-400"
              />
              9:00 AM - 4:00 PM
            </p>
            <p className="text-[14px] flex items-center text-gray-500">
              <Icon
                icon="mynaui:location"
                width="24"
                height="24"
                className="mr-2 text-green-400"
              />
              Hospital Lobby, Ground Floor
            </p>
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

export default HeroHeader;
