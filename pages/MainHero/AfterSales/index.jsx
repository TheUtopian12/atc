import ServiceBadge from "@/components/ServiceBadge";
import Image from "next/image";
import Post_1 from "@/public/assets/img/AfterSales/aftersales_1_Cableadoestructurado.png";
import Post_2 from "@/public/assets/img/AfterSales/aftersales_2_Certificaciones.jpg";
import Post_3 from "@/public/assets/img/AfterSales/aftersales_3_Implant.jpg";

const AfterSales = () => {
  return (
    <>
      <section className="bg-[url('/assets/img/Backgrounds/postventa.jpg')] bg-cover h-[100vh]  relative">
        <section className="absolute top-0 left-10">
          <ServiceBadge id="7" image="iconoa fter sales" />
        </section>

        <div className=" text-white text-3xl text-center pt-14">
          <span className="pb-12 font-bold text-6xl">
            After-Sales Services (by policy or event)
          </span>
        </div>

        <section className="flex justify-center items-center pt-32  gap-10 ">
          <article>
            <Image
              src={Post_1}
              alt="interconection"
              className="w-[500px] mt-14"
            />
            <p className="text-white text-xl text-center mt-10">
              <span className="font-bold">Structured cabling</span>
              <ul>
                <li>Technical Support </li>
                <li>Maintenance </li>
                <li>Wired network growth.</li>
              </ul>
            </p>
          </article>
          <article>
            <Image src={Post_2} alt="interconection" className="w-[500px]" />
            <p className="text-white text-xl text-center mt-10">
              <span className="font-bold">Cabling certifications (safety)</span>
              <ul>
                <li>Non-intervention communication audit</li>
              </ul>
            </p>
          </article>
          <article>
            <Image src={Post_3} alt="interconection" className="w-[500px]" />
            <p className="text-white text-xl text-center mt-10">
              <span className="font-bold">
                Implant of specialized technicians
              </span>
              <ul>
                <li>We incorporate expert members to your work team.</li>
              </ul>
            </p>
          </article>
        </section>
      </section>
    </>
  );
};

export default AfterSales;
