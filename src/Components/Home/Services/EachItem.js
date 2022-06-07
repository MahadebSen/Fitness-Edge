import React from "react";
import { Link } from "react-router-dom";

const EachItem = ({ item }) => {
  const { id, image, name, about, price } = item;
  return (
    <div className="border-2 p-3 rounded-lg">
      <div className=" rounded-md flex flex-col">
        <img className="rounded-md" src={image} alt="" />
        <p className="text-xl font-semibold my-2">{name}</p>
        <p className="">
          {about.length > 100 ? about.slice(0, 100) + "..." : about}
        </p>
        <p className="font-semibold text-xl my-2">${price}</p>
        <Link to={`/services/${id}`}>
          <button className="mt-4 md:self-start border-2 border-blue-500 my-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-white hover:text-blue-600">
            Check Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EachItem;
