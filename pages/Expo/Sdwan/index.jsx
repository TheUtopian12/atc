import Image from "next/image";
import Orquestador from "./img/logo sdwan.png";
import Grafica1 from "./img/imagen sdwan indicadores-01.png";
import Grafica2 from "./img/imagen sdwan indicadores-02.png";
import Diagrama from "./img/imagen sdwan diagrama-01.png";

import Wifi from "./img/sdwan graficos-01.png";
import Cadena from "./img/sdwan graficos-03.png";
import Router from "./img/sdwan graficos-02.png";
import Cable1 from "./img/sdwan graficos-06.png";
import Cable2 from "./img/sdwan graficos-08.png";
import Compu from "./img/sdwan graficos-07.png";
import Switch from "./img/sdwan grafico2-01.png";
import GraficaCaritas from "./img/imagen sdwan grafica-01.png";
import GraficaSdwan from "./img/gif.gif";
import Layout from "@/layout/Layout";
const Sdwan = () => {
  return (
    <Layout>
      <div className="h-screen  bg-center bg-cover imgBgExpo_24 relative flex justify-center items-center "></div>
      <div className="2xl:h-[100vh] bg-cover imgBgExpo_8 relative pb-10">
        <h1 className="pt-20 lg:ml-10 text-3xl lg:text-5xl text-center lg:text-left text-white">
          Sdwan
        </h1>
        <div className="grid place-items-center lg:flex lg:justify-evenly items-center mt-24">
          <Image src={Orquestador} className="w-24 lg:w-96" alt="orquestador" />
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

      <div className=" lg:h-[100vh] bg-cover imgBgExpo_8 relative pb-10">
        <h1 className="pt-20 lg:ml-10 text-3xl lg:text-5xl text-center lg:text-left text-white">
          Sdwan
        </h1>
        <div className="grid lg:grid-cols-4 place-items-center justify-items-center mt-24">
          <div className="romboBg text-center bg-cover bg-no-repeat flex justify-center items-center w-[300px] h-[273px] px-11 text-white">
            Ensures the continuity of your operation in the cloud
          </div>
          <div className="romboBg text-center  bg-cover bg-no-repeat flex justify-center items-center w-[300px] h-[273px] px-11 text-white">
            Increases the availability of your internet
          </div>
          <div className="romboBg text-center  bg-cover bg-no-repeat flex justify-center items-center w-[300px] h-[273px] px-11 text-white">
            Connect your branches
          </div>
          <div className="romboBg text-center  bg-cover bg-no-repeat flex justify-center items-center w-[300px] h-[273px] px-11 text-white">
            Optimization your network
          </div>
          <div className="romboBg text-center  bg-cover bg-no-repeat flex justify-center items-center w-[300px] h-[273px] px-11 text-white">
            Add your links from the Internet
          </div>
          <div className="romboBg text-center  bg-cover bg-no-repeat flex justify-center items-center w-[300px] h-[273px] px-11 text-white">
            We monitor your Internet links
          </div>
          <div className="romboBg text-center  bg-cover bg-no-repeat flex justify-center items-center w-[300px] h-[273px] px-11 text-white">
            Single IP
          </div>
        </div>
      </div>

      <div className=" lg:h-[105vh] bg-cover imgBgExpo_8 relative pb-16">
        <h1 className="pt-20 lg:ml-10 text-3xl lg:text-5xl text-center lg:text-left text-white">
          Increase the availability of your Internet
        </h1>

        <div className="grid place-items-center lg:flex lg:justify-between lg:items-center px-5 lg:px-32 py-10">
          <div className="grid grid-cols-1 ">
            <Image src={Grafica1} alt="Grafica 1" className="w-[600px]" />
            <p className="text-white text-xl text-center">
              <span>WITHOUT US</span>
              <br />
              The allowed disconnection can be up to 43 hours per year per
              contract.
            </p>
          </div>
          <div className="grid grid-cols-1 ">
            <Image src={Grafica2} alt="Grafica 1" className="w-[600px]" />
            <p className="text-white text-xl text-center">
              <span>WITH US</span>
              <br />
              The maximum allowed disconnection is less than 1 hour per year per
              contract.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:h-[110vh] bg-cover imgBgExpo_8 relative pb-10">
        <h1 className="pt-20 lg:ml-10 text-3xl lg:text-5xl text-center lg:text-left text-white">
          Connect your branches
        </h1>

        <div className="grid lg:grid-cols-2 lg:place-content-center lg:place-items-center gap-10 mx-10">
          <p className="text-xl lg:text-3xl text-center text-white ">
            Our network orchestrator manages your branch offices, reducing costs
            and facilitating implementation.
          </p>
          <div>
            <Image src={Diagrama} alt="Diagrama SDWAN" />
          </div>
        </div>
      </div>

      <div className=" bg-cover imgBgExpo_8 relative pb-24">
        <h1 className="pt-20 lg:ml-10 text-3xl lg:text-5xl text-center  text-white">
          Optimizing your network
        </h1>
        <h2 className=" lg:ml-10 text-xl lg:text-2xl text-center  text-white">
          We prioritize by type of data.
        </h2>
        <h2 className="text-lg text-white text-center pt-10 -mb-8 lg:hidden">
          Supplier 1
        </h2>
        <div className="flex items-center justify-center lg:gap-10">
          <p className="text-white hidden lg:block">Supplier 1</p>
          <Image src={Wifi} className="w-[50px] h-[50px]" alt="SDWAN GRAPH" />
          <Image
            src={Cadena}
            className=" w-[50px]  h-[25px] lg:w-[100px]  lg:h-[50px]"
            alt="SDWAN GRAPH"
          />
          <div>
            <Image
              src={Router}
              className=" w-[90px]  h-[50px] lg:w-[180px]  lg:h-[100px]"
              alt="SDWAN GRAPH"
            />
            <p className="text-white text-center">Router </p>
          </div>
          <div>
            <Image
              src={Cable1}
              className="w-[200px] h-[100px] lg:w-[400px]  lg:h-[200px]"
              alt="SDWAN GRAPH"
            />
          </div>
          <div className="grid">
            <Image
              src={Compu}
              className="w-[50px] h-[50px]"
              alt="SDWAN GRAPH"
            />
            <Image
              src={Compu}
              className="w-[50px] h-[50px]"
              alt="SDWAN GRAPH"
            />
            <Image
              src={Compu}
              className="w-[50px] h-[50px]"
              alt="SDWAN GRAPH"
            />
          </div>
        </div>
        <h2 className="text-lg text-white text-center pt-10 -mb-10 lg:hidden">
          Supplier 2
        </h2>
        <div className="flex items-center justify-center lg:gap-10 pt-10">
          <p className="text-white hidden lg:block">Supplier 2</p>
          <div className="grid">
            <Image src={Wifi} className="w-[50px] h-[50px]" alt="SDWAN GRAPH" />
            <Image src={Wifi} className="w-[50px] h-[50px]" alt="SDWAN GRAPH" />
            <Image src={Wifi} className="w-[50px] h-[50px]" alt="SDWAN GRAPH" />
          </div>
          <div className="grid">
            <Image
              src={Cadena}
              className="w-[50px]  h-[25px] lg:w-[100px]  lg:h-[50px] "
              alt="SDWAN GRAPH"
            />{" "}
            <Image
              src={Cadena}
              className="w-[50px]  h-[25px] lg:w-[100px]  lg:h-[50px] "
              alt="SDWAN GRAPH"
            />{" "}
            <Image
              src={Cadena}
              className="w-[50px]  h-[25px] lg:w-[100px]  lg:h-[50px] "
              alt="SDWAN GRAPH"
            />
          </div>

          <div>
            <Image
              src={Router}
              className=" w-[90px]  h-[50px] lg:w-[180px]  lg:h-[100px]"
              alt="SDWAN GRAPH"
            />
            <p className="text-white text-center">Router </p>
          </div>
          <div>
            <Image
              src={Cable2}
              className="w-[200px] h-[100px] lg:w-[400px]  lg:h-[200px]"
              alt="SDWAN GRAPH"
            />
          </div>
          <div className="grid">
            <Image
              src={Compu}
              className="w-[50px] h-[50px]"
              alt="SDWAN GRAPH"
            />
            <Image
              src={Compu}
              className="w-[50px] h-[50px]"
              alt="SDWAN GRAPH"
            />
            <Image
              src={Compu}
              className="w-[50px] h-[50px]"
              alt="SDWAN GRAPH"
            />
          </div>
        </div>

        <div>
          <p className="text-white text-center text-xl pt-10 px-5">
            We provide a quality of service of your total bandwidth.
          </p>
        </div>
      </div>

      <div className=" bg-cover imgBgExpo_8 relative pb-24 ">
        <h1 className="pt-20 lg:ml-10 text-3xl lg:text-5xl text-center text-white">
          Add your internet links
        </h1>
        <p className="text-2xl text-center text-white">
          Use inexpensive internet providers and increase the performance of
          your internet connection.
        </p>
        <h1 className="text-white text-left ml-5 sm:ml-28 translate-y-10 lg:hidden">
          Supplier
        </h1>
        <div className="flex justify-center items-center gap-5 sm:gap-10 mt-10 mx-5">
          <div className="text-white text-xl text-center lg:text-left">
            <p className="lg:hidden">1</p>
            <p className="lg:hidden">2</p>
            <p className="hidden lg:block">Supplier 1</p>
            <p className="hidden lg:block">Supplier 2</p>
          </div>
          <div className="grid gap-2">
            <div className="w-16 h-8 sm:w-32 sm:h-10 bg-green-500 text-white text-center rounded-r-xl rounded-l-xl">
              20 mbps
            </div>
            <div className="w-16 h-8 sm:w-32 sm:h-10 bg-gray-500 text-white text-center rounded-r-xl rounded-l-xl">
              20 mbps
            </div>
          </div>{" "}
          <div>
            <Image src={Switch} className="w-44" alt="Switch" />
          </div>
          <div
            className="w-32 h-16 bg-transparent border-2 border-green-600 text-white text-center rounded-tl-3xl rounded-br-3xl
          flex justify-center items-center
          "
          >
            20 mbps
          </div>
        </div>
        <h1 className="text-white text-left ml-5 sm:ml-28 translate-y-10 lg:hidden">
          Supplier
        </h1>
        <div className="flex justify-center items-center gap-5 sm:gap-10 mt-10 mx-5">
          <div className="text-white text-xl text-left">
            <p className="lg:hidden">1</p>
            <p className="lg:hidden">2</p>
            <p className="hidden lg:block">Supplier 1</p>
            <p className="hidden lg:block">Supplier 2</p>
          </div>
          <div className="grid gap-2">
            <div className="w-32 h-10 bg-green-500 text-white text-center rounded-r-xl rounded-l-xl">
              20 mbps
            </div>
            <div className="w-32 h-10 bg-green-500 text-white text-center rounded-r-xl rounded-l-xl">
              20 mbps
            </div>
          </div>{" "}
          <div>
            <Image src={Orquestador} className="w-32" alt="Switch" />
          </div>
          <div
            className="w-32 h-16 bg-transparent border-2 bg-green-600  border-green-600 text-white text-center rounded-tl-3xl rounded-br-3xl
          flex justify-center items-center
          "
          >
            38 mbps
          </div>
        </div>
      </div>

      <div className=" bg-cover imgBgExpo_8 relative pb-24 ">
        <h1 className="pt-20 lg:ml-10 text-3xl lg:text-5xl text-center text-white px-5">
          Real-time monitoring of your Internet links
        </h1>

        <div className="flex justify-center items-center mt-28">
          <Image
            src={GraficaCaritas}
            className="w-[80%] lg:w-[50%]"
            alt="caritas"
          />
        </div>

        <p className="text-center text-2xl text-white mt-20">
          We inform you about the performance of your Internet providers.
        </p>
      </div>

      <div className="h-[50vh] lg:h-[100vh] bg-cover bg-center imgBgExpo_18 relative pb-24 ">
        <div className="absolute lg:hidden top-0 left-0 right-0 bottom-0 bg-black/10 z-[2]" />

        <div className="absolute z-[2]">
          <h1 className="pt-20 lg:ml-10 text-3xl lg:text-5xl text-center text-white ">
            A single IP
          </h1>

          <p className="text-white text-xl lg:text-3xl text-center mx-5 lg:mx-[20%]  lg:mt-28">
            We facilitate your remote access service connections with a single
            fixed public IP address, regardless of the providers you are using.
          </p>
        </div>
      </div>

      <div className="h-[100vh] lg:h-[100vh] bg-cover lg:bg-center imgBgExpo_8 relative pb-24 ">
        <h1 className="pt-20 lg:ml-10 text-3xl lg:text-5xl text-center lg:text-left text-white">
          Achieves a robust connection
        </h1>

        <p className="text-white text-xl lg:text-3xl text-center lg:text-left lg:mt-56 lg:ml-10 lg:mr-[70%]">
          Unify your internet providers by generating a single connection,
          aggregating their speeds.
        </p>
        <div className="flex justify-center items-end lg:-translate-y-36 mt-10 lg:mt-0">
          <div className="bg-white rounded-full w-[450px] p-16">
            <Image src={GraficaSdwan} className="" alt="Imagen sdwan" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sdwan;
