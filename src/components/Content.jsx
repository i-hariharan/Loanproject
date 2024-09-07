import React from "react";
import Features from "./Features";

export default function Content() {
  return (
    <div className="flex w-full lg:h-screen max-md:min-h-screen bg-blue-900  h-full max-md:p-5 justify-between text-white lg:space-x-[100px] my-auto mx-auto max-md:flex-col"    >
      {/* Header Section */}
      <div className="container mx-auto lg:px-10 lg:py-[300px] max-md:p-5 bg-absolute lg:rounded-full max-md:rounded-xl bg-bgimg bg-center  bg-no-repeat flex flex-col justify-start max-md:items-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 ">
          Get Your Loan in a Minute
        </h1>
        <p className="text-center mb-8 text-justify">
          Welcome to L&T finance, where you can find a loan solution customized
          for your needs.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold p-3 rounded-full">
          Get Started
        </button>
      </div>

      {/* Contact Form */}
      <div className="flex justify-start w-full h-full mx-auto lg:p-10 max-md:mt-5">
        <div className="bg-gray-800/50 lg:p-8 max-md:p-5 h-fit rounded-lg shadow-lg w-full mx-auto max-md:items-center">
          <h2 className="flex text-2xl font-bold mb-4 justify-center items-center mx-auto">Contact Form</h2>
          <form>
            <div className="mb-4">
              <label> Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg text-gray-900"
              />
            </div>
            <div className="mb-4">
              <label>Mobile no</label>
              <input
                type="text"
                placeholder="Enter your mobile number"
                className="w-full p-3 rounded-lg text-gray-900"
              />
            </div>
            <div className="mb-4">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg text-gray-900"
              />
            </div>
            <div className="mb-4">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 rounded-lg text-gray-900"
              />
            </div>
            <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full">
              Submit
            </button>
          </form>
          <p className="text-center mt-4">
            Have you already completed the form?{" "}
            <a href="#" className="text-blue-300 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
