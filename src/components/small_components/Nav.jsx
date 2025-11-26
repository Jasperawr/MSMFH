import { Icon } from "@iconify/react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // For mobile submenu toggles
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="flex flex-col items-center shadow-md sticky top-0 bg-white z-90">
      <div className="flex sm:flex-row flex-col justify-between sm:items-center sm:w-[1100px] w-full sm:py-0 py-3 sm:px-0 px-2">
        {/* LOGO */}
        <div className="flex justify-between w-full items-center">
          <Link to="/" className="flex gap-2.5 items-center cursor-pointer">
            <img src={logo} alt="" className="rounded-full h-[55px]" />
            <div>
              <p className="sm:text-[20px] font-cormorant sm:leading-7 leading-5 font-extrabold text-[#267F1E]">
                Marilao Saint Michael Family Hospital, Inc
              </p>
              <p className="sm:text-[14px] text-[12px] font-cormorant font-bold italic text-gray-600">
                C. Santiago Street, Marilao, Philippines
              </p>
            </div>
          </Link>

          {/* BURGER BUTTON */}
          <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <Icon
                icon="material-symbols:close-rounded"
                width="24"
                height="24"
              />
            ) : (
              <Icon icon="mingcute:menu-line" width="24" height="24" />
            )}
          </button>
        </div>

        {/* NAVIGATION */}
        <div
          className={`
            font-sf font-normal relative w-full
            ${menuOpen ? "flex flex-col" : "hidden"}
            sm:grid sm:grid-cols-5 sm:flex-row sm:static
          `}
        >
          {[
            "About Us",
            "Our Services",
            "Our Doctors",
            "New&Events",
            "Contact Us",
          ].map((item) => {
            // ============================
            //  ABOUT US (Mobile toggle)
            // ============================
            if (item === "About Us") {
              return (
                <div key={item} className="relative group sm:w-[85px] w-full">
                  {/* DESKTOP LINK (hover) */}
                  <Link
                    to="/about"
                    className="hidden sm:flex items-center justify-center text-[12px] w-[75px] h-[90px]
                       border-b-white transition-all duration-100 
                       group-hover:text-[#267F1E]"
                  >
                    {item}
                  </Link>

                  {/* MOBILE BUTTON (click to open submenu) */}
                  <button
                    className="sm:hidden flex justify-between items-center w-full text-[12px] py-3 text-left px-2"
                    onClick={() => setAboutOpen(!aboutOpen)}
                  >
                    <span>{item}</span>
                    <Icon
                      icon={aboutOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
                      width="20"
                    />
                  </button>

                  {/* DESKTOP HOVER SUBMENU */}
                  <div className="absolute left-0 top-[90px] hidden sm:group-hover:block bg-white shadow-md rounded-b-lg w-[190px] z-20">
                    {[
                      { name: "History", path: "/about/history" },
                      {
                        name: "Mission & Vision",
                        path: "/about/mission&vision",
                      },
                      { name: "Quality Policy", path: "/about/qualitypolicy" },
                      { name: "HMO", path: "/about/hmo" },
                      { name: "Leadership", path: "/about/leadership" },
                      { name: "Careers", path: "/about/careers" },
                    ].map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block w-full px-4 py-4 text-[12px] hover:bg-green-600 hover:text-white"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>

                  {/* MOBILE SUBMENU */}
                  {aboutOpen && (
                    <div className="sm:hidden bg-white shadow-md rounded-b-lg w-full">
                      {[
                        { name: "History", path: "/about/history" },
                        {
                          name: "Mission & Vision",
                          path: "/about/mission&vision",
                        },
                        {
                          name: "Quality Policy",
                          path: "/about/qualitypolicy",
                        },
                        { name: "HMO", path: "/about/hmo" },
                        { name: "Leadership", path: "/about/leadership" },
                        { name: "Careers", path: "/about/careers" },
                      ].map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-4 py-3 text-[12px] bg-green-50 text-green-900"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // ============================
            //  OUR SERVICES (Mobile toggle)
            // ============================
            if (item === "Our Services") {
              return (
                <div key={item} className="relative group sm:w-[95px] w-full">
                  {/* DESKTOP LINK */}
                  <Link
                    to="/services"
                    className="hidden sm:flex items-center justify-center text-[12px] w-[75px] h-[90px]
                      border-b-white transition-all duration-100 
                       group-hover:text-[#267F1E]"
                  >
                    {item}
                  </Link>

                  {/* MOBILE BUTTON */}
                  <button
                    className="sm:hidden flex justify-between items-center w-full py-3 text-[12px] text-left px-2"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    <span>{item}</span>
                    <Icon
                      icon={
                        servicesOpen ? "mdi:chevron-up" : "mdi:chevron-down"
                      }
                      width="20"
                    />
                  </button>

                  {/* DESKTOP HOVER SUBMENU */}
                  <div className="absolute left-0 top-[90px] hidden sm:group-hover:block bg-white shadow-md rounded-b-lg w-[190px] z-20">
                    {[
                      {
                        name: "Medical Services",
                        path: "/services/medicalservices",
                      },
                      { name: "Facilities", path: "/services/facilities" },
                      { name: "Patient Rooms", path: "/services/patientrooms" },
                    ].map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-4 py-4 text-[12px] hover:bg-green-600 hover:text-white"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>

                  {/* MOBILE SUBMENU */}
                  {servicesOpen && (
                    <div className="sm:hidden bg-white shadow-md rounded-b-lg w-full">
                      {[
                        {
                          name: "Medical Services",
                          path: "/services/medicalservices",
                        },
                        { name: "Facilities", path: "/services/facilities" },
                        {
                          name: "Patient Rooms",
                          path: "/services/patientrooms",
                        },
                      ].map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-4 py-3 text-[12px] bg-green-50 text-green-900"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // ============================
            // DEFAULT MENU ITEMS
            // ============================
            return (
              <Link
                key={item}
                to={
                  item.toLowerCase() === "new&events"
                    ? `/${item.toLowerCase()}/all`
                    : `/${item
                        .toLowerCase()
                        .replace(/ & /g, "-")
                        .replace(/ /g, "")}`
                }
                className="flex sm:items-center sm:justify-center text-[12px] sm:w-[75px] sm:h-[90px]
                  border-b-4 border-b-white transition-all duration-100 
                   hover:text-[#267F1E] px-2 py-3 sm:py-0 text-nowrap"
              >
                {item}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
