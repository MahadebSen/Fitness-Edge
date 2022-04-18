import React from "react";
import logo from "../../images/1..png";

const Footer = () => {
  return (
    <div className="text-center bg-black text-white p-5">
      <h1>this is footer</h1>
      <div className="flex justify-center items-center">
        <img className="w-16 border-2 rounded-full" src={logo} alt="" />
        <p className="font-semibold text-3xl ml-2">Fitness Edge</p>
      </div>
      <p>Get to Know Us</p>
    </div>
  );
};

export default Footer;
