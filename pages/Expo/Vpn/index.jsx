import Layout from "@/layout/Layout";
import Image from "next/image";
import icon1 from "./img/vpn icon-01.png";
import icon2 from "./img/vpn icon-02.png";
import Vpn1 from "./img/imagen vpn.png";
import Vpn2 from "./img/imagen diagrama vpn-01.png";
import vpnLogo from "./img/vn_logo.png";

import Vpn_1 from "./img/imagenes vpn-02.png";
import Vpn_2 from "./img/imagenes vpn-01.png";

const Vpn = () => {
  return (
    <Layout>
      <div className="h-[100vh] bg-no-repeat  lg:bg-center lg:bg-cover bgVpn relative flex justify-center items-center ">
        <Image src={vpnLogo} className="lg:hidden" alt="" />
      </div>
      <div className="lg:h-screen  bg-center bg-cover imgBgExpo_8 relative pb-20">
        <h1 className="pt-20 lg:ml-10 text-3xl lg:text-5xl text-center  text-white">
          VPN xcien
        </h1>
        <div className="grid place-content-center place-items-center lg:flex justify-center items-center">
          <div className="text-white mx-[10%]">
            <p className="mt-10 text-2xl">
              {" "}
              We improve the security of your company through our virtual
              private network service and thus create a better internal
              connection.
            </p>
            <p className="mt-10 text-2xl">
              Our service allows you to send and receive data over shared or
              public networks as if it were a private network, with all the
              functionality, security and management policies of a network.
            </p>
            <p className="mt-10 text-2xl">
              Increase efficiency and security with our managed services.
            </p>
          </div>
          <div className="lg:mr-28 mt-10">
            <div
              className="w-80 h-24 bg-violet-500 text-2xl flex items-center justify-center text-white
          rounded-r-full rounded-l-full
          "
            >
              Benefits:
            </div>
            <div className="lg:flex justify-center items-center">
              <Image src={icon1} alt="icon" className="w-40 lg:w-80" />
              <p className="text-white text-center text-xl">
                More productivity in the IT operation
              </p>
            </div>
            <div className="lg:flex justify-center items-center">
              <Image src={icon2} alt="icon" className="w-40 lg:w-80" />
              <p className="text-white text-center text-xl">
                Minimizing risks and strengthening your.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen  bg-center bg-cover imgBgExpo_8 relative ">
        <h1 className="pt-20 lg:ml-10 text-3xl lg:text-5xl text-center lg:text-left  text-white">
          Continued productivity during contingency time
        </h1>
        <div className="lg:flex justify-center items-center">
          <div className="text-white mx-[10%]">
            <p className="mt-10 text-2xl">
              Virtual Network Service (VPN): Stay remotely connected to your
              local servers as if you were in the office.
            </p>
          </div>
          <div className="mr-28">
            <Image src={Vpn1} alt="icon" />
          </div>
        </div>
      </div>

      <div className="lg:h-screen  bg-center bg-cover imgBgExpo_8 relative ">
        <div className="lg:flex justify-center items-center pt-20">
          <Image src={Vpn2} alt="icon" className="w-[80%] hidden lg:block" />
          <Image src={Vpn_2} alt="icon" className="w-[60%] lg:hidden " />
          <div className="flex justify-end">
            <Image src={Vpn_1} alt="icon" className="w-[60%] lg:hidden flex " />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Vpn;
