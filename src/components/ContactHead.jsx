import React from "react";
import { Icon } from "@iconify/react";

const ContactHead = () => {
  return (
    <div className="bg-[#404040] text-white text-[12px] flex justify-center py-2">
      <div className="w-[1100px] flex justify-between">
        <div className="flex gap-3">
          <p className="flex gap-1 items-center">
            <Icon icon="basil:phone-outline" width="20" height="20" />
            +63(9)1231-4234
          </p>
          <p className="flex gap-1 items-center">
            <Icon icon="si:mail-line" width="19" height="19" />
            info.saintmichael.com.ph
          </p>
        </div>
        <div className="flex gap-1">
          <Icon icon="mingcute:twitter-fill" width="20" height="20" />
          <Icon icon="basil:viber-solid" width="20" height="20" />
          <Icon icon="uil:linkedin" width="20" height="20" />
          <Icon icon="ant-design:facebook-filled" width="20" height="20" />
        </div>
      </div>
    </div>
  );
};

export default ContactHead;
