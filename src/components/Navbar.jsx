import React, { useState } from "react";
import {
  closeIcon,
  downArrowIcon,
  exitIcon,
  logo,
  menuIcon,
  searchIcon,
  userIcon,
} from "../assets";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { setOpenAside } from "../app/reducer/appSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGetMovieDetailsQuery } from "../app/server/movieDetailsApi";

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [openLogut, setOpenLogut] = useState(false);

  const [showSearchBar, setShowSearchBar] = useState(false);
  const { data, isSuccess } = useGetMovieDetailsQuery(
    location.pathname.split("/")[2]
  );

  const handleShowSearchBar = (e) => {
    e.preventDefault();
    setShowSearchBar(!showSearchBar);
  };

  const handleShowAside = (e) => {
    e.preventDefault();
    dispatch(setOpenAside(true));
  };

  const handleLogout = (e) => {
    localStorage.clear();
    navigate("/auth");
    e.preventDefault();
  };

  const isAuth = localStorage.getItem("isAuth");

  return (
    <nav className="relative px-2 py-5 md:px-4">
      <div className="flex justify-between items-center gap-3 mb-3 lg:mb-0 lg:gap-5">
        <div
          className={`flex flex-1 gap-3 items-center lg:block ${
            showSearchBar ? "hidden" : "block"
          }`}
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

          <Link to="/" className="lg:hidden">
            <img
              src={logo}
              alt="weeb film logo"
              className="w-28 h-9 object-contain"
            />
          </Link>

          <h1 className="hidden  text-white capitalize text-xl font-semibold lg:line-clamp-1">
            {location.pathname === "/"
              ? "home"
              : !isNaN(location.pathname.split("/")[2])
              ? (isSuccess && data?.title) || "loading..."
              : location.pathname.split("/")[1]}
          </h1>
        </div>

        <div
          className={`max-w-md h-9 lg:flex-1 lg:block ${
            showSearchBar ? "block" : "hidden"
          }`}
        >
          <SearchBar />
        </div>

        <div className="flex flex-1 min-w-fit justify-end gap-3 items-center">
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

          <Link
            to="/auth/login"
            className="p-2 border border-yellow opacity-70 hover:opacity-100 rounded-sm lg:hidden"
          >
            <img
              src={userIcon}
              alt="menu icon"
              className="w-5 h-5 object-contain yellow-filter"
            />
          </Link>

          {isAuth ? (
            <>
              <button
                href="#"
                className="hidden text-2xl capitalize text-white font-semibold gap-2 items-center lg:flex"
                onClick={() => setOpenLogut(!openLogut)}
              >
                <span>
                  hi <span className="text-yellow">ali</span>
                </span>

                <img
                  src={downArrowIcon}
                  alt=""
                  className={`w-5 h-5 object-contain invert transition-transform ${
                    openLogut ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openLogut && (
                <div
                  className="absolute top-3 translate-y-full z-10 flex bg-dark border border-yellow"
                  onClick={handleLogout}
                >
                  <a href="#" className="flex items-center gap-2 py-3 px-6">
                    <img
                      src={exitIcon}
                      alt=""
                      className="w-5 h-5 object-contain invert"
                    />

                    <span className="text-white text-xl font-semibold">
                      Logout
                    </span>
                  </a>
                </div>
              )}
            </>
          ) : (
            <>
              <Link
                to="/auth/register"
                className="hidden p-2 text-white hover:text-yellow lg:block"
              >
                Sign up
              </Link>

              <Link
                to="/auth/login"
                className="hidden py-1 px-3 border border-yellow text-yellow opacity-70 hover:opacity-100 rounded-md lg:block"
              >
                Sign in
              </Link>
            </>
          )}
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
