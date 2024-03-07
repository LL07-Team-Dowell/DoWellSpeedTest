// src/components/AuthForm.js
import React, { useState } from "react";
import toast from "react-hot-toast";

const HomePage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
  });

  const { firstName, lastName, email, location } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      location === ""
    ) {
      toast.error("This field cannot be empty");
    } else {
      console.log(formData);
    }
    e.preventDefault();
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-md rounded-md w-[30%]"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          User Details
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={onChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-primary"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={onChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-primary"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-primary"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-600"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={onChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-primary"
          />
        </div>
        <button
          type="submit"
          className="w-[70px] h-[70px] rounded-full bg-primary text-white p-2 hover:bg-opacity-80 focus:outline-none focus:ring focus:border-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HomePage;
