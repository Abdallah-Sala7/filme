import React from "react";
import { chatIcon, homeIcon, logo, mailIcon, privacyIcon, userIcon, videoIcon } from "../assets";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Aside = () => {
  const { openAside } = useSelector((state) => state.app);

  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen w-56 flex flex-col border-r-4  border-yellow bg-dark transition-transform duration-300 ${
        openAside ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div>
      <div className="flex border-b border-grayLighter p-4 mb-4">
        <img src={logo} alt="web film" className="w-full h-20 object-contain" />
      </div>

      <ul className="mb-auto aside-nav">
        <li>
          <NavLink
            to="/"
            className="flex items-baseline gap-2 pl-8 py-2 border-l-4 border-l-transparent hover:bg-grayLighter text-grayDark"
          >
            <img
              src={homeIcon}
              alt="home icon"
              className="w-4 h-4 object-contain gray-filter"
            />

            <span className="capitalize font-semibold">home</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="movies"
            className="flex items-baseline gap-2 pl-8 py-2 border-l-4 border-l-transparent hover:bg-grayLighter text-grayDark"
          >
            <img
              src={videoIcon}
              alt="video icon"
              className="w-4 h-4 object-contain gray-filter"
            />

            <span className="capitalize font-semibold">movies</span>
          </NavLink>
        </li>

        <li>
          <a
            href="#"
            className="flex items-baseline gap-2 pl-8 py-2 border-l-4 border-l-transparent hover:bg-grayLighter text-grayDark"
          >
            <img
              src={userIcon}
              alt="user icon"
              className="w-4 h-4 object-contain gray-filter"
            />

            <span className="capitalize font-semibold">account</span>
          </a>
        </li>
      </ul>        
      </div>


      <ul className="mt-auto border-t border-grayLighter">
        <li>
          <a
            href="#"
            className="flex items-center gap-2 pl-8 py-3 border-l-4 border-l-transparent hover:bg-grayLighter text-grayDark"
          >
            <img
              src={mailIcon}
              alt="home icon"
              className="w-4 h-4 object-contain gray-filter"
            />

            <span className="text-sm capitalize font-semibold">Contact us</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="flex items-center gap-2 pl-8 py-3 border-l-4 border-l-transparent hover:bg-grayLighter text-grayDark"
          >
            <img
              src={chatIcon}
              alt="video icon"
              className="w-4 h-4 object-contain gray-filter"
            />

            <span className="text-sm capitalize font-semibold">FAQ & Support</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="flex items-center gap-2 pl-8 py-3 border-l-4 border-l-transparent hover:bg-grayLighter text-grayDark"
          >
            <img
              src={privacyIcon}
              alt="user icon"
              className="w-4 h-4 object-contain gray-filter"
            />

            <span className="text-sm capitalize font-semibold">Privacy Policy</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
