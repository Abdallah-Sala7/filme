import React from "react";
import { authBg, logo, poster } from "../assets";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex items-center w-full h-full">
      <div
        className="relative hidden w-full min-h-screen bg-cover bg-center bg-no-repeat md:block"
        style={{
          backgroundImage: `url(${authBg})`,
        }}
      >
        <div className="absolute inset-0 w-full h-full bg-black opacity-70"></div>
      </div>

      <div className="fixed top-0 right-0 px-4 w-full h-full bg-authBg md:w-550">
        <div className="flex items-center justify-center w-full h-16 my-6">
          <img src={logo} alt="film logo" className="w-full h-full object-contain" />
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
