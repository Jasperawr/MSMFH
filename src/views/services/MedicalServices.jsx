import React from "react";
import Nav from "../../components/small_components/Nav";
import Title from "../../components/small_components/Title";
import ContactHead from "../../components/ContactHead";
import Filter from "../../components/small_components/Filter";
import Footer from "../../components/Footer";
import ServicesCards from "../../components/small_components/ServicesCards";

const MedicalServices = () => {
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

export default MedicalServices;
