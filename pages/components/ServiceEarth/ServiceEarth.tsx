import earth from "../../../public/earth.png";
import Image from "next/image";

const ServiceEarth = () => {
  return (
    <div className="hidden md:grid grid-cols-3 grid-rows-3 gap-6 items-center max-w-xl justify-items-center place-items-center">
      <div className="col-start-2 col-end-3 row-start-1 row-end-2 place-self-end w-full text-center">
        <h3>Service 1</h3>
      </div>
      <div className="col-start-1 col-end-2 row-start-2 row-end-3 place-self-center w-full text-right">
        <h3>Service 2</h3>
      </div>
      <div className="col-start-2 col-end-3 row-start-3 row-end-4 place-self-start w-full text-center">
        <h3>Service 3</h3>
      </div>
      <div className="col-start-3 col-end-4 row-start-2 row-end-3 place-self-center w-full text-left">
        <h3>Service 4</h3>
      </div>
      <div className="rounded-full col-start-2 col-end-3 row-start-2 row-end-3 ">
        <Image src={earth} alt="earth" />
      </div>
    </div>
  );
};

export default ServiceEarth;
