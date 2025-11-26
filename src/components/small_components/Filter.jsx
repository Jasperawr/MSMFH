import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Filter = ({
  showSearch,
  showSpecialization,
  showSubSpecialization,
  showClear,
  specializationOptions = [],
  subSpecializationOptions = [],
  onSearchChange = () => {},
  onSelectSpecialization = () => {},
  onSelectSubSpecialization = () => {},
  onClear = () => {},
}) => {
  const [specOpen, setSpecOpen] = useState(false);
  const [subSpecOpen, setSubSpecOpen] = useState(false);

  return (
    <div className="flex justify-center items-center py-5 px-4">
      <div className="flex flex-col sm:flex-row flex-wrap w-full max-w-[1100px] gap-4">
        {/* SEARCH BAR */}
        {showSearch && (
          <div className="flex relative bg-[#E6E6E6] items-center rounded-md w-full sm:w-auto flex-1">
            <input
              type="text"
              placeholder="Search"
              className="text-sm px-5 pr-9 py-2 bg-transparent outline-none w-full"
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <Icon
              icon="carbon:search"
              width="20"
              height="20"
              className="text-gray-500 absolute right-3"
            />
          </div>
        )}

        {/* SPECIALIZATION DROPDOWN */}
        {showSpecialization && (
          <div className="relative w-full sm:w-auto flex-1">
            <button
              onClick={() => setSpecOpen(!specOpen)}
              className="flex relative bg-white text-gray-500 rounded-md shadow text-sm px-4 pr-11 py-2 w-full justify-between hover:bg-gray-50 transition-all duration-200"
            >
              Select Specialization
              <Icon
                icon="oui:arrow-down"
                width="20"
                height="20"
                className="text-gray-500"
              />
            </button>

            {specOpen && (
              <div className="absolute mt-2 w-full bg-white shadow rounded-md p-2 z-20">
                {specializationOptions.length === 0 && (
                  <p className="text-xs text-gray-400 p-2">No data</p>
                )}
                {specializationOptions.map((item) => (
                  <p
                    key={item}
                    className="p-2 text-sm hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      onSelectSpecialization(item);
                      setSpecOpen(false);
                    }}
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}

        {/* SUB-SPECIALIZATION DROPDOWN */}
        {showSubSpecialization && (
          <div className="relative w-full sm:w-auto flex-1">
            <button
              onClick={() => setSubSpecOpen(!subSpecOpen)}
              className="flex relative bg-white text-gray-500 rounded-md shadow text-sm px-4 pr-11 py-2 w-full justify-between hover:bg-gray-50 transition-all"
            >
              Select Sub-Specialization
              <Icon
                icon="oui:arrow-down"
                width="20"
                height="20"
                className="text-gray-500"
              />
            </button>

            {subSpecOpen && (
              <div className="absolute mt-2 w-full bg-white shadow rounded-md p-2 z-20">
                {subSpecializationOptions.length === 0 && (
                  <p className="text-xs text-gray-400 p-2">No data</p>
                )}
                {subSpecializationOptions.map((item) => (
                  <p
                    key={item}
                    className="p-2 text-sm hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      onSelectSubSpecialization(item);
                      setSubSpecOpen(false);
                    }}
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}

        {/* CLEAR BUTTON */}
        {showClear && (
          <button
            onClick={onClear}
            className="flex bg-red-400 text-white items-center rounded-md shadow text-sm px-10 py-2 w-full sm:w-auto justify-center hover:bg-red-500 transition-all"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default Filter;
