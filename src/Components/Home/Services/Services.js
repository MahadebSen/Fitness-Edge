import React, { useEffect, useState } from "react";
import EachItem from "./EachItem";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("fakeData/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <section>
        <p className="text-center font-semibold text-4xl m-10">Services</p>
        <div className="grid grid-cols-3 gap-8 mx-8">
          {services.map((item) => (
            <EachItem key={item.id} item={item}></EachItem>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
