import React, { useState, useEffect } from "react";
import Nav from "../components/small_components/Nav";
import Title from "../components/small_components/Title";
import ContactHead from "../components/ContactHead";
import Filter from "../components/small_components/Filter";
import DoctorCard from "../components/small_components/DoctorCard";
import Footer from "../components/Footer";
import EventsCard from "../components/small_components/EventsCard";
import HeroHeader from "../components/small_components/HeroHeader";
import TabList from "../components/small_components/TabList";

import { Icon } from "@iconify/react";
import { useMediaQuery } from "react-responsive";

import image1 from "../assets/img/eventsImg/high-angle-doctor-checking-patient.jpg";
import image2 from "../assets/img/eventsImg/close-up-people-studying-language_23-2149300723.jpg";
import image3 from "../assets/img/eventsImg/medium-shot-people-learning-office_23-2149300756.jpg";

const NewAndEvents = () => {
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

  const tabs = [
    { label: "All", link: "all" },
    { label: "News", link: "news" },
    { label: "Events", link: "events" },
    { label: "Program", link: "program" },
    { label: "Seminar", link: "seminar" },
  ];

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div>
      <ContactHead />
      <Nav />
      <Title
        tag="News & Events"
        title="Community Health Initiatives"
        subtitle="Showcasing our ongoing events, outreach programs, and wellness activities designed to promote health education and support community well-being."
      />
      <HeroHeader />
      <Filter
        showSearch={true}
        showSpecialization={false}
        showSubSpecialization={false}
        showClear={false}
      />
      <div className="w-full flex flex-col items-center">
        <div className="flex md:flex-row flex-col md:items-start items-center gap-6 mb-10 w-[1100px]">
          <div className="flex flex-col ms:flex-row relative">
            <TabList items={tabs} />
          </div>
          <div className="flex flex-col gap-6">
            {/* cards here */}
            {services.map((item) => (
              <EventsCard
                key={item.title}
                layout={isMobile ? "vertical" : "horizontal"}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewAndEvents;
