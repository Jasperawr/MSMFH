// ServiceItem.jsx
import React from "react";
import { Icon } from "@iconify/react";

const BarItem = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex justify-between items-center px-5 py-3 rounded-md border transition-all duration-200
        ${
          active
            ? "bg-green-600 text-white border-green-600"
            : "bg-green-50 text-green-800 border-green-100"
        }
      `}
    >
      <span className="text-sm font-medium text-wrap text-start">{label}</span>
      <Icon
        icon="oui:arrow-right"
        width="20"
        height="20"
        className={active ? "text-white" : "text-green-700"}
      />
    </button>
  );
};

export default BarItem;
