import Image from "next/image";

import QR from "./img/QR David.png";
import QR2 from "./img/QR Gerardo.png";
import Layout from "@/layout/Layout";
const Contact_Us = () => {
  return (
    <Layout>
      <div className="h-screen brQr bg-cover bg-center pt-20 lg:pt-[20%]">
        <div className="grid place-content-center place-items-center lg:flex lg:justify-center lg:items-center">
          <Image src={QR} alt="qr" />
          <Image src={QR2} alt="qr" />
        </div>
      </div>
    </Layout>
  );
};

export default Contact_Us;
