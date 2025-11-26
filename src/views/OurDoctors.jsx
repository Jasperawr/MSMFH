import React from "react";
import Nav from "../components/small_components/Nav";
import Title from "../components/small_components/Title";
import ContactHead from "../components/ContactHead";
import Filter from "../components/small_components/Filter";
import DoctorCard from "../components/small_components/DoctorCard";
import Footer from "../components/Footer";

import image1 from "../assets/img/doctor/portrait-confident-young-medical-doctor-white-wall.jpg";
import image2 from "../assets/img/doctor/content-young-female-doctor-posing-camera.jpg";
import image3 from "../assets/img/doctor/young-beautiful-hispanic-woman-doctor-smiling-confident-standing-with-arms-crossed-gesture-isolated-white-background.jpg";

const OurDoctors = () => {
  const services = [
    {
      img: image1,
      name: "Dr. Michael D. Burmy, M.D.",
      specializations: ["Cardiology", "Internal Medicine"],
      schedule: [
        { day: "Monday", time: "3:00 PM – 7:00 PM" },
        { day: "Wednesday", time: "3:00 PM – 7:00 PM" },
        { day: "Friday", time: "3:00 PM – 7:00 PM" },
      ],
      contact: {
        phone: "(044) 123-4567",
        email: "info@hospital.com",
        viber: "+63 917 123 4567",
        hotline: "+63 922 987 6543",
      },
    },
    {
      img: image2,
      name: "Dr. Maria Venomoth D.J. Khalead, M.D.",
      specializations: ["Cardiology", "Internal Medicine"],
      schedule: [
        { day: "Monday", time: "3:00 PM – 7:00 PM" },
        { day: "Wednesday", time: "3:00 PM – 7:00 PM" },
        { day: "Friday", time: "3:00 PM – 7:00 PM" },
      ],
      contact: {
        phone: "(044) 123-4567",
        email: "info@hospital.com",
        viber: "+63 917 123 4567",
        hotline: "+63 922 987 6543",
      },
    },
    {
      img: image3,
      name: "Dr. Marill D. Poniy, M.D.",
      specializations: ["Cardiology", "Internal Medicine"],
      schedule: [
        { day: "Monday", time: "3:00 PM – 7:00 PM" },
        { day: "Wednesday", time: "3:00 PM – 7:00 PM" },
        { day: "Friday", time: "3:00 PM – 7:00 PM" },
      ],
      contact: {
        phone: "(044) 123-4567",
        email: "info@hospital.com",
        viber: "+63 917 123 4567",
        hotline: "+63 922 987 6543",
      },
    },
  ];

  return (
    <div>
      <ContactHead />
      <Nav />
      <Title
        tag="Our Doctors"
        title="Meet Our Medical Experts"
        subtitle="Highly qualified specialists committed to providing exceptional patient care"
      />
      <Filter
        showSearch={true}
        showSpecialization={true}
        showSubSpecialization={true}
        showClear={true}
      />

      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col justify-between flex-wrap gap-6 mb-5 sm:w-[1100px]">
          {/* cards here */}
          {services.map((item) => (
            <DoctorCard key={item.title} {...item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurDoctors;
