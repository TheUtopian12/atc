import Layout from "@/layout/Layout";
import Image from "next/image";

import Logos from "@/public/assets/img/Customers/img/alianzas.png";

const Certifications = () => {
  return (
    <Layout>
      {" "}
      <div className="h-screen bg-fixed bg-center bg-cover imgBgExpo_3">
        <div className="container text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10 pt-10">
          <h1 className="pt-10 text-3xl lg:text-5xl text-center">
            Certifications
          </h1>
        </div>
      </div>
      <div className="h-screen bg-fixed bg-center bg-cover imgBgExpo_4">
        <div className="container text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10 pt-10">
          <h1 className="pt-10 text-3xl lg:text-5xl text-right">Alianzas</h1>

          <section className="flex justify-end">
            <Image src={Logos} className="w-[70%]" alt="Logos" />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Certifications;
