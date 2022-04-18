import React from "react";
import { Link } from "react-router-dom";
import google from "../../images/Google.png";
import github from "../../images/Github.png";

const CreateAccount = () => {
  return (
    <div className="h-[950px] flex justify-center items-center">
      <div className="px-8 rounded-lg border-2 border-cyan-400 mb-20">
        <p className="text-center mb-9 mt-5 text-3xl font-semibold">
          Create an Account
        </p>
        <form>
          <div className="my-3">
            <p className="text-lg my-2">Name</p>
            <input
              className="w-[330px] h-9 border-2 border-blue-500 rounded-lg text-lg px-2"
              type="text"
            />
          </div>
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
          <div className="my-3">
            <p className="text-lg my-2">Confirm Password</p>
            <input
              className="w-[330px] h-9 border-2 border-blue-500 rounded-lg text-xl px-2"
              type="password"
            />
          </div>
          <div className="flex justify-center mt-6 mb-4">
            <button className="border-2 px-4 py-2 border-red-400 rounded-xl text-lg font-medium hover:bg-red-600 hover:text-white">
              Create Account
            </button>
          </div>
        </form>
        <div className="mb-7">
          <div className="flex">
            <p>Alrady have an account ?</p>
            <Link to="/login">
              <p className="ml-1 text-indigo-600">Login</p>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="font-medium">Or login using</p>
        </div>
        <div className="flex justify-center mb-5">
          <img className="w-[65px] my-3 mx-2" src={google} alt="" />
          <img className="w-[65px] my-3 mx-2" src={github} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
