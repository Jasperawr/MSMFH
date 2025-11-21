import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex flex-col items-center shadow-md sticky top-0 bg-white z-90">
      <div className="flex justify-between items-center w-[1100px]">
        {/* LOGO / BRAND */}
        <Link to="/" className="flex gap-2.5 items-center cursor-pointer">
          <img src={logo} alt="" className="rounded-full h-[55px]" />
          <div>
            <p className="text-[20px] font-cormorant leading-7 font-extrabold text-[#267F1E] text-stroke-3">
              Marilao Saint Michael Family Hospital, Inc
            </p>
            <p className="text-[14px] font-cormorant font-bold italic text-gray-600">
              C. Santiago Street, Marilao, Philippines
            </p>
          </div>
        </Link>

        {/* NAVIGATION */}
        <div className="grid grid-cols-5 font-sf font-normal relative">
          {[
            "About Us",
            "Our Services",
            "Our Doctors",
            "New&Events",
            "Contact Us",
          ].map((item) => {
            // ⭐ ABOUT US DROPDOWN
            if (item === "About Us") {
              return (
                <div key={item} className="relative group w-[85px]">
                  <Link
                    to="/about"
                    className="flex items-center justify-center text-[12px] w-[75px] h-[90px] border-b-4 border-b-white transition-all duration-100 group-hover:border-b-green-600 group-hover:text-[#267F1E]"
                  >
                    {item}
                  </Link>

                  {/* ABOUT SUBMENU */}
                  <div className="absolute left-0 top-[90px] hidden group-hover:block bg-white shadow-md rounded-b-lg w-[190px] z-20">
                    {[
                      { name: "History", path: "/about/history" },
                      {
                        name: "Mission & Vision",
                        path: "/about/mission-vision",
                      },
                      { name: "Quality Policy", path: "/about/quality-policy" },
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
                </div>
              );
            }

            // ⭐ OUR SERVICES DROPDOWN
            if (item === "Our Services") {
              return (
                <div key={item} className="relative group w-[95px]">
                  <Link
                    to="/services"
                    className="flex items-center justify-center text-[12px] w-[75px] h-[90px] border-b-4 border-b-white transition-all duration-100 group-hover:border-b-green-600 group-hover:text-[#267F1E]"
                  >
                    {item}
                  </Link>

                  {/* SERVICES SUBMENU */}
                  <div className="absolute left-0 top-[90px] hidden group-hover:block bg-white shadow-md rounded-b-lg w-[190px] z-20">
                    {[
                      { name: "Emergency Care", path: "/services/emergency" },
                      {
                        name: "Outpatient Services",
                        path: "/services/outpatient",
                      },
                      {
                        name: "Inpatient Services",
                        path: "/services/inpatient",
                      },
                      {
                        name: "Diagnostics & Laboratory",
                        path: "/services/diagnostics",
                      },
                      { name: "Surgery", path: "/services/surgery" },
                      { name: "Pharmacy", path: "/services/pharmacy" },
                      { name: "Rehabilitation", path: "/services/rehab" },
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
                </div>
              );
            }

            // ⭐ DEFAULT MENU ITEMS
            return (
              <Link
                key={item}
                to={`/${item
                  .toLowerCase()
                  .replace(/ & /g, "-")
                  .replace(/ /g, "")}`}
                className="flex items-center justify-center text-[12px] w-[75px] h-[90px] border-b-4 border-b-white transition-all duration-100 hover:border-b-green-600 hover:text-[#267F1E]"
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
