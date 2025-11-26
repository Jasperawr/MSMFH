import React from "react";
import { Icon } from "@iconify/react";
import lab from "../../assets/img/eventsimg/high-angle-doctor-checking-patient.jpg";

const HeroHeader = () => {
  return (
    <section className="flex flex-col items-center py-14 sm:py-20">
      <div className="w-full max-w-[1100px] flex flex-col-reverse md:flex-row justify-between gap-10 md:gap-[119px] px-5">
        {/* LEFT TEXT */}
        <div className="flex flex-col gap-7 w-full">
          <div className="flex flex-col gap-4 pt-5 sm:pt-10">
            <div className="flex flex-col gap-2">
              <div className="flex">
                <p className="text-[10px] sm:text-[11px] bg-green-600 px-2 py-[2px] rounded-full font-semibold text-white">
                  Events
                </p>
              </div>

              <p className="text-[24px] sm:text-[28px] text-[#333333]">
                Free Health Screening
              </p>

              <p className="text-[15px] sm:text-[17px] text-gray-400 leading-6">
                Take charge of your health with our complimentary health
                screening program. Services include blood pressure monitoring,
                blood sugar testing, and BMI measurement. Participants will also
                receive brief health advice from our on-site medical
                professionals.
              </p>
            </div>

            <div>
              <p className="text-[20px] sm:text-[24px] text-green-600">Goal</p>
              <p className="text-[15px] sm:text-[17px] text-gray-400 leading-6">
                To encourage early detection of common health conditions and
                promote regular health check-ups.
              </p>
            </div>
          </div>

          {/* DETAILS */}
          <div className="flex flex-col gap-1">
            <p className="text-[14px] flex items-center text-gray-500">
              <Icon
                icon="iconoir:calendar"
                width="20"
                height="20"
                className="mr-2 text-green-400"
              />
              November 22, 2025
            </p>
            <p className="text-[14px] flex items-center text-gray-500">
              <Icon
                icon="famicons:time-outline"
                width="20"
                height="20"
                className="mr-2 text-green-400"
              />
              9:00 AM - 4:00 PM
            </p>
            <p className="text-[14px] flex items-center text-gray-500">
              <Icon
                icon="mynaui:location"
                width="20"
                height="20"
                className="mr-2 text-green-400"
              />
              Hospital Lobby, Ground Floor
            </p>
          </div>
        </div>

        {/* IMAGE */}
        <div className="w-full flex justify-center md:justify-end">
          <div className="h-[280px] sm:h-[350px] md:h-[490px] w-full sm:w-[400px] md:w-[510px] overflow-hidden rounded-2xl box-shadowfight">
            <img src={lab} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHeader;
