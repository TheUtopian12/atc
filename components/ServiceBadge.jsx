import React from "react";
import Image from "next/image";

const ServiceBadge = ({ title, image }) => {
  return (
    <div className="pt-10 sm:flex md:flex lg:grid  items-center justify-center ">
      <Image
        src={`/assets/img/icons/${image}.png`}
        width={200}
        height={200}
        alt="Servicio"
        className="z-50 w-20 h-20 lg:w-40 lg:h-40"
      />
    </div>
  );
};

export default ServiceBadge;
