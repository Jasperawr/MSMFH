import React from "react";
import Nav from "../../components/small_components/Nav";
import Title from "../../components/small_components/Title";
import ContactHead from "../../components/ContactHead";
import Filter from "../../components/small_components/Filter";
import Footer from "../../components/Footer";
import ServicesCards from "../../components/small_components/ServicesCards";

const Facilities = () => {
  const services = [
    {
      icon: "mdi:hospital-building",
      title: "Intensive Care Unit (ICU)",
      description: "Advanced life support and critical care monitoring",
      link: "#icu",
    },
    {
      icon: "material-symbols-light:surgical",
      title: "Operating Theaters / Surgical Suites",
      description: "Fully equipped for general and specialized surgeries",
      link: "#operating-theater",
    },
    {
      icon: "mdi:microscope",
      title: "Diagnostics & Imaging Labs",
      description: "X-ray, MRI, CT scans, and ultrasound imaging",
      link: "#diagnostics",
    },
    {
      icon: "mdi:pharmacy",
      title: "Pharmacy",
      description: "On-site pharmacy for prescriptions and counseling",
      link: "#pharmacy",
    },
    {
      icon: "mdi:run-fast",
      title: "Rehabilitation Center",
      description: "Physical and occupational therapy services",
      link: "#rehab-center",
    },
    {
      icon: "mdi:food-croissant",
      title: "Cafeteria / Waiting Areas",
      description: "Comfortable patient and visitor facilities",
      link: "#cafeteria",
    },
    {
      icon: "mdi:baby-carriage",
      title: "Labor & Delivery Rooms",
      description: "Private and safe birthing suites",
      link: "#labor-delivery",
    },
  ];

  return (
    <div>
      <ContactHead />
      <Nav />
      <Title
        tag="Our Services"
        title="Comprehensive Medical Care"
        subtitle="Highly qualified specialists committed to providing exceptional patient care"
      />
      <Filter
        showSearch={true}
        showSpecialization={false}
        showSubSpecialization={false}
        showClear={false}
      />

      <div className="w-full flex flex-col items-center">
        <div className="flex flex-wrap pt-6 gap-6 mb-20 w-[1100px]">
          {/* cards here */}
          {services.map((item) => (
            <ServicesCards key={item.title} {...item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Facilities;
