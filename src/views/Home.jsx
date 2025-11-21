import React from "react";
import Nav from "../components/small_components/Nav";
import Hero from "../components/HeroSection";
import ContactHead from "../components/ContactHead";
import ServicesSection from "../components/ServicesSection";
import WhyUs from "../components/WhyUsSection";
import EventsSection from "../components/EventsSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <ContactHead />
      <Nav />
      <Hero />
      <ServicesSection />
      <WhyUs />
      <EventsSection />
      <Footer />
    </div>
  );
};

export default Home;
