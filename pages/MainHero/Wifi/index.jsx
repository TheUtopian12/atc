import ServiceBadge from "@/components/ServiceBadge";
import Image from "next/image";
import Wifi_logo_1 from "@/public/assets/img/Wifi/Wi-Fi_CERTIFIED.png";
import Wifi_logo_2 from "../../../public/assets/img/Wifi/wifi.png";

import Aruba from "../../../public/assets/img/Wifi/logos/Aruba_Networks_logo.png";

import eero from "../../../public/assets/img/Wifi/logos/eero Primary logo gray.png";

import Grandstream from "../../../public/assets/img/Wifi/logos/Grandstream-Logo-2018.png";
import omada from "../../../public/assets/img/Wifi/logos/logo omada.png";

import Tplink from "../../../public/assets/img/Wifi/logos/TPLINK_Logo_2.svg.png";

import Ubiquiti from "../../../public/assets/img/Wifi/logos/Ubiquiti_Logo.png";
import Detalle from "@/public/assets/img/Wifi/detalle.png";
import Layout from "@/layout/Layout";

const Wifi = () => {
  return (
    <>
      <Layout>
        <section className="bg-[url('/assets/img/Backgrounds/Servicios.jpg')] bg-cover  relative pt-10">
          <section className=" absolute top-10 left-10">
            <ServiceBadge id="2" image="Redes inalambricas_1" />
          </section>
          <section className="absolute hidden lg:block lg:right-[12%] lg:top-10 xl:right-[16%] xl:top-16 2xl:right-[28%] 2xl:top-16">
            <Image src={Detalle} alt="Detalle" className="w-60" />
          </section>

          <div className=" text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center pt-14 ">
            <h1 className="mt-20 sm:mb-12 font-bold text-3xl lg:text-6xl">
              Wireless Networks (WiFi)
            </h1>

            <article className="grid place-content-center pt-10 sm:pt-32">
              <div className="mx-10 sm:w-[700px] border-[5px] border-white  rounded-3xl lg:-translate-x-40 xl:-translate-x-80 p-8  ">
                <p>
                  Wireless networks allow portable devices such as laptops,
                  tablets or cell phones to remain connected and with the
                  advantage of having mobility within the same office and
                  network.
                </p>
              </div>
              <div className="mx-5  sm:w-[700px] border-[5px] border-green-500  rounded-3xl mt-24 lg:translate-x-20 xl:translate-x-52 p-8">
                <p>
                  Nowadays, it is increasingly common to suffer from poor
                  performance of a wireless network, either by incorrect design,
                  poor sizing of devices or poor choice of technology
                  (incompatibilities or network deficiencies).
                </p>
              </div>
            </article>
          </div>
        </section>
        <section className=" bg-[url('/assets/img/Backgrounds/Redes_inalambricas_2_low.jpg')] bg-cover h-[180vh] xl:h-[180vh]  relative">
          <div className=" text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center pt-14  ">
            <div className="absolute 2xl:hidden top-0 left-0 right-0 bottom-0 bg-black/40 " />
            <div className="text-left pl-10 pt-14 grid">
              <h1 className="mb-0 font-bold text-3xl lg:text-6xl z-[2]">
                Wireless Networks (WiFi)
              </h1>
              <h2 className="mb-12 font-normal text-xl lg:text-3xl z-[2]">
                Service with policy
              </h2>
            </div>
            <div className="flex justify-center">
              <article className="container md:mx-auto sm:pt-10  lg:w-[1200px]  xl:right-24 z-[2] mx-5">
                <h2 className="mb-12">Service process:</h2>
                <p className="mb-12">
                  <span className="text-green-500 font-bold">1.</span> Technical
                  visit <br /> We collect information about the site, plans,
                  measurements, construction materials, applications to be used
                  on the network, aesthetics, needs and feasibility to quote the
                  project.
                </p>
                <p className="mb-12">
                  <span className="text-green-500 font-bold">2.</span>{" "}
                  Predictive design <br /> We collect information about the
                  site, plans, measurements, construction materials,
                  applications to be used on the network, aesthetics, needs and
                  feasibility to quote the project.
                </p>
                <p className="mb-12">
                  <span className="text-green-500 font-bold">3.</span>{" "}
                  Implementation <br /> Based on the predictive design, a
                  deployment planning is performed to impact as little as
                  possible on the customer{"'"}s production spaces the customer
                  {"'"}s productive spaces and to execute the delivery smoothly.
                </p>
                <p className="mb-12">
                  <span className="text-green-500 font-bold">4.</span>{" "}
                  Validation <br /> The validation of the predictive design is
                  an important point, since it allows readjustment depending on
                  the environment, materials, sources of interference and other
                  variables that may arise in the deployment of the network on
                  site.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className=" bg-[url('/assets/img/Backgrounds/Redes_inalambricas_3_low.jpg')] bg-cover h-[180vh] md:h-[150vh] xl:h-[160vh]  relative">
          <div className=" text-white  text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center pt-14 ">
            <div className="text-left pl-10 pt-24">
              <h1 className="mb-0 font-bold text-3xl lg:text-6xl">
                Wireless Networks (WiFi)
              </h1>
              <h2 className="mb-12 font-normal text-3xl">
                Service with policy
              </h2>
            </div>
            <div className="flex justify-center">
              <article className="pt-10 xl:w-[1200px] absolute mx-5">
                <p className="mb-12">
                  <span className="text-green-500 font-bold">5.</span> Service
                  delivery <br /> The project is released together with the
                  technical report of the project, identification of WiFi
                  equipment and network coverage map record file.
                </p>
                <p className="mb-12">
                  <span className="text-green-500 font-bold">6.</span>{" "}
                  Troubleshooting <br /> We collect information about the site,
                  plans, measurements, construction materials, applications to
                  be used on the network, aesthetics, needs and feasibility to
                  quote the project.
                </p>
                <p className="mb-12">
                  <span className="text-green-500 font-bold">7.</span>{" "}
                  Optimization and Redesign <br /> Network optimizations are
                  constant and can be proactive, they will be presented
                  according to network usage, new sources of interference,
                  number of devices, etc. In addition to this, redesign will
                  always be present in the process, mainly triggered by an
                  increase of devices in the network, demand for more resources,
                  which leads to adjustments in the deployment to meet customer
                  needs.
                </p>
              </article>
            </div>
          </div>

          <div className="absolute bottom-10 lg:left-10 mx-10">
            <ul className="text-white font-bold text-sm" type="disc">
              <li>
                A maintenance policy is required for these last two items, as
                they are constant due to the nature of the service.
              </li>
              <br />
              <li>
                We can offer the conventional service policy or Full Service
                (replacement of equipment due to failure at our expense, etc.).
              </li>
            </ul>
          </div>
        </section>

        <section className=" bg-[url('/assets/img/Backgrounds/Redes_inalambricas_3_low.jpg')] bg-cover  relative">
          <div className=" text-white text-3xl text-center pt-32 ">
            <div className="text-rigth pl-10">
              <h1 className="mb-0 font-bold text-3xl lg:text-6xl">
                Wireless Networks (WiFi)
              </h1>
              <h2 className="mb-12 font-normal text-xl lg.text-3xl">
                Technology, applications and brands:
              </h2>
            </div>

            <article className="grid grid-cols-1 lg:grid-cols-3 lg:pt-10 xl:flex justify-center items-center gap-10 mx-10 pb-10">
              <Image
                src={Wifi_logo_1}
                alt="Wifi logo"
                className=" lg:w-[400px] lg:h-[250px]"
              />
              <Image
                src={Wifi_logo_2}
                alt="Wifi logo"
                className="lg:w-[400px] border-[5px] p-3 rounded-[60px] border-green-500"
              />
              <div className="grid grid-cols-2 gap-10">
                <Image src={Ubiquiti} className="lg:w-48" alt="Logos Wifi" />
                <Image src={Tplink} className="lg:w-48" alt="Logos Wifi" />
                <Image src={Aruba} className="lg:w-48" alt="Logos Wifi" />
                <Image src={eero} className="lg:w-48" alt="Logos Wifi" />
                <Image src={Grandstream} className="lg:w-48" alt="Logos Wifi" />
                <Image src={omada} className="lg:w-48" alt="Logos Wifi" />
              </div>
            </article>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Wifi;
