import Layout from "@/layout/Layout";

const Coverage = () => {
  return (
    <Layout>
      <div className="h-screen bg-fixed bg-center bg-cover imgBgExpo_2 relative pt-10">
        <div className="absolute lg:hidden top-0 left-0 right-0 bottom-0 bg-black/30 z-[2]" />
        <div className="absolute lg:relative z-[2]">
          <div className="z-[2] container text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10">
            <h1 className="pt-10 text-3xl lg:text-5xl">Coverage</h1>

            <p className="pt-10 lg:absolute lg:top-10 lg:right-1 mx-10 ">
              Company regulated <br /> and concessioned by IFT
            </p>
            <p className="pt-10 lg:absolute lg:top-64 lg:right-1 lg:w-[500px]">
              xcien currently has offices in 11 states in the country, located
              in the 3 main economic regions, for nationwide coverage.
            </p>

            <div className="mt-12 lg:mt-0 lg:absolute top-24 right-[40%] lg:bg-[#2187f880] lg:rounded-full lg:w-[250px] lg:h-[250px] px-3 lg:text-sm lg:flex justify-center items-center text-center">
              We have more than 160 towers in different parts of the Mexican
              Republic.
            </div>

            <div className="mt-12 lg:mt-0 lg:absolute bottom-10 left-10 lg:bg-[#2187f880] lg:rounded-full lg:w-[200px] lg:h-[200px] px-3 lg:text-sm lg:flex justify-center items-center text-center">
              Experts in wireless technology
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Coverage;
