import Layout from "@/layout/Layout";

const History = () => {
  return (
    <Layout>
      <div className="h-[130vh] md:h-screen bg-fixed bg-center bg-cover imgBgExpo_1">
        <div className="container text-center lg:text-left text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-10 pt-10">
          <h1 className="pt-10 text-3xl lg:text-5xl">History</h1>

          <p className="pt-10 lg:pr-28">
            xcien is a provider of wireless internet. We are concessionaires of
            the Federal Institute of Telecommunications (IFT) and specialists in
            Internet solutions for remote, urban and rural areas.
          </p>
          <p className="pt-10 lg:pr-28">
            <span className="font-extrabold">Over 23 years of experience</span>,
            a team of first-rate experts and certifications, supported by our
            own network of radio bases and data centers, position us as the
            leading wireless Internet company in Mexico.
          </p>
          <h2 className="pt-10">Our competences:</h2>
          <p className="pt-10 lg:pr-28">
            1st concessionaires of the federal Institute of Telecommunications
            with a wireless proyect.
          </p>
          <p className="pt-10 lg:pr-28">
            High availability and safety connectivity solutions integration.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default History;
