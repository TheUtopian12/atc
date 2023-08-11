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
        <div className="absolute md:top-[50%] md:left-[20%]">
          <h1
            data-aos="fade-up"
            className="mb-5 text-4xl md:text-8xl font-bold text-center"
          >
            ICT Services
          </h1>
          <div data-aos="fade-down" className="flex gap-4 md:gap-8 pb-32">
            <Image
              src={"/assets/img/icons/Cableado estructurado_1.png"}
              width={50}
              height={50}
              alt="Icono de servicio"
              className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px]"
            />
            <Image
              src={"/assets/img/icons/Redes inalambricas_1.png"}
              width={50}
              height={50}
              alt="Icono de servicio"
              className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px]"
            />
            <Image
              src={"/assets/img/icons/Alta disponibilidad_1.png"}
              width={50}
              height={50}
              alt="Icono de servicio"
              className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px]"
            />
            <Image
              src={"/assets/img/icons/Video vigilancia.png"}
              width={50}
              height={50}
              alt="Icono de servicio"
              className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px]"
            />
            <Image
              src={"/assets/img/icons/Ciberseguridad_1.png"}
              width={50}
              height={50}
              alt="Icono de servicio"
              className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px]"
            />
            <Image
              src={"/assets/img/icons/Interconexion de oficinas.png"}
              width={50}
              height={50}
              alt="Icono de servicio"
              className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px]"
            />
            <Image
              src={"/assets/img/icons/asesoramiento.png"}
              width={50}
              height={50}
              alt="Icono de servicio"
              className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
            />
            <Image
              src={"/assets/img/icons/iconoa fter sales.png"}
              width={50}
              height={50}
              alt="Icono de servicio"
              className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
            />
          </div>
          <p className="mb-5 text-xl md:text-3xl text-center">
            <span className="font-bold">ONE</span>-STOP SHOPPER
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
