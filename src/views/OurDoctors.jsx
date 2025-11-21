import React from "react";
import Nav from "../components/small_components/Nav";
import Title from "../components/small_components/Title";
import ContactHead from "../components/ContactHead";
import Filter from "../components/small_components/Filter";

const OurDoctors = () => {
  return (
    <div>
      <ContactHead />
      <Nav />
      <Title
        tag="Our Doctors"
        title="Meet Our Medical Experts"
        subtitle="Highly qualified specialists committed to providing exceptional patient care"
      />
      <Filter />
    </div>
  );
};

export default OurDoctors;
