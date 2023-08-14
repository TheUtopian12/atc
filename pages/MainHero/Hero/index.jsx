import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="hero min-h-screen bg-[url('/assets/img/Backgrounds/landing_vertical.jpg')] sm:bg-[url('/assets/img/Backgrounds/Portadalow.jpg')]">
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-left text-neutral-content container">
        <div className="absolute md:top-[50%] md:left-[10%]">
          <h1
            data-aos="fade-up"
            className="mb-5 text-4xl md:text-8xl font-bold text-center"
          >
            ICT Services
          </h1>
          <div data-aos="fade-down" className="flex md:gap-8 pb-32 ">
            <Image
              src={"/assets/img/icons/icono cableado estructurado-01.svg"}
              width={50}
              height={50}
              alt="Icono de servicio"
              className="w-[40px] h-[40px]  sm:w-[100px] sm:h-[100px]"
            />
            <Image
              src={"/assets/img/icons/iconos redes inalambricas-01.svg"}
              width={50}
              height={50}
              alt="Icono de servicio"
              className="w-[40px] h-[40px]  sm:w-[100px] sm:h-[100px]"
            />
            <Image
              src={"/assets/img/icons/icono alta disponibilidad-01.svg"}
              width={50}
              height={50}
              alt="Icono de servicio"
              className="w-[40px] h-[40px]  sm:w-[100px] sm:h-[100px]"
            />
            <Image
              src={"/assets/img/icons/icono videovigilancia.svg"}
              width={50}
              height={50}
              alt="Icono de servicio"
              className="w-[40px] h-[40px]  sm:w-[100px] sm:h-[100px]"
            />
            <Image
              src={"/assets/img/icons/iconos ciberseguridad.svg"}
              width={50}
              height={50}
              alt="Icono de servicio"
              className="w-[40px] h-[40px]  sm:w-[100px] sm:h-[100px]"
            />
            <Image
              src={"/assets/img/icons/icono oficina interconexion-01.svg"}
              width={50}
              height={50}
              alt="Icono de servicio"
              className="w-[40px] h-[40px]  sm:w-[100px] sm:h-[100px]"
            />
            <Image
              src={"/assets/img/icons/icono asesoramiento de red.svg"}
              width={50}
              height={50}
              alt="Icono de servicio"
              className="w-[40px] h-[40px]   sm:w-[100px] sm:h-[100px]"
            />
            <Image
              src={"/assets/img/icons/icono after sales.svg"}
              width={50}
              height={50}
              alt="Icono de servicio"
              className="w-[40px] h-[40px]   sm:w-[100px] sm:h-[100px]"
            />
          </div>
          <p className="mb-5 text-xl md:text-3xl text-center">
            <span className="font-bold">ONE</span>-STOP SHOP
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
