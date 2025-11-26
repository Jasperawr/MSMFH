import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const TabItem = ({ label, link, active, onClick }) => {
  return (
    <Link
      to={link}
      onClick={onClick}
      className={`w-full flex justify-between items-center px-5 py-3   transition-all duration-200
        ${
          active
            ? "bg-green-600 text-white "
            : " text-green-800 hover:bg-green-50"
        }
      `}
    >
      <span className="text-sm font-medium text-wrap text-start">{label}</span>
      <Icon
        icon="oui:arrow-right"
        width="16"
        height="16"
        className={active ? "text-white" : "text-green-700"}
      />
    </Link>
  );
};

export default TabItem;
