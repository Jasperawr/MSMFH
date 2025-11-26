import React from "react";
import { Icon } from "@iconify/react";

import lab from "../assets/img/laboratory-team-working-together.jpg";

const WhyUsSection = () => {
  return (
    <section className="flex flex-col items-center py-20 bg-white">
      <div className="w-full max-w-[1100px] flex flex-col lg:flex-row justify-between gap-10 lg:gap-[119px] px-4">
        {/* LEFT TEXT SECTION */}
        <div className="flex flex-col gap-7 w-full">
          <div className="flex flex-col gap-2">
            <div className="flex">
              <p className="text-[11px] bg-[#F0FDF4] px-2 py-[2px] rounded-full font-semibold text-[#267F1E] ">
                Why Choose Us
              </p>
            </div>
            <p className="text-[24px] sm:text-[28px] text-[#333333]">
              Excellence in Healthcare Since 1985
            </p>
            <p className="text-[15px] sm:text-[17px] text-gray-400 leading-5">
              We combine cutting-edge medical technology with compassionate care
              to deliver the best possible outcomes for our patients.
            </p>
          </div>

          {/* FEATURES LIST */}
          <div className="flex flex-col gap-5">
            {[
              {
                title: "World-Class Facilities",
                desc: "State-of-the-art equipment and internationally accredited medical services",
              },
              {
                title: "Expert Medical Team",
                desc: "Board-certified specialists with years of experience and training",
              },
              {
                title: "Patient-Centered Care",
                desc: "Personalized treatment plans focused on your unique health needs",
              },
              {
                title: "24/7 Emergency Care",
                desc: "Round-the-clock emergency services with rapid response teams",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 items-start">
                <div className="bg-green-50 p-3 sm:p-4 flex items-center justify-center rounded-xl">
                  <Icon
                    icon="icon-park-outline:check-one"
                    className="text-green-500"
                    width="22"
                    height="22"
                  />
                </div>
                <div>
                  <p className="text-[18px] sm:text-[20px] text-green-600">
                    {item.title}
                  </p>
                  <p className="text-[13px] text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[510px] h-[350px] sm:h-[450px] md:h-[490px] overflow-hidden rounded-2xl box-shadowfight">
            <img src={lab} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
