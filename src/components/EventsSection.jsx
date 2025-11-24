import React from "react";
import { Icon } from "@iconify/react";

import ServicesCards from "./small_components/ServicesCards";
import EventsCard from "./small_components/EventsCard";

import image1 from "../assets/img/eventsImg/high-angle-doctor-checking-patient.jpg";
import image2 from "../assets/img/eventsImg/close-up-people-studying-language_23-2149300723.jpg";
import image3 from "../assets/img/eventsImg/medium-shot-people-learning-office_23-2149300756.jpg";

const EventsSection = () => {
  const services = [
    {
      img: image1,
      title: "Free Health Screening",
      description:
        "Complimentary health screenings including blood pressure, blood sugar, and BMI measurements.",
      category: "Health Fair",
      time: "9:00 PM - 4:00 PM",
      date: "Nov 22",
      location: "Main Lobby",
      link: "#cardiology",
    },
    {
      img: image2,
      title: "Heart Health Seminar",
      description:
        "Learn about heart disease prevention, symptoms, and treatment options from our cardiology experts.",
      category: "Seminar",
      time: "2:00 PM - 5:00 PM",
      date: "Nov 28",
      location: "Conference Hall",
      link: "#cardiology",
    },
    {
      img: image3,
      title: "Diabetes Management Workshop",
      description:
        "Practical workshop on managing diabetes through diet, exercise, and medication.",
      category: "Health Fair",
      time: "10:00 AM - 12:00 PM",
      date: "Dec 01",
      location: "Wellness Center",
      link: "#cardiology",
    },
  ];

  return (
    <section className="flex flex-col items-center py-20 ">
      <div className="w-[1100px] flex justify-between gap-[119px]">
        <div className="flex flex-col items-center gap-1 w-full">
          <div className="flex flex-col items-center gap-1">
            <div className="flex">
              <p className="text-[11px] bg-[#F0FDF4] px-2 py-[2px] rounded-full font-semibold text-[#267F1E] ">
                Our Services
              </p>
            </div>
            <p className="text-[36px] leading-16">Comprehensive Medical Care</p>
            <p className=" text-[16px] text-gray-500">
              From preventive care to specialized treatment, we offer a complete
              range of medical services
            </p>
          </div>

          <div className="flex justify-between flex-wrap pt-6 gap-6 mb-5">
            {/* cards here */}
            {services.map((item) => (
              <EventsCard key={item.title} layout="vertical" {...item} />
            ))}
          </div>

          <a
            href="#"
            className="flex justify-center gap-5 items-center text-green-500 border border-green-500 text-sm  py-2 px-5 rounded-md"
          >
            View more
            <Icon icon="stash:arrow-right-duotone" width="20" height="20" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
