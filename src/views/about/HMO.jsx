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
import HMOCard from "../../components/small_components/HMOCard";

import { Icon } from "@iconify/react";
import { useMediaQuery } from "react-responsive";

import dummy from "../../assets/img/dummy.jpg";

const HMO = () => {
  const tabs = [
    { label: "About Us", link: "aboutus" },
    { label: "History", link: "history" },
    { label: "Mission & Vision", link: "mission&vision" },
    { label: "Quality Policy", link: "qualitypolicy" },
    { label: "HMO", link: "hmo" },
    { label: "Leadership", link: "leadership" },
    { label: "Careers", link: "careers" },
  ];

  const hmos = [
    { name: "Wellcare Health Systems, Inc.", logo: "" },
    { name: "Value Care Health Systems, Inc.", logo: "" },
    { name: "Philhealth Care, Inc.", logo: "" },
    { name: "Pacific Cross Health Care, Inc..", logo: "" },
    { name: "Maxicare Health Corp.", logo: "" },
    { name: "Insular Health Care, Inc.", logo: "" },
    { name: "Intellicare / Asalus Corp.", logo: "" },
    { name: "Kaiser Healthcare", logo: "" },
    { name: "Life & Health HMP, Inc", logo: "" },
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
            <div className="flex flex-wrap gap-8">
              {hmos.map((hmo, index) => (
                <HMOCard key={index} name={hmo.name} logo={hmo.logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HMO;
