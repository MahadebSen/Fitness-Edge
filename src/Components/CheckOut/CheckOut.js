import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const CheckOut = () => {
  const [user] = useAuthState(auth);
  const params = useParams();
  const navigate = useNavigate();

  const handleAddItem = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const id = event.target.id.value;
    const service = event.target.service.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const newProduct = {
      name,
      id,
      service,
      email,
      phone,
    };

    if (newProduct) {
      toast.success("Order placed");
      navigate("/");
    }
  };

  return (
    <div className="my-[85px] mx-10">
      <h1 className="text-center text-4xl font-semibold">Check Out</h1>
      <section className="flex justify-center items-center mt-8">
        <form onSubmit={handleAddItem}>
          <input
            placeholder="Name"
            className="block border-2 border-blue-600 rounded-full my-4 w-[400px] h-[43px] pl-4 text-lg"
            type="text"
            name="name"
            id=""
            required
          />
          <input
            className="block border-2 border-blue-600 rounded-full my-4 w-[400px] h-[43px] pl-4 text-lg"
            type="text"
            name="id"
            id=""
            value={params.id}
            readOnly
            required
          />
          <input
            placeholder="Service's name"
            className="block border-2 border-blue-600 rounded-full my-4 w-[400px] h-[43px] pl-4 py-3 text-lg"
            type="text"
            name="service"
            id=""
            required
          />
          <input
            className="block border-2 border-blue-600 rounded-full my-4 w-[400px] h-[43px] pl-4 text-lg"
            type="email"
            name="email"
            value={user?.email}
            readOnly
            disabled
            id=""
            required
          />
          <input
            placeholder="Phone no."
            className="block border-2 border-blue-600 rounded-full my-4 w-[400px] h-[43px] pl-4 text-lg"
            type="number"
            name="phone"
            id=""
            required
          />

          <button className="block mx-auto mt-12 border-2 px-5 py-2 rounded-lg bg-blue-500 text-white font-medium text-lg hover:text-black hover:bg-white hover:border-blue-400">
            Place Order
          </button>
        </form>
      </section>
    </div>
  );
};

export default CheckOut;
