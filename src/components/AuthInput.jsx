import React from "react";

const AuthInput = ({type, placholder}) => {
  return (
    <input
      type={type}
      placeholder={placholder}
      className="w-full mb-4 px-3 py-1.5 text-white font-bold bg-authBg rounded border border-slate-800 outline-none focus:border-slate-400"
    />
  );
};

export default AuthInput;
