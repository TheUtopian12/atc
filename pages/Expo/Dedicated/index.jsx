import Layout from "@/layout/Layout";
import Image from "next/image";
import Dedicado_1 from "./assets/img/internet dedicado1.png";
import Dedicado_2 from "./assets/img/internet dedicado2.png";

const Dedicated = () => {
  return (
    <Layout>
      <div className="h-screen lg:bg-center bg-cover imgBgExpo_7">
        <div className="container mx-auto text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10 pt-10">
          <h1 className="pt-10 text-3xl lg:text-5xl lg:text-left">
            Dedicated Internet
          </h1>
          <p className="pt-20 lg:w-[40%]">
            Our internet service is symmetrical, dedicated and exclusive for
            your company.
          </p>

          <section className="flex flex-col gap-5 lg:w-[40%] pt-20">
            <p>Get high availability.</p>
            <p>Reach further with availability in hard-to-reach areas.</p>
            <p>
              Network without oversubscription with 100% bandwidth availability.
            </p>
            <p>We have the capacity to deliver up to 1 Gb.</p>
          </section>
        </div>
      </div>

      <div className=" lg:h-screen pb-10 bg-fixed bg-center bg-cover imgBgExpo_8">
        <div className="container mx-auto text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10 pt-10">
          <div className="lg:flex justify-center items-center gap-10">
            <section>
              <h1 className="pt-10 text-3xl lg:text-5xl lg:text-left">
                Dedicated Internet
              </h1>
              <p className="pt-14">
                In a traditional link, the transfer and exchange of data has a
                very long waiting time that causes low availability.
              </p>

              <p className="pt-14">
                This is because there is a lot of traffic on your internet
                network, since the traditional link is oversubscribed, that is,
                you share the same network with many other users.
              </p>
              <p className="pt-14">
                With our Dedicated Internet, you surf in a fast and
                uninterrupted way.
              </p>
              <p className="pt-14">Access a network exclusively for you!</p>
            </section>
            <section>
              <p className="mb-10">Exclusive Internet for your company</p>
              <Image
                src={Dedicado_1}
                className="w-[90%]"
                alt="Dedicado diagrama"
              />
              <Image
                src={Dedicado_2}
                className="w-[90%]"
                alt="Dedicado diagrama"
              />
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dedicated;
