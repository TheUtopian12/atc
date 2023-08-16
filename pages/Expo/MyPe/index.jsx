import Image from "next/image";
import Mype_1 from "./assets/img/myPE1.png";
import Mype_2 from "./assets/img/myPE2.png";
import Layout from "@/layout/Layout";

const index = () => {
  return (
    <Layout>
      <div className="2xl:h-screen pb-14 bg-fixed lg:bg-center bg-cover imgBgExpo_9">
        <div className="container mx-auto text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10 pt-10">
          <h1 className="pt-10 text-3xl lg:text-5xl lg:text-left">MyPE</h1>
          <p className="pt-14 lg:w-[40%]">
            Tailor-made solution for a micro or small business that requires
            quality internet service at a competitive price.
          </p>

          <p className="pt-14 lg:w-[40%]">
            Service with minimum oversubscription.
          </p>
          <div>
            <Image
              src={Mype_1}
              className="lg:w-[35%] 2xl:w-[40%] my-20"
              alt="Dedicado diagrama"
            />
            <Image
              src={Mype_2}
              className="lg:w-[35%] 2xl:w-[40%]"
              alt="Dedicado diagrama"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
