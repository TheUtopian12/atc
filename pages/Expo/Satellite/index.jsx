import Image from "next/image";
import Officer from "@/public/assets/img/Satellite/img/customs-officer.svg";
import Fuel from "@/public/assets/img/Satellite/img/fuel-station.svg";
import Pharmacy from "@/public/assets/img/Satellite/img/pharmacy.svg";
import Store from "@/public/assets/img/Satellite/img/store.svg";
import WareHose from "@/public/assets/img/Satellite/img/warehouse.svg";

import Starlink from "@/public/assets/img/Satellite/img/antena_satelital.png";

import Diagrama from "@/public/assets/img/Satellite/img/diagrama_ingles.png";
const Satellite = () => {
  return (
    <>
      <div className="h-screen  bg-center bg-cover imgBgExpo_10">
        <div className="container mx-auto text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10">
          <h1 className="pt-10 text-3xl lg:text-5xl text-left">
            Satellite Internet
          </h1>
          <p className="pt-14">
            High-speed broadband internet service for remote or isolated sites.
          </p>

          <p className="pt-14 ">
            Based on low orbit satellite technology, the XCIEN satellite
            internet service offers optimal performance for applications that
            require a fast response optimal performance for applications that
            require a fast response such as point-of-sale terminals, voice over
            IP, closed circuit systems, alarms or streaming.
          </p>
          <h2 className="text-center pt-28 font-bold">Average speeds</h2>

          <div className="flex justify-center items-center gap-10 p-10">
            <div className=" rounded-3xl  p-8 text-center bg-[#70b404] w-96 ">
              Download <br /> ranges from: <br /> 100 - 200 Mbps
            </div>
            <div className="border-2 rounded-3xl p-8 text-center  border-[#70b404]  w-96">
              Upload <br /> ranges from: <br /> 10 - 20 Mbps
            </div>
          </div>
        </div>
      </div>
      <>
        <div className="h-screen bg-fixed bg-center bg-cover imgBgExpo_11 relative">
          <div className="container mx-auto text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10">
            <h1 className="pt-10 text-3xl lg:text-5xl text-center">
              Ideal markets
            </h1>
            <p className="pt-14 text-center">
              We provide internet connection in isolated or remote areas,
              through satellite technology remote areas using state-of-the-art
              satellite technology.
            </p>
            <div className="absolute">
              <div className="flex justify-center gap-36 pt-10">
                <Image src={Officer} alt="officer" className="w-24" />
                <Image src={Fuel} alt="Fuel" className="w-24" />
                <Image src={Pharmacy} alt="Pharmacy" className="w-24" />
              </div>
              <div className="flex justify-center gap-36 pt-28">
                <Image src={Store} alt="Store" className="w-24" />
                <Image src={WareHose} alt="WareHose" className="w-24" />
              </div>
            </div>

            <div className="absolute bottom-36 right-14">
              <Image src={Starlink} className="w-[500px]" alt="Starlink" />
            </div>
            <div className="absolute bottom-5 right-[30%]">
              <p>
                State-of-the-art
                <br />
                <span className="font-bold">satellite technology</span>
              </p>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="h-screen bg-fixed bg-center bg-cover imgBgExpo_12">
          <div className="container mx-auto text-center lg:text-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10">
            <h1 className="pt-10 text-3xl lg:text-5xl text-center">
              Monitoring
            </h1>
            <p className="pt-14">
              We have a nationwide call center for technical support, service
              monitoring and on-site incident response, and we operate under
              established service levels.
            </p>

            <div className="pt-14 text-left">
              <p className="pt-10">
                Call Center for internal technical support.
              </p>
              <p className="pt-10">
                NOC at international carrier level with specialized tools in
                satellite monitoring and managed internet.
              </p>
              <p className="pt-10">
                Offices in 11 states of the republic that make a nationwide
                coverage.
              </p>
              <p className="pt-10">
                Certified personnel in structured cabling and installation of
                internet services.
              </p>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="h-screen bg-fixed bg-center bg-cover imgBgExpo_3">
          <div className="flex justify-center items-center">
            <Image src={Diagrama} alt="Diagrama" className="w-[900px]" />
          </div>
        </div>
      </>
    </>
  );
};

export default Satellite;
