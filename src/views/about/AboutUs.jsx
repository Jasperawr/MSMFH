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

import image1 from "../../assets/img/about/aboutus/medical-instrument-paperwork-focus-foreground-close-up-generated-by-ai.jpg";
import image2 from "../../assets/img/about/history/close-up-stethoscope-with-other-medical-elements.jpg";
import image3 from "../../assets/img/about/history/staircases-old-abandoned-building-with-dirty-walls.jpg";

const AboutUs = () => {
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
            <div className="w-full max-w-[1100px] mx-auto">
              <Carousel images={[image1, image2, image3]} />
            </div>
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
                About Us
              </p>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
                Riverside Medical Center is a Level 2 private healthcare
                institution established in 1992, committed to providing
                accessible, affordable, and high-quality medical services to the
                community. Located in the heart of the city, the hospital serves
                as a trusted center for comprehensive patient care, combining
                advanced medical technology with compassionate service.
                <br />
                <br />
                With over 30 years of experience, Riverside Medical Center has
                grown from a small 30-bed facility into a modern 150-bed
                hospital equipped with state-of-the-art diagnostic laboratories,
                surgical theaters, intensive care units, and specialized
                departments including Internal Medicine, Pediatrics, Obstetrics
                and Gynecology, Surgery, and Emergency Care.
                <br />
                <br />
                The hospital is accredited by the Department of Health (DOH) and
                recognized by PhilHealth as a trusted healthcare provider. It
                continuously upgrades its facilities and services to meet
                national healthcare standards and patient expectations.
                <br />
                <br />
                Beyond hospital walls, Riverside Medical Center extends its
                commitment to public service through community outreach
                programs, free medical missions, and health awareness campaigns
                aimed at promoting wellness and preventive care.
                <br />
                <br />
                Guided by its mission to deliver patient-centered and
                compassionate healthcare, Riverside Medical Center remains
                dedicated to advancing medical excellence and serving as a
                reliable partner in improving the lives of individuals and
                families in the region.
              </p>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
