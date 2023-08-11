import ServiceBadge from "@/components/ServiceBadge";
import Image from "next/image";
import Post_1 from "@/public/assets/img/AfterSales/aftersales_1_Cableadoestructurado.png";
import Post_2 from "@/public/assets/img/AfterSales/aftersales_2_Certificaciones.jpg";
import Post_3 from "@/public/assets/img/AfterSales/aftersales_3_Implant.jpg";
import Layout from "@/layout/Layout";

const AfterSales = () => {
  return (
    <>
      <Layout>
        <section className="bg-[url('/assets/img/Backgrounds/postventa.jpg')] bg-cover pb-10  relative">
          <section className="absolute top-10 left-10">
            <ServiceBadge id="7" image="iconoa fter sales" />
          </section>

          <div className=" text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center pt-44 lg:pt-14">
            <span className="pb-12 font-bold text-3xl lg:text-6xl">
              After-Sales Services (by policy or event)
            </span>
          </div>

          <section className="grid lg:flex justify-center items-center lg:pt-32  gap-10 ">
            <article>
              <Image
                src={Post_1}
                alt="interconection"
                className="w-[500px] mt-14"
              />
              <div className="text-white text-xl text-center mt-10">
                <span className="font-bold">Structured cabling</span>
                <ul>
                  <li>Technical Support </li>
                  <li>Maintenance </li>
                  <li>Wired network growth.</li>
                </ul>
              </div>
            </article>
            <article>
              <Image src={Post_2} alt="interconection" className="w-[500px]" />
              <div className="text-white text-xl text-center mt-10">
                <span className="font-bold">
                  Cabling certifications (safety)
                </span>
                <ul>
                  <li>Non-intervention communication audit</li>
                </ul>
              </div>
            </article>
            <article>
              <Image src={Post_3} alt="interconection" className="w-[500px]" />
              <div className="text-white text-xl text-center mt-10">
                <span className="font-bold">
                  Implant of specialized technicians
                </span>
                <ul>
                  <li>We incorporate expert members to your work team.</li>
                </ul>
              </div>
            </article>
          </section>
        </section>
      </Layout>
    </>
  );
};

export default AfterSales;
