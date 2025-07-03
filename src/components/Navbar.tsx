import { useState } from "react";

import { IoTriangle } from "react-icons/io5";
import { VscServerEnvironment } from "react-icons/vsc";
import { IoPeopleSharp, IoPersonAddSharp } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  return (
    <div>
      <nav className="flex justify-between overflow-visible">
        <img
          className="w-[81px] h-[48px]"
          src="https://cdn-01.cms-ap-v2i.applyflow.com/building-environs/wp-content/uploads/2022/05/logo_black.svg"
          alt="Logo"
        />
        <ul className="flex items-center gap-5 text-[#030303] font-semibold">
          <li
            onMouseEnter={() => setActiveMenu("employers")}
            onMouseLeave={() => setActiveMenu(null)}
            className="flex items-center gap-2 relative"
          >
            <span className="cursor-pointer">Employers</span>
            <IoTriangle
              className={`text-black/50 w-[8px] ${
                activeMenu === "employers"
                  ? "rotate-0 transition-all duration-700 ease-in-out"
                  : "rotate-180 transition-all duration-700 ease-in-out"
              }`}
            />
            <div
              className={`absolute top-full -left-[50%] w-80 text-lg p-2 shadow bg-white rounded transition-all duration-500 ease-in-out
    ${
      activeMenu === "employers"
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }`}
            >
              <div className="flex flex-col gap-2 font-normal">
                <p className="flex items-center gap-2 hover:text-[#FF0000] hover:transition-all hover:duration-100 hover:ease-in-out cursor-pointer">
                  <VscServerEnvironment />
                  Why building Environs
                </p>
                <p className="flex items-center gap-2 hover:text-[#FF0000] hover:transition-all hover:duration-100 hover:ease-in-out cursor-pointer">
                  <IoPeopleSharp />
                  Available Candidates
                </p>
                <p className="flex items-center gap-2 hover:text-[#FF0000] hover:transition-all hover:duration-100 hover:ease-in-out cursor-pointer">
                  <MdOutlineWorkOutline />
                  Submit Vacancy
                </p>
                <p className="flex items-center gap-2 hover:text-[#FF0000] hover:transition-all hover:duration-100 hover:ease-in-out cursor-pointer">
                  <IoPersonAddSharp />
                  Recruiment Solutions
                </p>
              </div>
            </div>
          </li>
          <li
            onMouseEnter={() => setActiveMenu("job")}
            onMouseLeave={() => setActiveMenu(null)}
            className="flex items-center gap-2 relative"
          >
            <span className="cursor-pointer">Job seekers</span>
            <IoTriangle
              className={`text-black/50 w-[8px] ${
                activeMenu === "job"
                  ? "rotate-0 transition-all duration-500 ease-in-out"
                  : "rotate-180 transition-all duration-500 ease-in-out"
              }`}
            />
            <div
              className={`absolute top-full -left-[50%] w-80 text-lg p-2 shadow bg-white rounded transition-all duration-500 ease-in-out
    ${
      activeMenu === "job"
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }`}
            >
              <div className="flex flex-col gap-2 font-normal">
                <p className="flex items-center gap-2 hover:text-[#FF0000] hover:transition-all hover:duration-100 hover:ease-in-out cursor-pointer">
                  <VscServerEnvironment />
                  Why building Environs
                </p>
                <p className="flex items-center gap-2 hover:text-[#FF0000] hover:transition-all hover:duration-100 hover:ease-in-out cursor-pointer">
                  <IoPeopleSharp />
                  Available Candidates
                </p>
                <p className="flex items-center gap-2 hover:text-[#FF0000] hover:transition-all hover:duration-100 hover:ease-in-out cursor-pointer">
                  <MdOutlineWorkOutline />
                  Submit Vacancy
                </p>
                <p className="flex items-center gap-2 hover:text-[#FF0000] hover:transition-all hover:duration-100 hover:ease-in-out cursor-pointer">
                  <IoPersonAddSharp />
                  Recruiment Solutions
                </p>
              </div>
            </div>
          </li>
          <li
            onMouseEnter={() => setActiveMenu("about")}
            onMouseLeave={() => setActiveMenu(null)}
            className="flex items-center gap-2 relative"
          >
            <span className="cursor-pointer">About</span>{" "}
            <IoTriangle
              className={`text-black/50 w-[8px] ${
                activeMenu === "about"
                  ? "rotate-0 transition-all duration-700 ease-in-out"
                  : "rotate-180 transition-all duration-700 ease-in-out"
              }`}
            />
            <div
              className={`absolute top-full -left-[50%] w-80 text-lg p-2 shadow bg-white rounded transition-all duration-500 ease-in-out
    ${
      activeMenu === "about"
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }`}
            >
              <div className="flex flex-col gap-2 font-normal">
                <p className="flex items-center gap-2 hover:text-[#FF0000] hover:transition-all hover:duration-100 hover:ease-in-out cursor-pointer">
                  <VscServerEnvironment />
                  Why building Environs
                </p>
                <p className="flex items-center gap-2 hover:text-[#FF0000] hover:transition-all hover:duration-100 hover:ease-in-out cursor-pointer">
                  <IoPeopleSharp />
                  Available Candidates
                </p>
                <p className="flex items-center gap-2 hover:text-[#FF0000] hover:transition-all hover:duration-100 hover:ease-in-out cursor-pointer">
                  <MdOutlineWorkOutline />
                  Submit Vacancy
                </p>
                <p className="flex items-center gap-2 hover:text-[#FF0000] hover:transition-all hover:duration-100 hover:ease-in-out cursor-pointer">
                  <IoPersonAddSharp />
                  Recruiment Solutions
                </p>
              </div>
            </div>
          </li>
          <li
            onMouseEnter={() => setActiveMenu("content")}
            onMouseLeave={() => setActiveMenu(null)}
            className="flex items-center gap-2 relative"
          >
            <span className="cursor-pointer">Content</span>{" "}
            <IoTriangle
              className={`text-black/50 w-[8px] ${
                activeMenu === "content"
                  ? "rotate-0 transition-all duration-700 ease-in-out"
                  : "rotate-180 transition-all duration-700 ease-in-out"
              }`}
            />
            <div
              className={`bg-white absolute top-full -left-[50%] w-80 text-lg p-2 shadow rounded transition-all duration-500 ease-in-out
    ${
      activeMenu === "content"
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }`}
            >
              <div className="flex flex-col gap-2 font-normal">
                <p className="flex items-center gap-2 hover:text-[#FF0000] hover:transition-all hover:duration-100 hover:ease-in-out cursor-pointer">
                  <VscServerEnvironment />
                  Why building Environs
                </p>
                <p className="flex items-center gap-2 hover:text-[#FF0000] hover:transition-all hover:duration-100 hover:ease-in-out cursor-pointer">
                  <IoPeopleSharp />
                  Available Candidates
                </p>
                <p className="flex items-center gap-2 hover:text-[#FF0000] hover:transition-all hover:duration-100 hover:ease-in-out cursor-pointer">
                  <MdOutlineWorkOutline />
                  Submit Vacancy
                </p>
                <p className="flex items-center gap-2 hover:text-[#FF0000] hover:transition-all hover:duration-100 hover:ease-in-out cursor-pointer">
                  <IoPersonAddSharp />
                  Recruiment Solutions
                </p>
              </div>
            </div>
          </li>
          <li
            onMouseEnter={() => setActiveMenu("contact")}
            onMouseLeave={() => setActiveMenu(null)}
            className="flex items-center gap-2 relative"
          >
            <span className="cursor-pointer">Contact us</span>{" "}
            <IoTriangle
              className={`text-black/50 w-[8px] ${
                activeMenu === "contact"
                  ? "rotate-0 transition-all duration-700 ease-in-out"
                  : "rotate-180 transition-all duration-700 ease-in-out"
              }`}
            />
            <div
              className={`absolute top-full -left-[50%] w-80 text-lg p-2 shadow bg-white rounded transition-all duration-500 ease-in-out
    ${
      activeMenu === "contact"
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }`}
            >
              <div className="flex flex-col gap-2 font-normal">
                <p className="flex items-center gap-2 hover:text-[#FF0000] hover:transition-all hover:duration-100 hover:ease-in-out cursor-pointer">
                  <VscServerEnvironment />
                  Why building Environs
                </p>
                <p className="flex items-center gap-2 hover:text-[#FF0000] hover:transition-all hover:duration-100 hover:ease-in-out cursor-pointer">
                  <IoPeopleSharp />
                  Available Candidates
                </p>
                <p className="flex items-center gap-2 hover:text-[#FF0000] hover:transition-all hover:duration-100 hover:ease-in-out cursor-pointer">
                  <MdOutlineWorkOutline />
                  Submit Vacancy
                </p>
                <p className="flex items-center gap-2 hover:text-[#FF0000] hover:transition-all hover:duration-100 hover:ease-in-out cursor-pointer">
                  <IoPersonAddSharp />
                  Recruiment Solutions
                </p>
              </div>
            </div>
          </li>
          <li className="flex gap-3">
            <button className="font-semibold py-[9px] px-[20px] text-[#FF0000] border-2 border-[#FF0000] rounded cursor-pointer">
              Latest podcast
            </button>
            <button className="font-semibold py-[9px] px-[20px] text-white bg-[#FF0000] rounded cursor-pointer">
              Submit vacancy
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
