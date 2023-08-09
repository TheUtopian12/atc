import React from "react";
import Service from "./ManagedServices/Service";

const Services = () => {
  return (
    <div className="h-[180vh] sm:h-[130vh] pt-20 bg-cover bg-[url('/assets/img/Backgrounds/Servicios.jpg')]">
      <h1 className="text-white sm:pb-10 text-3xl md:text-7xl lg:text-5xl text-center font-bold">
        Managed Services
      </h1>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 lg:pt-10 ">
        <Service
          id="1"
          title="Structured cabling"
          image="Cableado estructurado_1"
          ancho="80"
        />
        <Service
          id="2"
          title="Wireless Networks"
          image="Redes inalambricas_1"
          ancho="80"
        />
        <Service
          id="3"
          title="High availability "
          image="Alta disponibilidad_1"
          ancho="72"
        />{" "}
        <Service
          id="4"
          title="Video surveillance"
          image="Video vigilancia"
          ancho="80"
        />
      </section>
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 lg:pt-36 ">
        <Service
          id="5"
          title="Cybersecurity"
          image="Ciberseguridad_1"
          ancho="80"
        />
        <Service
          id="6"
          title="Office interconnection"
          image="Interconexion de oficinas"
          ancho="80"
        />
        <Service
          id="7"
          title="Network Consulting"
          image="asesoramiento"
          ancho="80"
        />
        <Service
          id="8"
          title="After Sales"
          image="iconoa fter sales"
          ancho="80"
        />
      </section>
    </div>
  );
};

export default Services;
