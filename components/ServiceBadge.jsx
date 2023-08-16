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
        className="z-50 w-16 h-16 lg:w-20 lg:h-20"
      />
    </div>
  );
};

export default ServiceBadge;
