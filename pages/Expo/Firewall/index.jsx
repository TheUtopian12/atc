import Image from "next/image";
import Objects from "@/public/assets/img/Firewall/img/firewall.png";

import Icons from "@/public/assets/img/Firewall/img/beneficios.png";
import Icons2 from "@/public/assets/img/Firewall/img/iconos.png";

const Firewall = () => {
  return (
    <>
      <div className="h-screen bg-fixed bg-center bg-cover imgBgExpo_13 relative">
        <div className="container mx-auto text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10">
          <h1 className="pt-10 text-3xl lg:text-5xl text-center">
            Work securely and always connected
          </h1>
          <h2 className="pt-10 text-xl lg:text-4xl text-center">Firewall</h2>
        </div>
      </div>
      <div className="h-screen bg-fixed bg-center bg-cover imgBgExpo_8 relative">
        <div className="container mx-auto text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10">
          <h1 className="pt-10 text-3xl lg:text-5xl text-left">
            Simple, modern and reliable
          </h1>
          <div className="absolute right-0 w-[35%]">
            <p className=" text-center px-10">
              Security for your business managed 100% from the cloud,
              installation and remote administration is simpler. Increase the
              productivity of your business.
            </p>
          </div>
          <Image src={Objects} alt="Objects" className="w-[80%]" />
        </div>
      </div>

      <div className="h-screen bg-fixed bg-center bg-cover imgBgExpo_14 relative">
        <div className="container mx-auto text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10">
          <p className="text-4xl absolute top-[40%] w-[30%] text-center">
            The only unified threat management tool managed 100% through the
            cloud.
            <br /> <div className=" h-[2px] bg-red-600"> </div>
          </p>
        </div>
      </div>
      <div className="h-screen bg-fixed bg-center bg-cover imgBgExpo_8 relative">
        <div className="container mx-auto text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10">
          <h1 className="pt-10 text-3xl lg:text-5xl text-center">Benefits</h1>
          <div className="flex justify-center items-center">
            <Image src={Icons} className="w-[80%]" alt="Icons" />
          </div>
        </div>
      </div>
      <div className="h-screen bg-fixed bg-center bg-cover imgBgExpo_8 relative">
        <div className="container mx-auto text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10">
          <h1 className="pt-10 text-3xl lg:text-5xl text-center">Features</h1>
          <div className="flex justify-center items-center">
            <Image src={Icons2} className="w-[80%]" alt="Icons" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Firewall;
