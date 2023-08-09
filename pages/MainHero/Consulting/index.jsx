import ServiceBadge from "@/components/ServiceBadge";
import React from "react";

const Consulting = () => {
  return (
    <>
      <section className="bg-[url('/assets/img/Backgrounds/asesoramiento_de_redes_low.jpg')] bg-cover h-[100vh]  relative">
        <section className="absolute top-0 left-10">
          <ServiceBadge id="3" image="asesoramiento" />
        </section>

        <div className=" text-white text-4xl text-center pt-14 ">
          <div className="pl-0">
            <h1 className="mb-0 font-bold text-6xl">Network consulting</h1>
            <h1 className="mb-0 font-normal text-3xl">
              (evaluation and design of internal network <br /> solutions for
              companies)
            </h1>
          </div>
          <article className="absolute top-[25%] left-[5%] w-[1000px] ">
            <p className="container mx-auto my-20">
              Generally, the growth of companies tends to be somewhat
              uncontrolled and falls short of meeting its own to meet the needs
              of its own operation, to meet the needs of your own operation. It
              is common to see companies operating in several wired or wireless
              networks without communicating with each other, network slowness,
              collective work limitations, etc.
            </p>
            <p className="container mx-auto">
              We support you to have a single network with the necessary
              controls and optimal performance for day to day operation and with
              preparation for growth of the same.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Consulting;
