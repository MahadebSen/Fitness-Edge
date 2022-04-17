import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="bg-img h-[800px] bg-no-repeat bg-cover">
        <div className="w-[250px] h-[800px] ml-8 flex items-center">
          <div>
            <p className="font-extrabold text-7xl">PERSONAL TRAINING</p>
            <p className="font-medium text-xl my-4 text-gray-600">
              Premium weight loss and lifestyle transformations which create
              long lasting, dramatic results to your health, body & mind.
            </p>
            <button className="m-5 p-3 bg-red-600 rounded-md text-white">
              Start Here
            </button>
            <button className="m-5 p-[9px] border-2 border-black rounded-md">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
      <section>
        <p className="text-center font-semibold text-4xl m-10">Services</p>
        <div></div>
      </section>
    </div>
  );
};

export default Home;
