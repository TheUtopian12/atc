import ServiceBadge from "@/components/ServiceBadge";
import Image from "next/image";
import SateliteView from "@/public/assets/img/Interconection/interconection.jpg";
import SateliteView2 from "@/public/assets/img/Interconection/interconection_2.jpg";

const Interconection = () => {
  return (
    <>
      <section className="bg-[url('/assets/img/Backgrounds/videovigilancia_low.jpg')] bg-cover h-[100vh]  relative">
        <section className="absolute top-0 left-10">
          <ServiceBadge id="6" image="Interconexion de oficinas" />
        </section>

        <div className=" text-white text-3xl text-center pt-14">
          <h1 className="pb-12 font-bold text-6xl">Office interconnection</h1>
          <p className="pt-12 container mx-auto">
            We support the communication of offices in the same campus,
            industrial park or remote locations, relying on our extensive
            network deployment and more than 23 years of experience in the
            wireless telecommunications sector, achieving unified and robust
            communications to support demanding operations.
          </p>
        </div>

        <section className="flex justify-center items-center pt-32  gap-10 ">
          <Image
            src={SateliteView}
            alt="interconection"
            className="w-[800px]"
          />
          <Image
            src={SateliteView2}
            alt="interconection"
            className="w-[800px]"
          />
        </section>
      </section>
    </>
  );
};

export default Interconection;
