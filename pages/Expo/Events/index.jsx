import EventsCarousel from "@/public/assets/img/Events/img/fotos_eventos.png";
import Image from "next/image";

const Events = () => {
  return (
    <>
      <div className="h-screen bg-fixed bg-center bg-cover imgBgExpo_8 relative">
        <div className="container mx-auto text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10">
          <h1 className="pt-10 text-3xl lg:text-5xl text-center">
            Internet for your event
          </h1>
          <div className="pt-20 flex justify-center gap-28">
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

          <div className="absolute top-[40%] right-16 rounded-3xl border-2 m-2 p-2 bg-[#484c7c]">
            <p>Capacity, flexibility and high availability</p>
          </div>
        </div>
      </div>
      <div className="h-screen bg-fixed bg-center bg-cover imgBgExpo_8 relative">
        <div className="container mx-auto text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10">
          <h1 className="pt-10 text-3xl lg:text-5xl text-center">Events</h1>

          <div className="absolute top-[20%] left-10 rounded-3xl border-2 m-2 p-2 bg-[#484c7c]">
            <p>Types of services:</p>
          </div>

          <div className="absolute top-[40%]">
            <Image src={EventsCarousel} alt="Events" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
