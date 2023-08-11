import ServiceBadge from "@/components/ServiceBadge";
import Image from "next/image";
import SateliteView from "@/public/assets/img/Interconection/interconection.jpg";
import SateliteView2 from "@/public/assets/img/Interconection/interconection_2.jpg";
import Layout from "@/layout/Layout";

const Interconection = () => {
  return (
    <>
      <Layout>
        <section className="bg-[url('/assets/img/Backgrounds/videovigilancia_low.jpg')] bg-cover pb-10  relative">
          <section className="absolute top-10 left-10">
            <ServiceBadge id="6" image="Interconexion de oficinas" />
          </section>

          <div className=" text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center pt-44">
            <h1 className="pb-12 font-bold text-3xl lg:text-6xl">
              Office interconnection
            </h1>
            <p className=" container mx-auto">
              We support the communication of offices in the same campus,
              industrial park or remote locations, relying on our extensive
              network deployment and more than 23 years of experience in the
              wireless telecommunications sector, achieving unified and robust
              communications to support demanding operations.
            </p>
          </div>

          <section className="grid place-items-center lg:flex justify-center items-center pt-32  gap-10 ">
            <Image
              src={SateliteView}
              alt="interconection"
              className="w-[300px] lg:w-[500px] xl:w-[600px]"
            />
            <Image
              src={SateliteView2}
              alt="interconection"
              className="w-[300px] lg:w-[500px] xl:w-[600px]"
            />
          </section>
        </section>
      </Layout>
    </>
  );
};

export default Interconection;
