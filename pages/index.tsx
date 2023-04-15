import ServiceEarth from "./components/ServiceEarth/ServiceEarth";
import ServicesSummary from "./components/ServicesSummary/ServicesSummary";
import Image from "next/image";
import earth from "../public/earth.png";

export default function Home() {
  return (
    <>
      <main
        className={`h-96 text-xl flex justify-center items-start md:items-center max-w-screen-2xl mx-auto`}
      >
        {/* <div className="p-5 flex md:flex-col gap-5 w-1/3 flex-1">
        <h1 className="text-5xl font-bold tracking-wider">Global BNS</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          praesentium laboriosam nostrum neque soluta provident eum veniam
          doloribus saepe impedit sapiente eos voluptates aliquam suscipit
          deserunt alias, ullam necessitatibus laborum.
        </p>
      </div> */}
        {/* <ServiceEarth /> */}
      </main>
      {/* <Image src={earth} alt="earth" className="" /> */}
      <section className="w-11/12 z-10 min-h-screen mx-auto p-10 rounded-t-lg bg-primary-100">
        <ServicesSummary />
      </section>
    </>
  );
}
