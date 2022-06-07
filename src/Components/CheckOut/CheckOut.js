import React from "react";
import { useParams } from "react-router-dom";

const CheckOut = () => {
  const params = useParams();
  return (
    <div className="h-[750px]">
      <p>This is checkout.</p>
      <p>{params.id}</p>
    </div>
  );
};

export default CheckOut;
