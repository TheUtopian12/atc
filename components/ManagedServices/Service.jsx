import Image from "next/image";
import React from "react";

const Service = ({ id, title, image, ancho }) => {
  return (
    <div className="pt-10 sm:flex md:flex md:flex-col  justify-center items-center">
      <div className="relative">
        <div
          className="absolute h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20  -top-4 sm:-top-6   right-14  lg:-right-5   bg-white rounded-full
      border-4 border-green-900
      flex justify-center items-center
      "
        >
          <span className="text-black text-3xl font-bold">{id}</span>
        </div>{" "}
        <Image
          src={`/assets/img/icons/${image}.png`}
          width={200}
          height={200}
          alt="Servicio"
          className="z-50"
        />
        <h1 className="absolute w-[300px] text-center lg:-left-10 text-3xl text-white border-2 rounded-xl p-3 mt-5">
          {title}
        </h1>
      </div>
      <div className="relative"></div>
    </div>
  );
};

export default Service;
