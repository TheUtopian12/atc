import React from "react";

const WhatIs = () => {
  return (
    <div className="bg-[url('/assets/img/Backgrounds/5_ICT_low.jpg')]  bg-cover h-[100vh] flex justify-center relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="container text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center mt-14 z-[2]">
        <h1 className="mb-12 font-bold text-4xl lg:text-6xl">What is ICT?</h1>
        <p className="mb-12">
          I.C.T. is an acronym for Information and Communication Technologies
          and encompasses all types of digital technologies such as internet,
          telecommunications, networks, systems and hardware.
        </p>
        <p>
          They include a series of generally unified tools and technologies to
          provide effective information management and processing.
        </p>
      </div>
    </div>
  );
};

export default WhatIs;
