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

const Leadership = () => {
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
            <section>
              <h2 className="text-2xl font-semibold mb-4">Executives</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <p className="text-gray-500">Medical Director</p>
                <p className="font-semibold">Dr. Maria Isabel D. Santos</p>

                <p className="text-gray-500">Hospital Administrator</p>
                <p className="font-semibold">Mr. Rafael L. Cruz</p>

                <p className="text-gray-500">Quality Assurance Officer</p>
                <p className="font-semibold">Ms. Charlene T. Bautista</p>

                <p className="text-gray-500">Finance and Accounting Officer</p>
                <p className="font-semibold">Mr. Jerome D. Villanueva</p>

                <p className="text-gray-500">Human Resources Manager</p>
                <p className="font-semibold">Ms. Liza M. De Leon</p>
              </div>
            </section>

            {/* Clinical Services Team */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Clinical Services Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <p className="text-gray-500">Chief of Clinics</p>
                <p className="font-semibold">Dr. John Carlo P. Mendoza</p>

                <p className="text-gray-500">Head of Emergency Department</p>
                <p className="font-semibold">Dr. Raymond G. Flores</p>

                <p className="text-gray-500">Head of Laboratory Services</p>
                <p className="font-semibold">Dr. Kristine Mae V. Robles</p>

                <p className="text-gray-500">Head of Radiology</p>
                <p className="font-semibold">Dr. Nicole Ann P. Gutierrez</p>

                <p className="text-gray-500">
                  Head of Outpatient Department (OPD)
                </p>
                <p className="font-semibold">Dr. Paolo M. Reyes</p>

                <p className="text-gray-500">Head of Cardiology Unit</p>
                <p className="font-semibold">Dr. Angela D. Lim</p>
              </div>
            </section>

            {/* Patient Care Team */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Patient Care Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ">
                <p className="text-gray-500">Chief Nursing Officer</p>
                <p className="font-semibold">Ms. Angela R. Torres, RN, MAN</p>

                <p className="text-gray-500">Inpatient Ward Supervisor</p>
                <p className="font-semibold">Ms. Janine E. Morales, RN</p>

                <p className="text-gray-500">Outpatient Services Supervisor</p>
                <p className="font-semibold">Ms. Lea A. Dela Cruz, RN</p>

                <p className="text-gray-500">Operating Room Supervisor</p>
                <p className="font-semibold">Ms. Rona T. Vergara, RN</p>

                <p className="text-gray-500">Infection Control Nurse</p>
                <p className="font-semibold">Ms. Paula C. Jimenez, RN</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Leadership;
