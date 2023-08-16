import ServiceBadge from "@/components/ServiceBadge";
import Image from "next/image";
import VideoVigilacia_2 from "./img/imagen videovigilancia.png";
import VideoVigilacia_3 from "./img/imagen videovigilancia 2.png";
import VideoVigilacia_4 from "./img/imagen videovigilancia 3.png";

import VideoVigilacia_5 from "./img/imagen videovigilancia1.png";
import VideoVigilacia_6 from "./img/imagen videovigilancia2.png";
import VideoVigilacia_7 from "./img/imagen videovigilancia3.png";
import VideoVigilacia_8 from "./img/video vigilancia 2.png";

import logo1 from "./img/Dahua_Technology_logo.svg.png";
import logo2 from "./img/hikvision.png";
import logo3 from "./img/logo tplink blanco.png";
import logo4 from "./img/Logo ubiquiti.png";
import Layout from "@/layout/Layout";

const VideoSurveillance = () => {
  return (
    <>
      <Layout>
        <section className="bg-[url('/assets/img/Backgrounds/videovigilancia_low.jpg')] bg-cover pb-24  relative">
          <section className="absolute top-10 left-10">
            <ServiceBadge id="4" image="Video vigilancia" />
          </section>

          <div className=" text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center pt-40">
            <h1 className="pb-12 font-bold text-3xl lg:text-6xl">
              Video surveillance
            </h1>
            <p className="pt-0 container mx-auto">
              Nowadays, having a closed circuit camera system in our company or
              home undoubtedly gives us a sense of tranquility and security, not
              only to record thefts or any incident, but with new technologies
              we can have notifications based on specific security or restricted
              areas, face detection, people counting, etc.
            </p>
          </div>

          <section className="grid place-items-center  lg:flex justify-center items-center pt-32 gap-2 ">
            <Image src={VideoVigilacia_2} alt="Video" />
            <Image src={VideoVigilacia_3} alt="Video" />
            <Image src={VideoVigilacia_4} alt="Video" />
          </section>
        </section>

        <section className="bg-[url('/assets/img/Backgrounds/videovigilancia_low.jpg')] bg-cover pb-24 relative">
          <div className=" text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center pt-10">
            <h1 className="pb-12 font-bold text-3xl lg:lg:text-6xl">
              Video surveillance
            </h1>
            <p className="pt-12 container mx-auto">
              With our video surveillance solutions you will have the support of
              the best brands and technologies specialized in video security and
              artificial intelligence, with internet access from one or more
              devices and keeping record of events that happen within the
              coverage area of the system.
            </p>
          </div>

          <section className="grid place-items-center lg:flex justify-center pt-32 gap-2 ">
            <div>
              <p className="text-green-500 font-bold text-center text-xl">
                Line Crossing Detection
              </p>
              <Image src={VideoVigilacia_5} alt="Video" />
            </div>
            <div>
              <p className="text-green-500 font-bold text-center text-xl">
                Intrusion Detection
              </p>
              <Image src={VideoVigilacia_6} alt="Video" />
            </div>

            <div>
              <p className="text-green-500 font-bold text-center text-xl">
                Motion Detection
              </p>
              <Image src={VideoVigilacia_7} alt="Video" />
            </div>

            <div>
              <p className="text-green-500 font-bold text-center text-xl">
                Human Detection
              </p>{" "}
              <Image
                src={VideoVigilacia_8}
                alt="Video"
                className="w-[350px] h-[170px]"
              />
            </div>
          </section>

          <section className="grid space-y-10 lg:space-x-0 lg:flex justify-evenly items-center pt-10">
            <Image src={logo1} alt="Logos" className="w-44" />

            <Image src={logo2} alt="Logos" className="w-44 " />

            <Image src={logo3} alt="Logos" className="w-44" />

            <Image src={logo4} alt="Logos" className="w-44" />
          </section>
        </section>
      </Layout>
    </>
  );
};

export default VideoSurveillance;
