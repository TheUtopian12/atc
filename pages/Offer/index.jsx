import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
const Offer = () => {
  return (
    <div className="bg-[url('/assets/img/Backgrounds/offer.jpg')] bg-cover h-[110vh] relative">
      <div className="container text-white text-4xl text-right w-[50%] pr-5 absolute top-[20%] right-0">
        <h1 className="mb-12 font-bold text-6xl">What do we offer?</h1>
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
