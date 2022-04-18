import React from "react";
import google from "../../images/Google.png";
import github from "../../images/Github.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-[750px] flex justify-center items-center">
      <div className="px-8 rounded-lg border-2 border-cyan-400 mb-16">
        <p className="text-center mb-9 mt-5 text-3xl font-semibold">Login</p>
        <form>
          <div className="my-3">
            <p className="text-lg my-2">Email</p>
            <input
              className="w-[330px] h-9 border-2 border-blue-500 rounded-lg text-lg px-2"
              type="text"
            />
          </div>
          <div className="my-3">
            <p className="text-lg my-2">Password</p>
            <input
              className="w-[330px] h-9 border-2 border-blue-500 rounded-lg text-xl px-2"
              type="password"
            />
          </div>
          <div className="flex justify-center mt-6 mb-4">
            <button className="border-2 px-4 py-2 border-red-400 rounded-xl text-lg font-medium hover:bg-red-600 hover:text-white">
              Submit
            </button>
          </div>
        </form>
        <div className="mb-7">
          <div className="flex">
            <p>New to here.</p>
            <Link to="/createaccount">
              <p className="ml-1 text-indigo-600">Create Account</p>
            </Link>
          </div>
          <div className="flex">
            <p>Don't remember password?</p>
            <p className="ml-1 text-indigo-600">Forget Password</p>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="font-medium">Or, login using</p>
        </div>
        <div className="flex justify-center mb-5">
          <img className="w-[65px] my-3 mx-2" src={google} alt="" />
          <img className="w-[65px] my-3 mx-2" src={github} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
