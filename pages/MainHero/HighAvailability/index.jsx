import Image from "next/image";
import ServiceBadge from "@/components/ServiceBadge";
import Disponibilidad from "@/public/assets/img/HighAvailability/3_altadisponibilidad.png";
import SDWAN from "@/public/assets/img/HighAvailability/3_altadisponibilidad_sdwan.png";
import Peplink from "@/public/assets/img/HighAvailability/logos/logo peplink.png";
import Mikro from "@/public/assets/img/HighAvailability/logos/MikroTik_Logo_(2022).svg.png";
import Orquestador from "@/public/assets/img/HighAvailability/logos/Orquestador.png";

const HighAvailability = () => {
  return (
    <>
      <section className="bg-[url('/assets/img/Backgrounds/alta_disponibilidad_low.jpg')] bg-cover h-[100vh]  relative">
        <section className="absolute top-0 left-10">
          <ServiceBadge id="3" image="Alta disponibilidad_1" />
        </section>

        <div className=" text-white text-4xl text-center pt-14 ">
          <div className="pl-0">
            <h1 className="mb-0 font-bold text-6xl">High availability</h1>
          </div>
          <article className="absolute top-[25%] left-[10%] w-[1000px]">
            <p className="container">
              Nowadays, a company has at least two internet services to protect
              its operation or at least its critical services or users, but
              normally the solution is unfinished, because although the
              necessary elements are in place, many times these actions must be
              executed manually and with the dependence of an expert in the
              subject, which makes it complicated and tedious to carry it out
              quickly and effectively, when it should be a simple and routine
              action.
            </p>
            <Image
              src={Disponibilidad}
              className="w-[700px] pt-10"
              alt="Imagen disponibilidad"
            />
          </article>
        </div>
      </section>
      <section className="bg-[url('/assets/img/Backgrounds/alta_disponibilidad_2_low.jpg')] bg-cover h-[110vh]  relative">
        <section className="absolute top-0 right-10">
          <ServiceBadge id="3" image="Alta disponibilidad_1" />
        </section>

        <div className="pl-64 text-white text-4xl text-center pt-14 ">
          <div className="pl-0">
            <h1 className="mb-0 font-bold text-6xl">High availability</h1>
          </div>
          <article className="">
            <div className=" text-white text-3xl text-center pt-14 ">
              <article className="container mx-auto w-[60%]">
                <h2 className="mb-12">Service process:</h2>
                <p className="mb-12">
                  <span className="text-green-500 font-bold">1.</span> Technical
                  approach <br /> Technical service information, links, needs,
                  applications, and type of use are collected to quote the
                  project.
                </p>
                <p className="mb-12">
                  <span className="text-green-500 font-bold">2.</span> Design{" "}
                  <br /> The solution is designed based on the information and
                  requirements gathered during the approach or technical visit,
                  covering the current and future needs of the client so that
                  their investment is scalable and long lasting.
                </p>
                <p className="mb-12">
                  <span className="text-green-500 font-bold">3.</span>{" "}
                  Implementation <br /> Based on the design, deployment planning
                  is performed to impact the customer{"'"}s operation as little
                  as possible and to execute the delivery smoothly.
                </p>
                <p className="mb-12">
                  <span className="text-green-500 font-bold">4.</span> Service
                  delivery <br /> The project is released together with the
                  project{"'"}s technical report, evidence of automatic high
                  availability execution tests and the configuration log file.
                </p>
              </article>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[url('/assets/img/Backgrounds/alta_disponibilidad_3.jpg')] bg-cover h-[100vh]  relative">
        <section className="absolute top-0 right-10">
          <ServiceBadge id="3" image="Alta disponibilidad_1" />
        </section>

        <div className=" text-white text-4xl text-center pt-14 ">
          <div className="pl-0">
            <h1 className="mb-0 font-bold text-6xl">High availability</h1>
            <h1 className="mb-0 font-normal text-3xl">
              Technology, applications and brands:
            </h1>
          </div>
        </div>

        <article className="flex justify-center items-center pt-36 gap-20 ">
          <Image src={SDWAN} alt="Micro" className="w-[850px]" />
          <div className="grid grid-cols-1 place-items-center gap-2 border-2 rounded-[80px] w-[600px] h-[600px]">
            <Image src={Orquestador} alt={"Orquestador"} className="w-56" />
            <Image src={Peplink} alt={"Peplink"} className="w-56" />
            <Image src={Mikro} alt={"Mikro"} className="w-56" />
          </div>
        </article>
      </section>
    </>
  );
};

export default HighAvailability;
