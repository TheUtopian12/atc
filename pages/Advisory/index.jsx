import React from "react";

import { AiFillCheckCircle } from "react-icons/ai";
const Advisory = () => {
  return (
    <div>
      <div className="bg-[url('/assets/img/Backgrounds/asesoria_low.jpg')] bg-cover h-[110vh] relative">
        <div className="container text-white text-3xl text-left w-[50%] pl-5 absolute top-[20%] left-0">
          <h1 className="mb-8 font-bold text-6xl">
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

          <h1 className="mb-8 font-bold text-6xl">Telecommunications</h1>
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
