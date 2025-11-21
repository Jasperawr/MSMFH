import React from "react";
import { Icon } from "@iconify/react";

import hallway from "../assets/img/empty-hallway-background.jpg";
import ServicesCards from "./small_components/ServicesCards";

const ServicesSection = () => {
  const services = [
    {
      icon: "meteor-icons:heart",
      title: "Cardiology",
      description: "Comprehensive heart care and cardiovascular services",
      link: "#cardiology",
    },
    {
      icon: "mdi:brain",
      title: "Neurology",
      description: "Advanced neurological diagnostics and treatments",
      link: "#neurology",
    },
    {
      icon: "mdi:tooth-outline",
      title: "Dental Care",
      description: "Complete oral health and dental treatment services",
      link: "#dental",
    },
    {
      icon: "mdi:stethoscope",
      title: "General Medicine",
      description: "Primary care and general health consultations",
      link: "#general-medicine",
    },
    {
      icon: "mdi:mother-nurse",
      title: "Maternity Care",
      description: "Safe pregnancy, labor, and newborn care services",
      link: "#maternity",
    },
    {
      icon: "mdi:ambulance",
      title: "Emergency Services",
      description: "24/7 emergency and critical response care",
      link: "#emergency",
    },
    {
      icon: "mdi:human-male-female-child",
      title: "Pediatrics",
      description: "Healthcare services for infants, children, and teens",
      link: "#pediatrics",
    },
    {
      icon: "mdi:human-capacity-decrease",
      title: "Rehabilitation",
      description: "Physical therapy and recovery programs",
      link: "#rehabilitation",
    },
  ];

  return (
    <section className="flex flex-col items-center py-20 ">
      <div className="w-[1100px] flex justify-between gap-[119px]">
        <div className="flex flex-col items-center gap-1 w-full">
          <div className="flex flex-col items-center gap-2">
            <div className="flex">
              <p className="text-[11px] bg-[#F0FDF4] px-2 py-[2px] rounded-full font-semibold text-[#267F1E] ">
                Our Services
              </p>
            </div>
            <p className="text-[36px] leading-16">Comprehensive Medical Care</p>
          </div>
          <p className=" text-[16px] text-gray-500">
            From preventive care to specialized treatment, we offer a complete
            range of medical services
          </p>

          <div className="flex justify-between flex-wrap pt-6 gap-6 mb-5">
            {/* cards here */}
            {services.map((item) => (
              <ServicesCards key={item.title} {...item} />
            ))}
          </div>

          <a
            href="#"
            className="flex justify-center gap-5 items-center bg-green-600 text-white text-sm  py-2 px-5 rounded-md hover:bg-green-700 transition-all duration-200 ease-in-out"
          >
            Find a Doctor
            <Icon icon="stash:arrow-right-duotone" width="20" height="20" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
