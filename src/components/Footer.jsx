import React from "react";
import logo from "../assets/img/logo.png";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="bg-[#333333] flex flex-col justify-center items-center pt-16 px-4 md:px-6 lg:px-0">
      {/* Main content */}
      <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 gap-10 pb-10">
        {/* Left section */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-3 items-center cursor-pointer">
            <img
              src={logo}
              alt="Logo"
              className="rounded-full h-14 w-14 md:h-16 md:w-16"
            />
            <div>
              <p className="text-sm md:text-base font-cormorant font-semibold text-white">
                Marilao Saint Michael Family Hospital, Inc
              </p>
              <p className="text-xs md:text-sm font-cormorant italic text-gray-200">
                C. Santiago Street, Marilao, Philippines
              </p>
            </div>
          </div>
          <p className="text-gray-100 text-xs md:text-sm text-justify">
            Marilao Saint Michael Family Hospital is a community-centered
            healthcare facility in Marilao, dedicated to providing
            compassionate, high-quality medical care and promoting the
            well-being of families through accessible and modern healthcare
            services.
          </p>
          <div className="flex gap-3 text-white text-xl">
            <Icon icon="mingcute:twitter-fill" width="24" height="24" />
            <Icon icon="basil:viber-solid" width="24" height="24" />
            <Icon icon="uil:linkedin" width="24" height="24" />
            <Icon icon="ant-design:facebook-filled" width="24" height="24" />
          </div>
        </div>

        {/* Right section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Quick Links */}
          <div className="text-white flex flex-col gap-2">
            <p className="font-semibold">Quick Links</p>
            <ul className="flex flex-col gap-1 text-xs md:text-sm">
              <li>About Us</li>
              <li>Our Services</li>
              <li>Our Doctors</li>
              <li>News</li>
              <li>Events</li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-white flex flex-col gap-2">
            <p className="font-semibold">Services</p>
            <ul className="flex flex-col gap-1 text-xs md:text-sm">
              <li>Emergency Care</li>
              <li>Laboratory</li>
              <li>OB-Gyne</li>
              <li>Pediatrics</li>
              <li>X-ray & Ultrasound</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-white flex flex-col gap-2">
            <p className="font-semibold">Contact Us</p>
            <ul className="flex flex-col gap-1 text-xs md:text-sm">
              <li>+63 (2) 8723-0101</li>
              <li>info@medicalexcellence.ph</li>
              <li>
                Main Road of C. Santiago St. Poblacion II, Marilao, Bulacan.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full max-w-[1100px] flex flex-col sm:flex-row justify-between items-center text-white text-xs md:text-sm py-4 border-t border-gray-400 gap-3 sm:gap-0">
        <p>© 2025 Marilao St. Michael Family Hospital. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Services
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
