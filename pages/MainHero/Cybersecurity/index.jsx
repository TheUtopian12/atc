import ServiceBadge from "@/components/ServiceBadge";
import Image from "next/image";
import Cybersecurity_1 from "@/public/assets/img/Cybersecurity/logos/logo.png";

import Cybersecurity_2 from "@/public/assets/img/Cybersecurity/logos/logo-hillstone-2.png";

import Cybersecurity_3 from "@/public/assets/img/Cybersecurity/logos/Fortinet_logo.svg.png";
import Diagrama from "@/public/assets/img/Cybersecurity/grafica.png";

const Cybersecurity = () => {
  return (
    <>
      <section className="bg-[url('/assets/img/Backgrounds/ciberseguridad.jpg')] bg-cover h-[100vh]  relative">
        <section className="absolute top-0 left-10">
          <ServiceBadge id="5" image="Ciberseguridad_1" />
        </section>

        <div className="absolute left-[10%] top-[5%] text-white text-4xl text-center pt-14 w-[900px]">
          <h1 className="pb-12 font-bold text-6xl">Cybersecurity</h1>
          <p className="pt-12 container mx-auto">
            Nowadays, all companies take care of their goods and assets with
            locks, perimeter fences, cctv cameras, etc, but not all of them take
            care of their cybersecurity, the theft or kidnapping of information
            to vital equipment for its operation is a hard blow for any company.
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

      <section className="bg-[url('/assets/img/Backgrounds/ciberseguridad_2.jpg')] bg-cover h-[100vh]  relative">
        <section className="absolute top-0 right-10">
          <ServiceBadge id="5" image="Ciberseguridad_1" />
        </section>
        <div className=" text-white text-4xl text-center pt-14 ">
          <h1 className="pb-12 font-bold text-6xl">Cybersecurity</h1>
        </div>

        <article className="flex justify-evenly mt-20">
          <p className="text-3xl text-white w-[500px] text-center">
            Don{"'"}t be part of the attack statistics,{" "}
            <span className="font-bold">with our leading brands</span>
            in cybersecurity we can support you.
          </p>

          <p className="text-3xl text-white w-[600px] rounded-[40px] p-5 mt-10 border-[5px] text-center">
            How many organizations <br /> reported attacks data ransomware
            <br />
            attacks in the last year?
          </p>
        </article>
        <article>
          <div className="grid relative ml-10">
            <Image
              src={Cybersecurity_2}
              className="w-[400px] absolute left-10"
              alt="Imagen ciberseguridad"
            />
            <Image
              src={Cybersecurity_1}
              className="w-[400px] absolute left-52 top-40"
              alt="Imagen ciberseguridad"
            />

            <Image
              src={Cybersecurity_3}
              className="w-[400px] absolute left-32 top-80"
              alt="Imagen ciberseguridad"
            />
          </div>
        </article>
        <article>
          <Image
            src={Diagrama}
            alt="diagrama"
            className="absolute right-0 mt-10"
          />
        </article>
      </section>
    </>
  );
};

export default Cybersecurity;
