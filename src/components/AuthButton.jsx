import React from "react";

const AuthButton = ({ handleClick, title, icon }) => {
  return (
    <a
      href="#"
      onClick={handleClick}
      className="w-full py-1.5 flex items-center justify-center mb-6 border border-yellow rounded-md gap-1 transition-all group hover:bg-yellow"
    >
      <img
        src={icon}
        alt={title + "icon"}
        className="w-5 h-5 object-cover yellow-filter transition-all group-hover:invert-0"
      />
      <p className="text-center font-bold text-yellow leading-0 transition-all group-hover:text-dark">
        {title}
      </p>
    </a>
  );
};

export default AuthButton;
