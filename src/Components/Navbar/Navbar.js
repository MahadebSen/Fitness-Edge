import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/1..png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-10 my-3">
      <div className="flex items-center">
        <Link to="/home">
          <img className="w-20 border-2 rounded-full" src={logo} alt="" />
        </Link>
        <p className="font-semibold text-3xl ml-2">Fitness Edge</p>
      </div>
      <div>
        <Link className="mx-6 font-semibold" to="/">
          Home
        </Link>
        <Link className="mx-6 font-semibold" to="/blogs">
          Blogs
        </Link>
        <Link className="mx-6 font-semibold" to="/login">
          Login
        </Link>
        <Link className="mx-6 font-semibold" to="/about">
          About Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
