import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
const Offer = () => {
  return (
    <div className="bg-[url('/assets/img/Backgrounds/offer.jpg')] bg-cover h-[110vh] xl:h-[120vh] relative">
      <div className="absolute lg:hidden top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div
        className="container  text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
      text-center xl:text-right xl:w-[50%] xl:pr-5 absolute top-[10%] xl:top-[10%] lg:right-0 lg:pr-10 xl:right-0 z-[2]"
      >
        <h1 className="mb-12 font-bold text-3xl lg:text-6xl">
          What do we offer?
        </h1>
        <p className="mb-12">
          <AiFillCheckCircle className="text-green-500 inline-flex " /> We
          provide solutions for projects and help the customer with a model that
          offers, commitment and service at competitive prices.
        </p>
        <p className="mb-12">
          <AiFillCheckCircle className="text-green-500 inline-flex" />
          We add value through experience.
        </p>
        <p className="mb-12">
          <AiFillCheckCircle className="text-green-500 inline-flex" /> We help
          to manage and implement your communication projects.
        </p>
        <p className="mb-12">
          <AiFillCheckCircle className="text-green-500 inline-flex" />
          We offer an efficient and quality engineering service, attending each
          phase of the project implementation.
        </p>
        <p className="mb-12">
          <AiFillCheckCircle className="text-green-500 inline-flex" />
          Looking for the execution in the best time and with the highest
          possible efficiency.
        </p>
      </div>
    </div>
  );
};

export default Offer;
