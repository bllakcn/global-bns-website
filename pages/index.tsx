import ServiceEarth from "./components/ServiceEarth/ServiceEarth";
import ServicesSummary from "./components/ServicesSummary/ServicesSummary";
import Image from "next/image";
import earth from "../public/earth.png";

export default function Home() {
  return (
    <>
      <main>
        <div className="w-full text-primary-100 flex text-center flex-col justify-center items-center pt-32 -mb-32">
          <h1 className="font-bold text-4xl md:text-7xl tracking-widest drop-shadow-lg">
            GLOBAL BNS
          </h1>
          <p className="pb-8 text-2xl md:text-5xl">Motto here!</p>
          <Image
            src={earth}
            alt="earth"
            className="hover:-translate-y-5 hover:saturate-100 transition-all duration-200 saturate-50"
          />
        </div>
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
      <section>
        <ServicesSummary />
      </section>
    </>
  );
  36;
}
