import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const Contact = () => {
  const geoURL =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
  return (
    <main className="min-h-screen flex justify-center items-start pt-52 px-2 md:px-24 relative">
      <div className="bg-primary-100 bg-opacity-90 w-full z-10 md:px-24 rounded-t-lg shadow-lg">
        <h1 className="font-bold text-4xl py-5">Contact</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis
          </p>
        </div>
      </div>
      <div className="w-full absolute top-0">
        <ComposableMap>
          <Geographies geography={geoURL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className="fill-primary-100 opacity-50 "
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
