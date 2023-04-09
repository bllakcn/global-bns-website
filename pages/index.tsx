import Image from "next/image";
import Link from "next/link";
import ServiceEarth from "./components/ServiceEarth/ServiceEarth";
import style from "./index.module.css";

export default function Home() {
  return (
    <main
      className={`min-h-screen text-xl flex justify-center items-start md:items-center max-w-screen-2xl mx-auto`}
    >
      <div className="p-5 flex md:flex-col gap-5 w-1/3">
        <h1 className="text-5xl font-bold tracking-wider">Global BNS</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          praesentium laboriosam nostrum neque soluta provident eum veniam
          doloribus saepe impedit sapiente eos voluptates aliquam suscipit
          deserunt alias, ullam necessitatibus laborum.
        </p>
      </div>
      <ServiceEarth />
    </main>
  );
}
