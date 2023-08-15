import Image from "next/image";
import Orquestador from "./img/Orquestador.png";
import Layout from "@/layout/Layout";
const Sdwan = () => {
  return (
    <Layout>
      <div className="h-screen  bg-center bg-cover imgBgExpo_8 relative flex justify-center items-center ">
        <Image src={Orquestador} className="w-96" alt="orquestador" />
      </div>
      <div className="h-screen lg:h-[100vh] bg-cover imgBgExpo_8 relative ">
        <h1 className="pt-20 lg:ml-10 text-3xl lg:text-5xl text-center lg:text-left text-white">
          Sdwan
        </h1>
        <div className="flex justify-evenly items-center mt-24">
          <Image src={Orquestador} className="w-96" alt="orquestador" />
          <p
            className="pt-10 lg:pt-28 container mx-auto lg:mx-0  text-center
           lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10 lg:w-[40%]"
          >
            Software that unifies and manages your current internet providers
            generating a single internet connection.
            <br />
            <br />
            The orchestrator aggregates the speeds of your links and optimizes
            them so that you always have high availability, without you noticing
            if there has been a failure.
            <br />
            <br />
            Achieve high availability in your business at low cost.
          </p>
        </div>
      </div>

      <div className="h-screen lg:h-[100vh] bg-cover imgBgExpo_8 relative ">
        <h1 className="pt-20 lg:ml-10 text-3xl lg:text-5xl text-center lg:text-left text-white">
          Sdwan
        </h1>
        <div className="flex justify-center items-center mt-24">
          <div className="container diamond-shape">
            <div className="item-count">Rombos</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sdwan;
