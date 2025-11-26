import React, { useState, useEffect } from "react";
import Nav from "../../components/small_components/Nav";
import Title from "../../components/small_components/Title";
import ContactHead from "../../components/ContactHead";
import Footer from "../../components/Footer";
import TabList from "../../components/small_components/TabList";
import CareerCard from "../../components/small_components/CareerCard";

import image1 from "../../assets/img/career/1.jpg";
import image2 from "../../assets/img/career/2.jpg";
import image3 from "../../assets/img/career/3.jpg";
import image4 from "../../assets/img/career/4.jpg";

const Career = () => {
  const tabs = [
    { label: "About Us", link: "aboutus" },
    { label: "History", link: "history" },
    { label: "Mission & Vision", link: "mission&vision" },
    { label: "Quality Policy", link: "qualitypolicy" },
    { label: "HMO", link: "hmo" },
    { label: "Leadership", link: "leadership" },
    { label: "Careers", link: "careers" },
  ];

  const services = [
    {
      img: image1,
      title: "Staff Nurse",
      description:
        "Provides direct patient care, monitors health conditions, and supports doctors in treatment.",
      date: "October 31, 2025",
      link: "#cardiology",
    },
    {
      img: image2,
      title: "Radiologic Technologist",
      description:
        "Operates imaging equipment like X-ray and CT to help diagnose medical conditions.",
      date: "October 31, 2025",
      link: "#cardiology",
    },
    {
      img: image3,
      title: "Medical Technologist",
      description:
        "Performs laboratory tests on blood and other samples to assist in disease detection.",
      date: "October 31, 2025",
      link: "#cardiology",
    },
    {
      img: image4,
      title: "Pharmacist",
      description:
        "Prepares and dispenses medications while ensuring safe and proper patient use.",
      date: "October 31, 2025",
      link: "#cardiology",
    },
  ];

  return (
    <div>
      <ContactHead />
      <Nav />
      <Title
        tag="News & Events"
        title="Community Health Initiatives"
        subtitle="Showcasing our ongoing events, outreach programs, and wellness activities designed to promote health education and support community well-being."
      />
      <div className="w-full flex flex-col items-center">
        <div className="flex md:flex-row flex-col md:items-start items-center gap-6 my-10 md:w-[1100px]">
          <div className="flex flex-col ms:flex-row relative">
            <TabList items={tabs} />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap justify-center gap-6">
              {services.map((item) => (
                <CareerCard key={item.title} layout="vertical" {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
