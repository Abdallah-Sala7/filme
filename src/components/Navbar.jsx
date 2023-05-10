import React, { useState } from "react";
import { closeIcon, logo, menuIcon, searchIcon, userIcon } from "../assets";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { setOpenAside } from "../app/reducer/appSlice";

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const dispatch = useDispatch();

  const handleShowSearchBar = (e) => {
    e.preventDefault();
    setShowSearchBar(!showSearchBar);
  };

  const handleShowAside = (e) => {
    e.preventDefault();
    dispatch(setOpenAside());
  };

  return (
    <nav>
      <div className="px-2 flex justify-between items-center gap-3 py-5 md:px-4">
        <div
          className={`flex gap-3 items-center ${
            showSearchBar ? "hidden" : "block"
          } lg:block`}
        >
          <a
            href="#"
            className="p-2 border border-yellow opacity-70 hover:opacity-100 rounded-sm lg:hidden"
            onClick={handleShowAside}
          >
            <img
              src={menuIcon}
              alt="menu icon"
              className="w-5 h-5 object-contain yellow-filter"
            />
          </a>

          <a href="#" className="lg:hidden">
            <img
              src={logo}
              alt="weeb film logo"
              className="w-28 h-9 object-contain"
            />
          </a>

          <h1 className="hidden p-2 text-white capitalize text-xl font-semibold lg:block">
            home
          </h1>
        </div>

        <div
          className={`flex-1 max-w-md h-9 ${
            showSearchBar ? "block" : "hidden"
          } lg:block`}
        >
          <SearchBar />
        </div>

        <div className="flex gap-3 items-center">
          <a
            href="#"
            className="p-2 border border-yellow opacity-70 hover:opacity-100 rounded-sm lg:hidden"
            onClick={handleShowSearchBar}
          >
            <img
              src={showSearchBar ? closeIcon : searchIcon}
              alt="menu icon"
              className="w-5 h-5 object-contain yellow-filter"
            />
          </a>

          <a
            href="#"
            className="p-2 border border-yellow opacity-70 hover:opacity-100 rounded-sm lg:hidden"
          >
            <img
              src={userIcon}
              alt="menu icon"
              className="w-5 h-5 object-contain yellow-filter"
            />
          </a>

          <a
            href="#"
            className="hidden p-2 text-white hover:text-yellow lg:block"
          >
            Sign up
          </a>

          <a
            href="#"
            className="hidden py-1 px-3 border border-yellow text-yellow opacity-70 hover:opacity-100 rounded-md lg:block"
          >
            Sign in
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
