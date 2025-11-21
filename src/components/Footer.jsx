import React from "react";
import logo from "../assets/img/logo.png";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="bg-[#333333] flex flex-col justify-center items-center pt-[65px]">
      <div className="w-[1100px] grid grid-cols-2 pb-10">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2.5 items-center cursor-pointer">
            <img src={logo} alt="" className="rounded-full h-[55px]" />
            <div>
              <p className="text-[14px] font-cormorant font-semibold text-white">
                Marilao Saint Michael Family Hospital, Inc
              </p>
              <p className="text-[11px] font-cormorant italic text-gray-50">
                C. Santiago Street, Marilao, Philippines
              </p>
            </div>
          </div>
          <div>
            <p className="text-gray-100 text-[11px] text-justify w-[300px]">
              Marilao Saint Michael Family Hospital is a community-centered
              healthcare facility in Marilao, dedicated to providing
              compassionate, high-quality medical care and promoting the
              well-being of families through accessible and modern healthcare
              services.
            </p>
          </div>
          <div className="flex gap-1 text-white ">
            <Icon icon="mingcute:twitter-fill" width="24" height="24" />
            <Icon icon="basil:viber-solid" width="24" height="24" />
            <Icon icon="uil:linkedin" width="24" height="24" />
            <Icon icon="ant-design:facebook-filled" width="24" height="24" />
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div className="text-white flex flex-col gap-2">
            <p className="font-semibold">Quick Links</p>
            <div className="text-[11px]">
              <ul className="flex flex-col gap-1">
                <li>About Us</li>
                <li>Our Services</li>
                <li>Our Doctors</li>
                <li>News</li>
                <li>Events</li>
              </ul>
            </div>
          </div>

          <div className="text-white flex flex-col gap-2">
            <p className="font-semibold">Services</p>
            <div className="text-[11px]">
              <ul className="flex flex-col gap-1">
                <li>Emergency Care</li>
                <li>Laboratory</li>
                <li>OB-Gyne</li>
                <li>Pediatrics</li>
                <li>X-ray & Ultrasound</li>
              </ul>
            </div>
          </div>

          <div className="text-white flex flex-col gap-2">
            <p className="font-semibold">Contact Us</p>
            <div className="text-[11px]">
              <ul className="flex flex-col gap-1">
                <li>+63 (2) 8723-0101</li>
                <li>info@medicalexcellence.ph</li>
                <li>
                  Main Road of C. Santiago St. Poblacion II, Marilao, Bulacan.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1100px] flex justify-between items-center text-white text-[11px] py-7 border-t border-gray-400">
        <p>© 2025 Marilao St. Michael Family Hospital. All rights reserved.</p>
        <div className="flex gap-2">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Services</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
