import ServiceBadge from "@/components/ServiceBadge";
import Image from "next/image";
import Cybersecurity_1 from "@/public/assets/img/Cybersecurity/logos/logo.png";

import Cybersecurity_2 from "@/public/assets/img/Cybersecurity/logos/logo-hillstone-2.png";

import Cybersecurity_3 from "@/public/assets/img/Cybersecurity/logos/Fortinet_logo.svg.png";
import Diagrama from "@/public/assets/img/Cybersecurity/grafica.png";
import Layout from "@/layout/Layout";

const Cybersecurity = () => {
  return (
    <>
      <Layout>
        <section className="bg-[url('/assets/img/Backgrounds/ciberseguridad.jpg')] bg-cover bg-fixed h-[100vh] pb-10 relative">
          <div className="absolute 2xl:hidden top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]" />
          <section className="absolute top-10 left-10 z-[2]">
            <ServiceBadge id="5" image="Ciberseguridad_1" />
          </section>

          <div className="mx-5 absolute lg:left-[10%] top-[15%] text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center pt-16 lg:w-[900px] z-[2]">
            <h1 className="pb-5 font-bold text-3xl lg:text-6xl">
              Cybersecurity
            </h1>
            <p className="pt-0 container mx-auto">
              Nowadays, all companies take care of their goods and assets with
              locks, perimeter fences, cctv cameras, etc, but not all of them
              take care of their cybersecurity, the theft or kidnapping of
              information to vital equipment for its operation is a hard blow
              for any company.
            </p>

            <p className="pt-12 container mx-auto">
              It is of utmost importance to have a firewall system that protects
              the information coming from the internet to the internal network.
            </p>

            <p className="pt-12 container mx-auto">
              We support you in the implementation and management of a firewall
              protection system to protect your information and ensure the
              continuity of your business.
            </p>
          </div>
        </section>

        <section className="bg-[url('/assets/img/Backgrounds/ciberseguridad_2.jpg')] bg-cover h-[150vh] lg:h-[110vh] pb-10  relative">
          <div className=" text-white text-4xl text-center pt-14 ">
            <h1 className="pb-10 font-bold text-3xl lg.text-6xl">
              Cybersecurity
            </h1>
          </div>

          <article className="lg:flex justify-evenly mx-5">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white lg:w-[500px] text-center">
              Don{"'"}t be part of the attack statistics,{" "}
              <span className="font-bold">with our leading brands</span>
              in cybersecurity we can support you.
            </p>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white lg:w-[600px] rounded-[40px] p-5 mt-10 border-[5px] text-center">
              How many organizations <br /> reported attacks data ransomware
              <br />
              attacks in the last year?
            </p>
          </article>
          <div className="flex flex-col-reverse lg:flex-row lg:flex gap-5 2xl:justify-between">
            <div className="grid place-items-center lg:mt-24 relative lg:ml-10 gap-10 lg:gap-0 mt-10">
              <Image
                src={Cybersecurity_2}
                className="w-[200px] lg:w-[400px]"
                alt="Imagen ciberseguridad"
              />
              <Image
                src={Cybersecurity_1}
                className="w-[200px] lg:w-[400px]"
                alt="Imagen ciberseguridad"
              />

              <Image
                src={Cybersecurity_3}
                className="w-[200px] lg:w-[400px"
                alt="Imagen ciberseguridad"
              />
            </div>
            <div>
              <Image
                src={Diagrama}
                alt="diagrama"
                className="  lg:w-[800px] "
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Cybersecurity;
