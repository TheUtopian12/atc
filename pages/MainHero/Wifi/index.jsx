import ServiceBadge from "@/components/ServiceBadge";
import Image from "next/image";
import React from "react";
import Wifi_logo_1 from "../../../public/assets/img/Wifi/WI-FI_CERTIFIED.png";
import Wifi_logo_2 from "../../../public/assets/img/Wifi/wifi.png";

import Aruba from "../../../public/assets/img/Wifi/logos/Aruba_Networks_logo.png";

import eero from "../../../public/assets/img/Wifi/logos/eero Primary logo gray.png";

import Grandstream from "../../../public/assets/img/Wifi/logos/Grandstream-Logo-2018.png";
import omada from "../../../public/assets/img/Wifi/logos/logo omada.png";

import Tplink from "../../../public/assets/img/Wifi/logos/TPLINK_Logo_2.svg.png";

import Ubiquiti from "../../../public/assets/img/Wifi/logos/Ubiquiti_Logo.png";

const Wifi = () => {
  return (
    <>
      <section className="bg-[url('/assets/img/Backgrounds/servicios.jpg')] bg-cover h-[100vh]  relative">
        <section className="absolute top-0 left-10">
          <ServiceBadge id="2" image="Redes inalambricas_1" />
        </section>
        <section className="absolute lg:right-[28%] lg:-top-10">
          <img
            src="/assets/img/Wifi/detalle.png"
            alt="Detalle"
            className="w-60"
          />
        </section>

        <div className=" text-white text-3xl text-center pt-14 ">
          <h1 className="mb-12 font-bold text-6xl">Wireless Networks (WiFi)</h1>

          <article className="grid place-content-center pt-32">
            <div className="container  w-[700px] border-[5px] border-white  rounded-3xl lg:-translate-x-80 p-8">
              <p>
                Wireless networks allow portable devices such as laptops,
                tablets or cell phones to remain connected and with the
                advantage of having mobility within the same office and network.
              </p>
            </div>
            <div className="container  w-[700px] border-[5px] border-green-500  rounded-3xl mt-24 translate-x-52 p-8">
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
      <section className="bg-[url('/assets/img/Backgrounds/Redes_inalambricas_2_low.jpg')] bg-cover h-[120vh]  relative">
        <section className="absolute top-0 right-10">
          <ServiceBadge id="2" image="Redes inalambricas_1" />
        </section>

        <div className=" text-white text-3xl text-center pt-14 ">
          <div className="text-left pl-10">
            <h1 className="mb-0 font-bold text-6xl">
              Wireless Networks (WiFi)
            </h1>
            <h2 className="mb-12 font-normal text-3xl">Service with policy</h2>
          </div>
          <div className="flex justify-center">
            <article className="pt-10 lg:w-[1200px] absolute lg:right-24">
              <h2 className="mb-12">Service process:</h2>
              <p className="mb-12">
                <span className="text-green-500 font-bold">1.</span> Technical
                visit <br /> We collect information about the site, plans,
                measurements, construction materials, applications to be used on
                the network, aesthetics, needs and feasibility to quote the
                project.
              </p>
              <p className="mb-12">
                <span className="text-green-500 font-bold">2.</span> Predictive
                design <br /> We collect information about the site, plans,
                measurements, construction materials, applications to be used on
                the network, aesthetics, needs and feasibility to quote the
                project.
              </p>
              <p className="mb-12">
                <span className="text-green-500 font-bold">3.</span>{" "}
                Implementation <br /> Based on the predictive design, a
                deployment planning is performed to impact as little as possible
                on the customer{"'"}s production spaces the customer{"'"}s
                productive spaces and to execute the delivery smoothly.
              </p>
              <p className="mb-12">
                <span className="text-green-500 font-bold">4.</span> Validation{" "}
                <br /> The validation of the predictive design is an important
                point, since it allows readjustment depending on the
                environment, materials, sources of interference and other
                variables that may arise in the deployment of the network on
                site.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[url('/assets/img/Backgrounds/Redes_inalambricas_3_low.jpg')] bg-cover h-[105vh]  relative">
        <section className="absolute top-0 right-10">
          <ServiceBadge id="2" image="Redes inalambricas_1" />
        </section>

        <div className=" text-white text-3xl text-center pt-14 ">
          <div className="text-left pl-10">
            <h1 className="mb-0 font-bold text-6xl">
              Wireless Networks (WiFi)
            </h1>
            <h2 className="mb-12 font-normal text-3xl">Service with policy</h2>
          </div>
          <div className="flex justify-center">
            <article className="pt-10 lg:w-[1200px] absolute ">
              <p className="mb-12">
                <span className="text-green-500 font-bold">5.</span> Service
                delivery <br /> The project is released together with the
                technical report of the project, identification of WiFi
                equipment and network coverage map record file.
              </p>
              <p className="mb-12">
                <span className="text-green-500 font-bold">6.</span>{" "}
                Troubleshooting <br /> We collect information about the site,
                plans, measurements, construction materials, applications to be
                used on the network, aesthetics, needs and feasibility to quote
                the project.
              </p>
              <p className="mb-12">
                <span className="text-green-500 font-bold">7.</span>{" "}
                Optimization and Redesign <br /> Network optimizations are
                constant and can be proactive, they will be presented according
                to network usage, new sources of interference, number of
                devices, etc. In addition to this, redesign will always be
                present in the process, mainly triggered by an increase of
                devices in the network, demand for more resources, which leads
                to adjustments in the deployment to meet customer needs.
              </p>
            </article>
          </div>
        </div>

        <div className="absolute bottom-10 left-10">
          <ul className="text-white font-bold " type="disc">
            <li>
              A maintenance policy is required for these last two items, as they
              are constant due to the nature of the service.
            </li>
            <li>
              We can offer the conventional service policy or Full Service
              (replacement of equipment due to failure at our expense, etc.).
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-[url('/assets/img/Backgrounds/Redes_inalambricas_3_low.jpg')] bg-cover h-[100vh]  relative">
        <section className="absolute top-0 right-10">
          <ServiceBadge id="2" image="Redes inalambricas_1" />
        </section>

        <div className=" text-white text-3xl text-center pt-14 ">
          <div className="text-rigth pl-10">
            <h1 className="mb-0 font-bold text-6xl">
              Wireless Networks (WiFi)
            </h1>
            <h2 className="mb-12 font-normal text-3xl">
              Technology, applications and brands:
            </h2>
          </div>

          <article className="flex justify-center items-center gap-10">
            <Image
              src={Wifi_logo_1}
              alt="Wifi logo"
              className="lg:w-[400px] lg:h-[250px]"
            />
            <Image
              src={Wifi_logo_2}
              alt="Wifi logo"
              className="lg:w-[600px] border-2 rounded-[60px] border-green-500"
            />
            <div className="grid grid-cols-2 gap-10">
              <Image src={Ubiquiti} className="lg:w-48" />
              <Image src={Tplink} className="lg:w-48" />
              <Image src={Aruba} className="lg:w-48" />
              <Image src={eero} className="lg:w-48" />
              <Image src={Grandstream} className="lg:w-48" />
              <Image src={omada} className="lg:w-48" />
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Wifi;
