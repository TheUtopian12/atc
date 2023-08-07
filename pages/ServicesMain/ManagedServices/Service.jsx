import Image from "next/image";
import React from "react";

const Service = ({ id, title, image, ancho }) => {
  return (
    <div className="pt-10 sm:flex md:flex lg:grid  items-center justify-center ">
      <Image
        src={`/assets/img/icons/${image}.png`}
        width={200}
        height={200}
        alt="Servicio"
        className="z-50 w-20 h-20 lg:w-40 lg:h-40"
      />
      <h1 className="w-[300px] lg:w-[200px] text-center sm:left-14  top-14 sm:-top-0 lg:text-center sm:text-xl text-white lg:border-2 rounded-xl p-3 mt-5">
        {title}
      </h1>
    </div>
  );
};

export default Service;
