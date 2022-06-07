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
        <p className="text-center text-4xl m-10">Services</p>
        <div className="max-w-7xl mx-auto mb-8">
          <div className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item) => (
              <EachItem key={item.id} item={item}></EachItem>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
