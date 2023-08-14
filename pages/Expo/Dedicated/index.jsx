import React from "react";

const Dedicated = () => {
  return (
    <>
      <div className="h-screen bg-fixed bg-center bg-cover imgBgExpo_7">
        <div className="container mx-auto text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10">
          <h1 className="pt-10 text-3xl lg:text-5xl text-left">
            Dedicated Internet
          </h1>
          <p className="pt-20 w-[40%]">
            Our internet service is symmetrical, dedicated and exclusive for
            your company.
          </p>

          <section className="flex flex-col gap-5 w-[40%] pt-20">
            <p>Get high availability.</p>
            <p>Reach further with availability in hard-to-reach areas.</p>
            <p>
              Network without oversubscription with 100% bandwidth availability.
            </p>
            <p>We have the capacity to deliver up to 1 Gb.</p>
          </section>
        </div>
      </div>

      <div className="h-screen bg-fixed bg-center bg-cover imgBgExpo_8">
        <div className="container mx-auto text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10">
          <h1 className="pt-10 text-3xl lg:text-5xl text-left">
            Dedicated Internet
          </h1>
          <p className="pt-14 w-[40%]">
            In a traditional link, the transfer and exchange of data has a very
            long waiting time that causes low availability.
          </p>

          <p className="pt-14 w-[40%]">
            This is because there is a lot of traffic on your internet network,
            since the traditional link is oversubscribed, that is, you share the
            same network with many other users.
          </p>
          <p className="pt-14 w-[40%]">
            With our Dedicated Internet, you surf in a fast and uninterrupted
            way.
          </p>
          <p className="pt-14 w-[40%]">Access a network exclusively for you!</p>
        </div>
      </div>
    </>
  );
};

export default Dedicated;
