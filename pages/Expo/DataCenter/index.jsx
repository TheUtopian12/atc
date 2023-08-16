import Layout from "@/layout/Layout";
import Image from "next/image";
import logo from "./img/xcien_logo.png";
import icon from "./img/icons/data center iconos-01.png";
import icon2 from "./img/icons/data center iconos-02.png";
import icon3 from "./img/icons/data center iconos-03.png";
import icon4 from "./img/icons/data center iconos-04.png";
import icon5 from "./img/icons/data center iconos-05.png";
import icon6 from "./img/icons/data center iconos-06.png";
const DataCenter = () => {
  return (
    <Layout>
      <div className="h-screen  bg-center bg-cover imgBgExpo_21 relative ">
        <div>
          <h1 className="pt-[20%] lg:ml-[20%] text-3xl lg:text-5xl text-center lg:text-left text-white">
            DATA CENTER
          </h1>
          <div className="flex justify-center lg:justify-start items-center">
            <Image
              src={logo}
              className="w-32 lg:w-72 pt-5 lg:ml-[20%]"
              alt="logo xcien"
            />
          </div>
        </div>
      </div>
      <div className="lg:h-[105vh]  lg:bg-center bg-cover imgBgExpo_22 relative pb-28">
        <div>
          <h1 className="pt-[10%] lg:mr-[12%] text-3xl lg:text-5xl text-center lg:text-right text-white lg:text-[#20124d]">
            DATA CENTER
          </h1>
          <p className="text-2xl pt-10 text-center  lg:ml-[70%] lg:-translate-x-40 text-white lg:text-black">
            We have specialized personnel for support and operation in our Data
            Center in Monterrey.
          </p>
          <div
            className="absolute top-[40%] -right-0  w-80 h-14 bg-yellow-400 text-2xl flex items-center justify-center text-white
          rounded-r-none rounded-l-full
          "
          >
            Co-location
          </div>
          <p className="text-2xl pt-40 text-center  lg:ml-[50%] lg:-translate-x-40 text-white lg:text-black">
            Rack or Tower co-location includes:
          </p>

          <div className="text-2xl text-white lg:text-black pt-36 text-center ml-[30%] 2xl:ml-[35%]">
            <div className="grid grid-cols-1 lg:grid-cols-3 space-y-2">
              <span>Conditioning</span>
              <span>Technical resources</span>
              <span>Security</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 space-y-2">
              <span>Monitoring</span>
              <span>Energy</span>
            </div>
          </div>
          <p className="text-2xl pt-36 text-center text-white lg:text-black lg:ml-[50%] lg:-translate-x-40 lg:space-x-28 lg:space-y-9">
            Thus, the operator can interconnect to the lessor{"'"}s network or
            facilities.
          </p>
        </div>
      </div>

      <div className="h-screen  lg:bg-center bg-cover imgBgExpo_23 relative ">
        <div className="absolute lg:hidden top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
        <div className="absolute md:right-[20%] lg:right-0 lg:relative z-[2]">
          <h1 className="pt-[5%]  text-3xl lg:text-5xl text-center lg:text-center text-white">
            DATA CENTER
          </h1>
          <div className="grid place-content-center lg:place-content-end pt-[10%] mx-10 text-white text-2xl lg:text-4xl">
            <div className="flex justify-stretch items-center">
              <Image src={icon} alt="Icon" className="w-32" />
              <p>Conditioning</p>
            </div>
            <div className="flex justify-stretch items-center">
              <Image src={icon2} alt="Icon" className="w-32" />{" "}
              <p>Technical resources.</p>
            </div>
            <div className="flex justify-stretch items-center">
              {" "}
              <Image src={icon3} alt="Icon" className="w-32" /> <p>Security.</p>
            </div>
            <div className="flex justify-stretch items-center">
              <Image src={icon4} alt="Icon" className="w-32" />{" "}
              <p>Monitoring.</p>
            </div>
            <div className="flex justify-stretch items-center">
              {" "}
              <Image src={icon5} alt="Icon" className="w-32" /> <p>Support.</p>
            </div>
            <div className="flex justify-stretch items-center">
              {" "}
              <Image src={icon6} alt="Icon" className="w-32" />{" "}
              <p>Personalized attention.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DataCenter;
