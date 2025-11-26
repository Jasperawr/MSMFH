import React, { useState, useEffect } from "react";
import Nav from "../../components/small_components/Nav";
import Title from "../../components/small_components/Title";
import ContactHead from "../../components/ContactHead";
import Filter from "../../components/small_components/Filter";
import DoctorCard from "../../components/small_components/DoctorCard";
import Footer from "../../components/Footer";
import EventsCard from "../../components/small_components/EventsCard";
import HeroHeader from "../../components/small_components/HeroHeader";
import TabList from "../../components/small_components/TabList";
import Carousel from "../../components/small_components/Carousel";

import { Icon } from "@iconify/react";
import { useMediaQuery } from "react-responsive";

import dummy from "../../assets/img/about/history/beautiful-view-interior-old-abandoned-building.jpg";

const QualityPolicy = () => {
  const tabs = [
    { label: "About Us", link: "/about/aboutus" },
    { label: "History", link: "/about/history" },
    { label: "Mission & Vision", link: "/about/mission&vision" },
    { label: "Quality Policy", link: "/about/qualitypolicy" },
    { label: "HMO", link: "/about/hmo" },
    { label: "Leadership", link: "/about/leadership" },
    { label: "Careers", link: "/about/careers" },
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
            <article
              className="
                flex flex-col gap-4 
                w-full 
                max-w-[900px]        /* keeps text readable on large screens */
                mx-auto              /* centers the text container */
                px-4 sm:px-6 lg:px-0 /* responsive horizontal padding */
              "
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                Quality Policy
              </p>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
                At Marilao Saint Michaela Family Hospital, we are committed to
                providing safe, compassionate, and high-quality healthcare
                services to every patient we serve. We strive for excellence in
                clinical care, patient safety, and customer satisfaction through
                continuous improvement, teamwork, and adherence to ethical and
                professional standards.
                <br />
                <br />
                We pledge to: <br />
                1. Deliver patient-centered care that respects dignity, privacy,
                and cultural values. <br />
                2. Maintain a safe environment through strict compliance with
                healthcare standards and regulations. <br />
                3. Continuously enhance the competence of our healthcare
                professionals through training and development. <br />
                4. Implement evidence-based practices and innovative healthcare
                solutions. <br />
                5. Regularly evaluate and improve our quality management system
                to meet and exceed patient expectations.
                <br />
                <br />
                Our goal is to be recognized as a trusted healthcare institution
                that promotes wellness, saves lives, and strengthens the health
                of the community we serve.
              </p>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QualityPolicy;
