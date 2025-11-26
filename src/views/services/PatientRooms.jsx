import React from "react";
import Nav from "../../components/small_components/Nav";
import Title from "../../components/small_components/Title";
import ContactHead from "../../components/ContactHead";
import Filter from "../../components/small_components/Filter";
import Footer from "../../components/Footer";
import ServicesCards from "../../components/small_components/ServicesCards";

const PatientRooms = () => {
  const services = [
    {
      icon: "mdi:bed",
      title: "Private Rooms",
      description:
        "Single-bed rooms with private bathroom facilities for comfort and privacy",
      link: "#private-room",
    },
    {
      icon: "mdi:bed-double",
      title: "Semi-Private Rooms",
      description: "Shared rooms for two patients with privacy features",
      link: "#semi-private-room",
    },
    {
      icon: "material-symbols-light:ward",
      title: "General Ward",
      description:
        "Affordable shared accommodations with necessary medical care",
      link: "#general-ward",
    },
    {
      icon: "mdi:baby-carriage",
      title: "Maternity Rooms",
      description: "Specialized rooms for mothers and newborns",
      link: "#maternity-room",
    },
    {
      icon: "mdi:baby-face-outline",
      title: "Pediatric Rooms",
      description:
        "Child-friendly rooms with medical monitoring for young patients",
      link: "#pediatric-room",
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

export default PatientRooms;
