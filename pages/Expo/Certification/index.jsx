import Layout from "@/layout/Layout";
import Image from "next/image";

import Logos from "@/public/assets/img/Customers/img/alianzas.png";
import Certificaciones from "@/public/assets/img/Customers/img/logos certificaciones new.png";
const Certifications = () => {
  return (
    <Layout>
      {" "}
      <div className="lg:h-screen bg-fixed bg-center bg-cover imgBgExpo_3 pb-10">
        <div className="container text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl lg:px-10 pt-10">
          <h1 className="pt-10 text-3xl lg:text-5xl text-center">
            Certifications
          </h1>

          <div>
            <Image
              src={Certificaciones}
              className="w-[380px] lg:w-[100%] lg:-translate-y-20"
              alt="Certificaciones"
            />
          </div>
        </div>
      </div>
      <div className="h-screen bg-fixed bg-center bg-cover imgBgExpo_4">
        <div className="container text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-2 lg:px-10 pt-10">
          <h1 className="pt-10 text-3xl lg:text-5xl text-center lg:text-right">
            Alliances
          </h1>

          <section className="flex justify-end pt-28">
            <Image src={Logos} className="lg:w-[50%]" alt="Logos" />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Certifications;
