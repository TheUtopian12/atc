import React from "react";

import { AiFillCheckCircle } from "react-icons/ai";
const Advisory = () => {
  return (
    <div>
      <div className="bg-[url('/assets/img/Backgrounds/asesoria_low.jpg')] bg-cover h-[123vh] relative">
        <div className="absolute lg:hidden top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]" />
        <div
          className="container text-white sm:text-lg md:text-xl lg:text-2xl xl:text-2xl  
        text-center lg:text-left lg:w-[50%] lg:pl-5 absolute top-24 lg:top-[9%] xl:top-[10px] lg:left-0 z-[2]"
        >
          <h1 className="mb-8 font-bold text-4xl lg:text-6xl">
            Advisory and consulting services
          </h1>
          <p className="mb-8">
            <AiFillCheckCircle className="text-green-500 inline-flex " />
            Analysis and diagnosis of new technologies in your company.
          </p>
          <p className="mb-8">
            <AiFillCheckCircle className="text-green-500 inline-flex" />
            Analysis of voice and data networks.
          </p>
          <p className="mb-8">
            <AiFillCheckCircle className="text-green-500 inline-flex" />{" "}
            Consultancy for the contracting of communication products and
            services.
          </p>

          <h1 className="mb-8 font-bold text-4xl lg:text-6xl">
            Telecommunications
          </h1>
          <p className="mb-8">
            <AiFillCheckCircle className="text-green-500 inline-flex" />
            Consulting and implementation of structured cabling system
            solutions.
          </p>
          <p className="mb-8">
            <AiFillCheckCircle className="text-green-500 inline-flex" />
            Fiber optic networks
          </p>
          <p className="mb-8">
            <AiFillCheckCircle className="text-green-500 inline-flex" />
            Voice over IP PBX
          </p>
          <p className="mb-8">
            <AiFillCheckCircle className="text-green-500 inline-flex" />
            Optimized computer networks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advisory;
