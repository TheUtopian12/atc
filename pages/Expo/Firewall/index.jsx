import Image from "next/image";

import Firewall1 from "./img/firewalli1.png";
import Firewall2 from "./img/firewalli2.png";
import Firewall3 from "./img/firewalli3.png";

import Firewall4 from "./img/beneficios firewall.png";

import Icon1 from "./img/firewall icon1.png";
import Icon2 from "./img/firewall icon2.png";
import Icon3 from "./img/firewall icon3.png";
import Icon4 from "./img/firewall icon4.png";
import Layout from "@/layout/Layout";
const Firewall = () => {
  return (
    <Layout>
      <div className="h-screen  bg-center bg-cover imgBgExpo_13 relative">
        <div className="container mx-auto text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10 pt-10">
          <h1 className="pt-10 text-3xl lg:text-5xl text-center">
            Work securely and always connected
          </h1>
          <h2 className="pt-10 text-3xl lg:text-6xl text-center">Firewall</h2>
        </div>
      </div>
      <div className="lg:h-screen  bg-center bg-cover imgBgExpo_8 relative">
        <div className="container mx-auto text-center lg:text-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl pb-10 px-10">
          <h1 className="pt-10 text-3xl lg:text-5xl text-left">
            Simple, modern and reliable
          </h1>

          <div className="flex justify-center items-center lg:grid">
            <Image
              src={Firewall1}
              className="w-[45%] lg:w-[25%] mt-10"
              alt="Graficas"
            />
            <Image
              src={Firewall2}
              className="w-[45%] lg:w-[25%] mt-10"
              alt="Graficas"
            />
          </div>
          <div className="lg:absolute right-0 top-10 lg:w-[30%]">
            <span className="container mx-auto text-center">
              Security for your business managed 100% from the cloud,
              installation and remote administration is simpler.
              <br />
              Increase the productivity of your business.
            </span>
            <br />
            <br />

            <span className="bg-[#7af5b1]  rounded-3xl px-10 text-black">
              Includes:
            </span>

            <Image src={Firewall3} className=" w-[100%] mt-10" alt="Graficas" />
          </div>
        </div>
      </div>

      <div className="h-[59vh] lg:h-screen  bg-center bg-cover imgBgExpo_14 relative ">
        <div className="absolute lg:hidden top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
        <div
          className="absolute lg:w-[40%] top-[40%] container  text-center lg:text-left text-white text-lg 
        sm:text-xl md:text-2xl lg:text-3xl px-10 z-[2]"
        >
          <span className="text-4xl ">
            The only unified threat management tool managed 100% through the
            cloud.
            <p className="h-[2px] bg-red-600"></p>
          </span>
        </div>
      </div>
      <div className="lg:h-screen bg-fixed bg-center bg-cover imgBgExpo_8 relative">
        <div className="container mx-auto text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10 ">
          <h1 className="pt-10 text-3xl lg:text-5xl text-center">Benefits</h1>
          <div className="flex justify-center items-center pt-10">
            <Image src={Firewall4} alt="BENEFICIOS" className="w-[100%]" />
          </div>
        </div>
      </div>
      <div className="lg:h-screen bg-fixed bg-center bg-cover imgBgExpo_8 relative pb-10">
        <div className="container mx-auto text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10 pt-10">
          <h1 className="pt-10 text-3xl lg:text-5xl text-center">Features</h1>
          <div className="grid place-items-center mt-10">
            <Image src={Icon1} alt="Feature" className="w-[100%] lg:w-[90%]" />
            <Image src={Icon2} alt="Feature" className="w-[100%] lg:w-[90%]" />
            <Image src={Icon3} alt="Feature" className="w-[100%] lg:w-[90%]" />
            <Image src={Icon4} alt="Feature" className="w-[100%] lg:w-[90%]" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Firewall;
