import ServiceBadge from "@/components/ServiceBadge";
import Image from "next/image";
import VideoVigilacia_1 from "../../../public/assets/img/VideoVigilancia/video vigilancia 2.png";
import VideoVigilacia_2 from "../../../public/assets/img/VideoVigilancia/videovigilancia.png";

const VideoSurveillance = () => {
  return (
    <>
      <section className="bg-[url('/assets/img/Backgrounds/videovigilancia_low.jpg')] bg-cover h-[100vh]  relative">
        <section className="absolute top-0 left-10">
          <ServiceBadge id="4" image="Video vigilancia" />
        </section>

        <div className=" text-white text-3xl text-center pt-14">
          <h1 className="pb-12 font-bold text-6xl">Video surveillance</h1>
          <p className="pt-12 container mx-auto">
            Nowadays, having a closed circuit camera system in our company or
            home undoubtedly gives us a sense of tranquility and security, not
            only to record thefts or any incident, but with new technologies we
            can have notifications based on specific security or restricted
            areas, face detection, people counting, etc.
          </p>
        </div>

        <section className="flex justify-center items-center pt-32   gap-2 ">
          <Image src={VideoVigilacia_2} alt="VideoVigilancia" />
        </section>
      </section>

      <section className="bg-[url('/assets/img/Backgrounds/videovigilancia_low.jpg')] bg-cover h-[100vh]  relative">
        <section className="absolute top-0 right-10">
          <ServiceBadge id="4" image="Video vigilancia" />
        </section>

        <div className=" text-white text-3xl text-center pt-14">
          <h1 className="pb-12 font-bold text-6xl">Video surveillance</h1>
          <p className="pt-12 container mx-auto">
            With our video surveillance solutions you will have the support of
            the best brands and technologies specialized in video security and
            artificial intelligence, with internet access from one or more
            devices and keeping record of events that happen within the coverage
            area of the system.
          </p>
        </div>

        <section className=" pt-32 gap-2 ">
          <div className="relative">
            <span className="text-green-500 font-bold absolute left-[10%] text-lg -top-10">
              Line Crossing Detection
            </span>
            <span className="text-green-500 font-bold absolute left-[38%] text-lg -top-10">
              Intrusion Detection
            </span>
            <span className="text-green-500 font-bold absolute right-[35%] text-lg -top-10">
              Motion Detection
            </span>
            <span className="text-green-500 font-bold absolute right-[10%] text-lg -top-10">
              Human Detection
            </span>
          </div>
          <Image src={VideoVigilacia_1} alt="VideoVigilancia" />
        </section>
      </section>
    </>
  );
};

export default VideoSurveillance;