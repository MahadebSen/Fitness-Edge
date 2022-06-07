import React from "react";
import { Link } from "react-router-dom";

const EachItem = ({ item }) => {
  const { image, name, about, price } = item;
  return (
    <div className="border-2 p-3 rounded-lg">
      <div className=" rounded-md md:h-[510px] lg:h-[500px] xl:h-[550px] 2xl:h-[620px] flex flex-col">
        <img className="rounded-md" src={image} alt="" />
        <p className="text-xl font-semibold my-2">{name}</p>
        <p className="">{about}</p>
        <p className="font-semibold text-xl my-2">${price}</p>
        <Link to="/checkout">
          <button className="md:mt-auto md:self-start border-2 border-blue-500 my-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-white hover:text-blue-600">
            Check Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EachItem;
