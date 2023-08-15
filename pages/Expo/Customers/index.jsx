import Layout from "@/layout/Layout";
import Logos from "@/public/assets/img/Customers/img/Logos clientes-01.png";
import Image from "next/image";

const Customers = () => {
  return (
    <Layout>
      {" "}
      <div className="h-screen xl:h-[110vh] bg-fixed bg-center bg-cover imgBgExpo_8">
        <div className="pt-10  container mx-auto text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10">
          <h1 className="pt-10 text-3xl lg:text-5xl text-center">Customers</h1>

          <section>
            <Image src={Logos} alt="Logos Clientes" />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Customers;
