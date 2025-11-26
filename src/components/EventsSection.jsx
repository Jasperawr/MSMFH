import React from "react";
import { Icon } from "@iconify/react";

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
    <section className="flex flex-col items-center py-16 px-4 md:px-6 lg:px-0">
      <div className="w-full max-w-[1100px] flex flex-col items-center gap-6">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-[10px] sm:text-[11px] bg-[#F0FDF4] px-3 py-1 rounded-full font-semibold text-[#267F1E]">
            News & Events
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl ">
            Comprehensive Medical Care
          </p>
          <p className="text-sm sm:text-base text-gray-500 max-w-[600px]">
            From preventive care to specialized treatment, we offer a complete
            range of medical services
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6 pt-6 mb-5">
          {services.map((item) => (
            <EventsCard key={item.title} layout="vertical" {...item} />
          ))}
        </div>

        {/* Button */}
        <a
          href="/news&events/all"
          className="flex justify-center gap-2 sm:gap-3 items-center text-green-500 border border-green-500 text-sm py-2 px-4 sm:px-6 rounded-md hover:bg-green-50 transition"
        >
          View more
          <Icon icon="stash:arrow-right-duotone" width="20" height="20" />
        </a>
      </div>
    </section>
  );
};

export default EventsSection;
