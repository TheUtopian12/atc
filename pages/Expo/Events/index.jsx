import Image from "next/image";
import EventsCarousel1 from "./img/eventual 1.png";
import EventsCarousel2 from "./img/eventual 2.png";
import EventsCarousel3 from "./img/eventual 3.png";
import EventsCarousel4 from "./img/eventual 4.png";
import EventsCarousel5 from "./img/eventual 5.png";
import Layout from "@/layout/Layout";

const Events = () => {
  return (
    <Layout>
      <div className="h-screen bg-fixed bg-center bg-cover bgEvents bg-[#072c53] relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
        <div className="absolute pt-10 container mx-auto text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10 z-[2]">
          <h1 className="pt-10 text-3xl lg:text-5xl text-center">
            Internet for your event
          </h1>
          <div className="pt-20 lg:flex justify-center gap-28">
            <p>
              We offer:
              <br />
              Symmetrical-Dedicated Internet. <br /> Speed up to 1 Gbps. <br />
              Contracting from 1 day.
            </p>
            Additionally we support you in:
            <br />
            WiFi network design. br On-site support.
          </div>

          <div className="mt-10 lg:absolute top-[40%] lg:top-[80%] right-16 rounded-3xl border-0 m-2 p-2 bg-[#484c7c]">
            <p>Capacity, flexibility and high availability</p>
          </div>
        </div>
      </div>
      <div className="pt-10 lg:h-screen bg-fixed bg-center bg-cover imgBgExpo_8 relative pb-10">
        <div className=" text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10">
          <h1 className="pt-10 text-3xl lg:text-5xl text-center">Events</h1>

          <div
            className="mt-10 lg:mt-52 rounded-3xl m-2 p-2 bg-[#484c7c]
           lg:w-[30%] lg:-translate-x-[100px] 2xl:w-[20%] 2xl:-translate-x-[100px]"
          >
            <p className="lg:text-right">Types of services:</p>
          </div>

          <div className="grid place-items-center gap-10 mt-40 lg:mt-20 lg:flex justify-evenly">
            <Image
              src={EventsCarousel1}
              alt="Events"
              className="w-[60%] lg:w-48"
            />
            <Image
              src={EventsCarousel2}
              alt="Events"
              className="w-[60%] lg:w-48"
            />
            <Image
              src={EventsCarousel3}
              alt="Events"
              className="w-[60%] lg:w-48"
            />
            <Image
              src={EventsCarousel4}
              alt="Events"
              className="w-[60%] lg:w-48"
            />
            <Image
              src={EventsCarousel5}
              alt="Events"
              className="w-[60%] lg:w-48"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
