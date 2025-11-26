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

import image1 from "../../assets/img/about/history/beautiful-view-interior-old-abandoned-building.jpg";
import image2 from "../../assets/img/about/history/close-up-stethoscope-with-other-medical-elements.jpg";
import image3 from "../../assets/img/about/history/staircases-old-abandoned-building-with-dirty-walls.jpg";

const MissionVision = () => {
  const tabs = [
    { label: "About Us", link: "aboutus" },
    { label: "History", link: "history" },
    { label: "Mission & Vision", link: "mission&vision" },
    { label: "Quality Policy", link: "qualitypolicy" },
    { label: "HMO", link: "hmo" },
    { label: "Leadership", link: "leadership" },
    { label: "Careers", link: "careers" },
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
                Mission
              </p>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
                To provide high-quality, patient-centered healthcare that is
                accessible, compassionate, and driven by medical excellence —
                improving the health and well-being of the community we serve.
              </p>
            </article>
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
                Vision
              </p>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
                To be a leading healthcare institution recognized for excellence
                in patient care, innovation, and community service — setting the
                standard for trusted and sustainable healthcare in the region.
              </p>
            </article>
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
                Mission
              </p>

              <p className="text-sm sm:text-base lg:text-lg  text-gray-700">
                1. <strong>Compassion</strong> – We care for every patient with
                empathy, kindness, and respect.
                <br />
                2. <strong>Integrity</strong> – We uphold honesty,
                professionalism, and accountability in all that we do.
                <br />
                3. <strong>Excellence</strong> – We continuously strive for the
                highest standards in clinical care and service.
                <br />
                4. <strong>Teamwork</strong> – We value collaboration and open
                communication among our staff and partners.
                <br />
                5. <strong>Innovation</strong> – We embrace modern technology
                and continuous learning to enhance patient outcomes.
                <br />
                6. <strong>Commitment</strong> – We dedicate ourselves to the
                well-being of our patients and the communities we serve.
              </p>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MissionVision;
