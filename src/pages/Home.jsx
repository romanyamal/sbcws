import { Link } from "react-router-dom";
import bgImage from "../assets/aaron-burden-vKBdY7e7KFk-unsplash.jpg";
import churchimg from "../assets/IMG955280-1024x768.jpg";
import iam from "../assets/iam.jpg";
import { useTitle } from "../components/useTitle";

export const Home = () => {
  useTitle("Home");
  return (
    <div className="font-primary">
      <section
        id="hero"
        className="h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="flex flex-col items-center justify-center text-center h-full text-white">
          <h1 className="text-4xl lg:text-6xl pb-2 font-bold">WELCOME</h1>
          <h2 className="text-xl md:text-2xl lg:text-4xl pb-4 px-4">
            Join us in opening Gods word this Sunday
          </h2>
          <div className="flex items-center justify-center gap-6">
            <button className="text-md min-w-24 my-2 rounded-md font-action text-black px-3 py-2 text-center bg-white hover:bg-primary transform transition-transform duration-300 ">
              <Link to="/watch">WATCH</Link>
            </button>
            <button className="text-md min-w-24 my-2 rounded-md font-action text-black px-3 py-2 text-center bg-white hover:bg-primary transform transition-transform duration-300 ">
              <Link to="/visit">VISIT</Link>
            </button>
          </div>
        </div>
      </section>
      <section
        id="welcome"
        className="flex flex-col gap-6 items-center justify-center w-full py-16 px-8 lg:px-42"
      >
        <div className="flex flex-col sm:gap-2 text-center text-xl md:text-2xl lg:text-4xl">
          <h1>Welcome to Slavic Baptist Church</h1>
          <h1>of West Sacramento</h1>
        </div>
        <p className="text-center text-md md:text-xl">
          We are a medium-sized family church, serving the suburbs of West
          Sacramento. Whether you are curious about Christianity or looking for
          a church home, you will find us to be friendly and helpful—a real
          fellowship. You are welcome to join us this Sunday! We show love and
          reverence for God in our songs, prayers, giving, and messages from His
          Word.
        </p>
        {/* <div className="flex justify-center gap-18">
          <img src={churchimg} className="max-w-80" />
          <img src={churchimg} className="max-w-80" />
          <img src={churchimg} className="max-w-80" />
        </div> */}
        <div className="px-4 lg:px-40 py-8">
          <img src={iam} className="rounded-sm" loading="lazy" />
        </div>
      </section>
      <section id="verse">
        <div className="flex flex-col items-center justify-center text-center h-full text-black text-xl md:text-2xl lg:text-3xl italic p-10 bg-amber-100">
          <h1>For “whoever calls on the name of the Lord shall be saved.”</h1>
          <h2>Romans 10:13</h2>
        </div>
      </section>
      <section id="service-times" className="p-8 lg:px-36 w-full pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 bg-gray-100 rounded-sm p-6">
          <div className="object-center my-auto ">
            <img src={churchimg} className="rounded-sm" loading="lazy" />
          </div>
          <div className="flex flex-col items-center gap-2 justify-center">
            <h1 className="text-xl md:text-2xl lg:text-4xl pb-4">Services</h1>
            <div className="grid grid-cols-3 grid-rows-4 gap-6 text-center text-md lg:text-xl">
              <div>Sunday</div>
              <div>9:00 am</div>
              <div>Bible Study</div>
              <div className="row-start-2">Sunday</div>
              <div className="row-start-2">10:00 am</div>
              <div className="row-start-2">Morning Service</div>
              <div className="row-start-3">Sunday</div>
              <div className="row-start-3">6:00 pm</div>
              <div className="row-start-3">Evening Service</div>
              <div className="row-start-4">Wednesday</div>
              <div className="row-start-4">7:00 pm</div>
              <div className="row-start-4">Bible Study</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center p-6">
          <span className="text-gray-400 text-sm italic">
            * * Note: currently we only have Russian service * *
          </span>
          <button className="text-md min-w-24 my-6 rounded-md font-action text-black px-3 py-2 text-center bg-white hover:bg-primary transform transition-transform duration-300 ">
            <Link to="/visit">Plan a visit</Link>
          </button>
        </div>
      </section>
    </div>
  );
};
