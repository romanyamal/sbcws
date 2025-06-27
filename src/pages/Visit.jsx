import { useTitle } from "../components/useTitle";
import mapImg from "../assets/map.png";

export const Visit = () => {
  useTitle("Visit");
  return (
    <div className="px-12 lg:px-42 min-h-screen">
      <section
        id="visit"
        className="flex flex-col items-center justify-center w-full gap-6"
      >
        <h1 className="text-center pt-24 text-xl md:text-2xl lg:text-3xl font-bold">
          VISIT
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <img src={mapImg} className="rounded-sm" loading="lazy" />
          <div>
            <span>We are located at:</span>
            <h4 className="my-6 font-bold">
              1716 Willow Ave. West Sacramento CA 95691
            </h4>
            <h4>You can park along the street on Willow Ave</h4>
            <h4>
              If there is no space feel free to park on Poplar Ave or Evergreen
              Ave
            </h4>
            <button className="text-md min-w-24 my-6 rounded-md font-action text-black px-3 py-2 text-center bg-white hover:bg-primary transform transition-transform duration-300 ">
              <a href="https://maps.google.com/?q=1716+Willow+Ave,+West+Sacramento,+CA+95691">
                Open Google maps
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
