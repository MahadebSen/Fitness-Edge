import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/1..png";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="flex items-center justify-between mx-10 my-2">
      <div className="flex items-center">
        <Link to="/home">
          <img className="w-20 border-2 rounded-full" src={logo} alt="" />
        </Link>
        <p className="font-semibold text-3xl ml-2">Fitness Edge</p>
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "mx-4 font-semibold text-lg bg-red-600 text-white px-3 py-2 hover:bg-red-500 hover:text-white rounded-lg"
              : "mx-4 font-semibold text-lg px-3 py-2 hover:bg-red-500 hover:text-white rounded-lg"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "mx-4 font-semibold text-lg bg-red-600 text-white px-3 py-2 hover:bg-red-500 hover:text-white rounded-lg"
              : "mx-4 font-semibold text-lg px-3 py-2 hover:bg-red-500 hover:text-white rounded-lg"
          }
          to="/blogs"
        >
          Blogs
        </NavLink>
        {user ? (
          <button
            onClick={handleSignOut}
            className="mx-4 font-semibold text-lg px-3 py-2 hover:bg-red-500 hover:text-white rounded-lg"
          >
            Sign Out
          </button>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "mx-4 font-semibold text-lg bg-red-600 text-white px-3 py-2 hover:bg-red-500 hover:text-white rounded-lg"
                : "mx-4 font-semibold text-lg px-3 py-2 hover:bg-red-500 hover:text-white rounded-lg"
            }
            to="/login"
          >
            Login
          </NavLink>
        )}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "mx-4 font-semibold text-lg bg-red-600 text-white px-3 py-2 hover:bg-red-500 hover:text-white rounded-lg"
              : "mx-4 font-semibold text-lg px-3 py-2 hover:bg-red-500 hover:text-white rounded-lg"
          }
          to="/about"
        >
          About Me
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
