import React from "react";
import { Icon } from "@iconify/react";

const ContactHead = () => {
  return (
    <div className="bg-[#404040] text-white text-[12px] flex justify-center py-2">
      <div className="w-full max-w-[1100px] flex flex-row justify-between items-center gap-2 md:gap-0 px-4">
        {/* Contact Info */}
        <div className="flex flex-row gap-2 md:gap-3 text-sm md:text-[12px]">
          <p className="flex gap-1 items-center text-[11px]">
            <Icon
              className="w-4 h-4 md:w-5 md:h-5"
              icon="basil:phone-outline"
            />
            +63(9)1231-4234
          </p>
          <p className="flex gap-1 items-center text-[11px]">
            <Icon className="w-4 h-4 md:w-5 md:h-5" icon="si:mail-line" />
            info.saintmichael.com.ph
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-2 md:gap-3">
          <Icon
            className="w-4 h-4 md:w-5 md:h-5"
            icon="mingcute:twitter-fill"
          />
          <Icon className="w-4 h-4 md:w-5 md:h-5" icon="basil:viber-solid" />
          <Icon className="w-4 h-4 md:w-5 md:h-5" icon="uil:linkedin" />
          <Icon
            className="w-4 h-4 md:w-5 md:h-5"
            icon="ant-design:facebook-filled"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactHead;
