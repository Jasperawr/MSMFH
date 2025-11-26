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

const History = () => {
  const tabs = [
    { label: "About Us", link: "/about/aboutus" },
    { label: "History", link: "/about/history" },
    { label: "Mission & Vision", link: "/about/mission&vision" },
    { label: "Quality Policy", link: "/about/qualitypolicy" },
    { label: "HMO", link: "/about/hmo" },
    { label: "Leadership", link: "/about/leadership" },
    { label: "Careers", link: "/about/careers" },
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
                History
              </p>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
                Established in 1992, Riverside Medical Center started as a small
                30-bed community hospital founded by a group of local doctors
                who shared a vision of providing affordable and reliable
                healthcare to nearby towns. At the time, medical facilities in
                the area were limited, and many residents had to travel far for
                proper treatment. The founders aimed to change that by building
                a hospital that offered both quality and compassion close to
                home.
                <br />
                <br />
                In its early years, Riverside Medical Center operated with only
                a few departments — General Medicine, Pediatrics, and Minor
                Surgery. Despite limited resources, the hospital quickly gained
                the trust of the community through dedicated service and
                personalized care. As patient numbers grew, the hospital
                expanded its facilities and began offering specialized services,
                including Obstetrics and Gynecology, Internal Medicine, and
                Emergency Care by the late 1990s.
                <br />
                <br />
                By 2008, the hospital completed its major expansion project,
                increasing its capacity to 120 beds and adding new diagnostic
                and laboratory facilities. It was also during this time that
                Riverside earned its Department of Health Level 2 accreditation
                and became an accredited PhilHealth healthcare provider,
                ensuring more accessible services to a wider range of patients.
                <br />
                <br />
                In recent years, Riverside Medical Center has continued to
                embrace innovation — introducing digital imaging, electronic
                medical records, and upgraded operating theaters to meet modern
                healthcare standards. The hospital also launched various
                community health programs, including free medical missions,
                vaccination drives, and health awareness campaigns.
                <br />
                <br />
                Today, after more than three decades of service, Riverside
                Medical Center stands as a trusted institution dedicated to
                delivering excellence in patient care and fostering the health
                and well-being of the community it serves.
              </p>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default History;
