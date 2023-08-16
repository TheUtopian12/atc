import Image from "next/image";
import LogoXcien from "./img/xcien_logo.png";
import Layout from "@/layout/Layout";
import VoipIcon1 from "./img/VoIP Icon1.png";
import VoipIcon2 from "./img/VoIP Icon2.png";
import VoipIcon3 from "./img/VoIP Icon3.png";
import VoipIcon4 from "./img/VoIP Icon4.png";
import VoipIcon5 from "./img/VoIP Icon5.png";
import VoipIcon6 from "./img/VoIP Icon6.png";
import VoipIcon7 from "./img/VoIP Icon7.png";
import VoipIcon8 from "./img/VoIP Icon8.png";
import VoipIcon9 from "./img/VoIP Icon9.png";
import VoipIcon10 from "./img/VoIP Icon10.png";
const VoIP = () => {
  return (
    <Layout>
      <div className="h-screen  bg-center bg-cover imgBgExpo_15 relative flex justify-end  items-center ">
        <div className="mr-[20%] ">
          <h1 className="pt-10 text-3xl lg:text-7xl text-center text-white font-bold ">
            VoIP
          </h1>
          <Image src={LogoXcien} alt="logo xcien" className="w-32 lg:w-96" />
        </div>
      </div>

      <div className="h-screen lg:h-[120vh] bg-cover imgBgExpo_16 relative ">
        <h1 className="pt-20 lg:ml-10 text-3xl lg:text-5xl text-center lg:text-left text-white">
          VoIP
        </h1>
        <div>
          <p
            className="pt-10 lg:pt-28 container mx-auto lg:mx-0  text-center
           lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10 lg:w-[40%]"
          >
            With our VoIP telephony service we allow you to achieve an easy,
            effective and flexible communication in your business.
            <br />
            <br />
            We integrate the best tools to provide greater productivity.
            <br />
            <br />
            Life is mobile and companies increasingly demand solutions that can
            be executed from any device and anywhere.
            <br />
            <br />
            VoIP is the best solution for the Digital Transformation of
            companies.
          </p>
        </div>
      </div>

      <div className="2xl:h-screen  bg-center bg-cover imgBgExpo_8 relative ">
        <h1 className="pt-20 ml-10 text-3xl lg:text-5xl text-left text-white">
          VoIP
        </h1>
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 place-items-center place-content-center mt-28 text-white">
          <div className="w-[100%] grid lg:flex gap-5 py-10 px-28">
            <Image src={VoipIcon1} alt="Icon" className="w-[100px]" />
            <p className="">Virtual switch</p>
          </div>
          <div className="w-[100%] lg:flex gap-5 py-10 px-28">
            <Image src={VoipIcon2} alt="Icon" className="w-[100px]" />
            <p className="">
              Operates over the same network, the telephone sets have 2 network
              ports (bridging).
            </p>
          </div>
          <div className="w-[100%] lg:flex gap-5 py-10 px-28">
            <Image src={VoipIcon3} alt="Icon" className="w-[100px]" />
            <p className="">
              {" "}
              Mobile extensions, configure your extension on your mobile
              devices.
            </p>
          </div>
          <div className="w-[100%] lg:flex gap-5 py-10 px-28">
            <Image src={VoipIcon4} alt="Icon" className="w-[100px]" />
            <p className="">
              Flexibility use your phone extensions in your office, home or
              wherever you are etc.
            </p>
          </div>
          <div className="w-[100%] lg:flex gap-5 py-10 px-28">
            <Image src={VoipIcon5} alt="Icon" className="w-[100px]" />
            <p className="">Reduce your phone bill</p>
          </div>
          <div className="w-[100%] lg:flex gap-5 py-10 px-28">
            <Image src={VoipIcon6} alt="Icon" className="w-[100px]" />
            <p className="">Call quality</p>
          </div>
          <div className="w-[100%] lg:flex gap-5 py-10 px-28">
            <Image src={VoipIcon7} alt="Icon" className="w-[100px]" />
            <p className="">Business Service</p>
          </div>
          <div className="w-[100%] lg:flex gap-5 py-10 px-28">
            <Image src={VoipIcon10} alt="Icon" className="w-[100px]" />
            <p className="">Scalability</p>
          </div>
          <div className="w-[100%] lg:flex gap-5 py-10 px-28">
            <Image src={VoipIcon9} alt="Icon" className="w-[100px]" />
            <p className="">Online technical support</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VoIP;
