import React, { useState } from "react";
import { closeIcon, logo, menuIcon, searchIcon, userIcon } from "../assets";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { setOpenAside } from "../app/reducer/appSlice";
import { useLocation } from "react-router-dom";
import { useGetMovieDetailsQuery } from "../app/server/movieDetailsApi";

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  const { data, isSuccess } = useGetMovieDetailsQuery(
    location.pathname.split("/")[2]
  );

  const handleShowSearchBar = (e) => {
    e.preventDefault();
    setShowSearchBar(!showSearchBar);
  };

  const handleShowAside = (e) => {
    e.preventDefault();
    dispatch(setOpenAside());
  };

  return (
    <nav className="px-2 py-5 md:px-4">
      <div className="flex justify-between items-center gap-3 mb-3 lg:mb-0">
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

          <h1 className="hidden text-white capitalize text-xl font-semibold lg:block">
            {location.pathname === "/"
              ? "home"
              : !isNaN(location.pathname.split("/")[2])
              ? (isSuccess && data?.title) || "loading..."
              : location.pathname.split("/")[1]}
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

      <h2 className="text-white capitalize text-base font-semibold lg:hidden">
        {location.pathname === "/"
          ? "home"
          : !isNaN(location.pathname.split("/")[2])
          ? (isSuccess && data?.title) || "loading..."
          : location.pathname.split("/")[1]}
      </h2>
    </nav>
  );
};

export default Navbar;
