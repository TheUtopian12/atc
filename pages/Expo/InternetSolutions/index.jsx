import Image from "next/image";
import Internet from "@/public/assets/img/InternetSolutions/internet.webp";

import Mype from "@/public/assets/img/InternetSolutions/mype.jpg";

import Event from "@/public/assets/img/InternetSolutions/Conference.jpg";

import Satellite from "@/public/assets/img/InternetSolutions/satelital.webp";
import Layout from "@/layout/Layout";

const InternetSolutions = () => {
  return (
    <Layout>
      <div className="h-auto lg:h-screen pb-10 lg:pb-0 bg-fixed bg-center bg-cover imgBgExpo_8 ">
        <div className="container mx-auto text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10 pt-10">
          <h1 className="pt-10 text-3xl lg:text-5xl text-center">
            Internet solutions and services
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 pt-5 gap-10">
            <div className="grid place-items-center">
              <h2 className="text-2xl font-bold  text-green-500">Dedicated</h2>
              <Image
                src={Internet}
                alt="Internet"
                className="w-[300px] lg:w-[200px] rounded-l-3xl rounded-r-3xl"
              />
              <article
                className="text-center text-sm border-2 border-dotted border-green-500
             rounded-3xl mt-10 p-5 bg-[#073763] w-[300px] lg:w-[250px] h-[400px]"
              >
                <p className="pt-10">
                  Take your company to another level, customized symmetrical
                  internet for your business with high availability and no
                  oversubscription.
                </p>
                <p className="pt-8"> Companies Corporate</p>
                <p className="pt-8">
                  Symmetrical Dedicated SLA 99.92% / 99.95%
                </p>
                <p className="pt-8">Speed up to 1 Gbps</p>
              </article>
            </div>
            <div className="grid place-items-center">
              <h2 className="text-2xl font-bold text-green-500">MyPE</h2>
              <Image
                src={Mype}
                alt="Mype"
                className="w-[300px] lg:w-[200px] rounded-l-3xl rounded-r-3xl"
              />
              <article
                className="text-center text-sm border-2 border-dotted border-green-500 rounded-3xl mt-10 p-5 bg-[#073763]
                w-[300px] lg:w-[250px] h-[400px]"
              >
                <p className="pt-10">
                  Tailor-made solution for a micro or small business that
                  requires quality internet service at a competitive price.
                </p>
                <p className="pt-8">Business from 1 to 10 people</p>
                <p className="pt-8">Asymmetric SLA 99%</p>
                <p className="pt-8">Speed up to 200 Mbps</p>
              </article>
            </div>
            <div className="grid place-items-center ">
              <h2 className="text-2xl font-bold text-green-500">Satelital</h2>
              <Image
                src={Satellite}
                alt="Satellite"
                className="w-[400px] lg:w-[200px] rounded-l-3xl rounded-r-3xl"
              />
              <article
                className="text-center text-sm border-2 border-dotted border-green-500 rounded-3xl mt-10 p-5 bg-[#073763]
                w-[300px] lg:w-[250px] h-[400px]
            "
              >
                <p className="pt-10">
                  High-speed broadband Internet service for remote or isolated
                  sites.
                </p>
                <p className="pt-8">
                  Businesses in hard-to-reach difficult to access
                </p>
                <p className="pt-8">Average asymmetric browsing speed</p>
                <p className="pt-8">Ranges from 100 - 200 Mbps</p>
              </article>
            </div>
            <div className="grid place-items-center ">
              <h2 className="text-2xl font-bold  text-green-500">
                Internet for events
              </h2>
              <Image
                src={Event}
                alt="Eventos"
                className="w-[300px] lg:w-[200px] rounded-l-3xl rounded-r-3xl"
              />
              <article
                className="text-center text-sm border-2 border-dotted border-green-500 rounded-3xl mt-10 p-5 bg-[#073763] 
              w-[300px] lg:w-[250px] h-[400px]"
              >
                <p className="pt-10">
                  Hire it the days you need it with the confidence of a
                  flexible, dedicated and fast installation internet.
                </p>
                <p className="pt-8">Events Contract from 1 day</p>
                <p className="pt-8">Symmetrical Dedicated SLA 99.95%</p>
                <p className="pt-8">Speed up to 1 Gbps</p>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className="h-auto lg:h-screen pb-10 lg:pb-0 bg-fixed bg-center bg-cover imgBgExpo_8 ">
        <div className="container mx-auto text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10 pt-10">
          <h1 className="pt-10 text-3xl lg:text-5xl text-center">
            Internet solutions and services
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 pt-5 gap-10">
            <div className="grid place-items-center ">
              <h2 className="text-2xl font-bold  text-green-500">Firewall</h2>
              <Image
                src={Internet}
                alt="Internet"
                className="w-[300px] lg:w-[200px]  rounded-l-3xl rounded-r-3xl"
              />
              <article
                className="text-center text-sm border-2 border-dotted border-green-500
             rounded-3xl mt-10 p-5 bg-[#073763] w-[300px] lg:w-[200px] h-[300px] flex justify-center items-center"
              >
                <p className="pt-10 ">
                  Security for your business managed 100% from the cloud,
                  installation and remote administration is simpler.
                </p>
              </article>
            </div>
            <div className="grid place-items-center">
              <h2 className="text-2xl font-bold text-green-500">VoIP</h2>
              <Image
                src={Mype}
                alt="Mype"
                className="w-[300px] lg:w-[200px]  rounded-l-3xl rounded-r-3xl"
              />
              <article
                className="text-center text-sm border-2 border-dotted border-green-500 rounded-3xl mt-10 p-5 bg-[#073763]
             w-[300px] lg:w-[200px] h-[300px] flex justify-center items-center"
              >
                <p className="pt-10">
                  With our VoIP service we allow you to achieve an easy,
                  effective and flexible communication in your business.
                </p>
              </article>
            </div>
            <div className="grid place-items-center ">
              <h2 className="text-2xl font-bold text-green-500">SDWAN</h2>
              <Image
                src={Satellite}
                alt="Satellite"
                className="w-[300px] lg:w-[200px]  rounded-l-3xl rounded-r-3xl"
              />
              <article
                className="text-center text-sm border-2 border-dotted border-green-500 rounded-3xl mt-10 p-5 bg-[#073763]
            w-[300px] lg:w-[200px] h-[300px] flex justify-center items-center
            "
              >
                <p className="pt-10">
                  Achieve high availability in your business at low cost.
                </p>
              </article>
            </div>
            <div className="grid place-items-center ">
              <h2 className="text-2xl font-bold  text-green-500">
                Virtual Network
              </h2>
              <Image
                src={Event}
                alt="Eventos"
                className="w-[300px] lg:w-[200px]  rounded-l-3xl rounded-r-3xl"
              />
              <article
                className="text-center text-sm border-2 border-dotted border-green-500 rounded-3xl mt-10 p-5 bg-[#073763]
               w-[300px] lg:w-[200px] h-[300px] flex justify-center items-center"
              >
                <p className="pt-10">
                  Increase efficiency and security with our managed services.
                </p>
              </article>
            </div>

            <div className="grid place-items-center ">
              <h2 className="text-2xl font-bold  text-green-500">
                Data Center
              </h2>
              <Image
                src={Event}
                alt="Eventos"
                className="w-[300px] lg:w-[200px]  rounded-l-3xl rounded-r-3xl"
              />
              <article
                className="text-center text-sm border-2 border-dotted border-green-500 rounded-3xl mt-10 p-5 bg-[#073763] 
              w-[300px] lg:w-[200px] h-[300px] flex justify-center items-center"
              >
                <p className="pt-10">
                  We have specialized personnel for support and operation in our
                  Datas Centers.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InternetSolutions;
