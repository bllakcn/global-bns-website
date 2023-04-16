import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const Contact = () => {
  const geoURL =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
  return (
    <main className="min-h-screen flex flex-col justify-start items-start pt-52 px-2 md:px-24 max-w-7xl mx-auto">
      <div className="bg-primary-100 bg-opacity-90 w-full z-10 md:px-24 p-2 rounded-t-lg shadow-lg">
        <h1 className="font-bold text-4xl py-5">Contact</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis
          </p>
        </div>
      </div>
      <div className="w-full -mt-60 hidden sm:block h-auto">
        <ComposableMap>
          <Geographies
            geography={geoURL}
            className="fill-primary-100 opacity-50 stroke-secondary-100 stroke-[0.5px]"
          >
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className=" outline-none select-none"
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    </main>
  );
};

export default Contact;
