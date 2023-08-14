import ServiceBadge from "@/components/ServiceBadge";
import Layout from "@/layout/Layout";
import Image from "next/image";
import React from "react";
import { ImArrowRight } from "react-icons/im";

const Estructurado = () => {
  return (
    <>
      <Layout>
        <section className="bg-[url('/assets/img/Backgrounds/videovigilancia_low.jpg')] bg-cover h-[100vh] md:h-[110vh] lg:h-[120vh]  relative">
          <section className="absolute top-6 left-10">
            <ServiceBadge id="1" image="Cableado estructurado_1" />
          </section>

          <div className=" text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center pt-40 ">
            <h1 className="mb-12 font-bold text-3xl lg:text-6xl">
              Structured cabling
            </h1>
            <p className="mb-12">
              The backbone of telecommunications networks.
            </p>
            <p>
              We support with the analysis, design and implementation of
              structured telecommunications cabling.
            </p>
          </div>

          <section className="flex justify-center items-center pt-24 sm:pt-32 md:pt-48 xl:pt-20 gap-2 ">
            <Image
              src={"/assets/img/Structured/1_Cableadoestructurado.png"}
              width={500}
              height={300}
              alt="Estructurado"
              className="w-[150px] sm:w-[200px] md:w-[280px] lg:w-[350px] xl:w-[500px]"
            />
            <ImArrowRight
              size={200}
              color="orange"
              className="w-[150px] sm:w-[150px] md:w-[200px] lg:w-[300px] xl:w-[500px]"
            />
            <Image
              src={"/assets/img/Structured/2_Cableado estructurado.jpg"}
              width={500}
              height={300}
              alt="Estructurado"
              className="w-[150px] sm:w-[200px] md:w-[280px] lg:w-[350px] xl:w-[500px]"
            />
          </section>
        </section>
        <section className="bg-[url('/assets/img/Backgrounds/cableado_estructurado_low.jpg')] bg-cover pb-10 relative h-[150vh] 2xl:h-[110vh]">
          <div className="absolute 2xl:hidden top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
          <div className="absolute container text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-center 2xl:right-0 pt-36 z-[2]">
            <h1 className="mb-12 font-bold text-3xl lg:text-6xl">
              Structured cabling
            </h1>
            <article className="container mx-auto px-2 text-center">
              <h2 className="mb-12">Service process:</h2>
              <p className="mb-12">
                <span className="text-green-500 font-bold">1.</span> Technical
                visit <br /> Technical information, plans, measurements, needs
                and feasibilities are gathered to quote the project.
              </p>
              <p className="mb-12">
                <span className="text-green-500 font-bold">2.</span> Design{" "}
                <br /> The solution is designed based on the information and
                requirements gathered during the technical visit, covering the
                current and future needs of the client so that their investment
                is scalable and durable.
              </p>
              <p className="mb-12">
                <span className="text-green-500 font-bold">3.</span>{" "}
                Implementation <br /> Based on the design, the deployment is
                planned in order to have the least possible impact on the client
                {"'"}s productive spaces and to execute the delivery smoothly.
              </p>
              <p className="mb-12">
                <span className="text-green-500 font-bold">4.</span> Service
                delivery <br /> The project is released together with the
                technical report of the project, identification of nodes, and
                certification registration file of the network nodes.
              </p>
            </article>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Estructurado;
