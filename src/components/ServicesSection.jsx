import React from "react";
import { Icon } from "@iconify/react";
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
    <section className="flex flex-col items-center py-16 sm:py-20">
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1100px] px-5 flex flex-col items-center gap-6">
        {/* TITLE */}
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-[10px] sm:text-[11px] bg-[#F0FDF4] px-3 py-[3px] rounded-full font-semibold text-[#267F1E]">
            Our Services
          </p>

          <p className="text-[24px] sm:text-[36px] leading-tight text-[#333]">
            Comprehensive Medical Care
          </p>

          <p className="text-[15px] sm:text-[16px] text-gray-500 max-w-[650px]">
            From preventive care to specialized treatment, we offer a complete
            range of medical services.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full pt-4">
          {services.map((item) => (
            <ServicesCards key={item.title} {...item} />
          ))}
        </div>

        {/* BUTTON */}
        <a
          href="/services"
          className="flex justify-center gap-3 items-center bg-green-600 text-white text-sm py-2.5 px-6 rounded-md hover:bg-green-700 transition-all duration-200"
        >
          Find a Doctor
          <Icon icon="stash:arrow-right-duotone" width="20" height="20" />
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;
