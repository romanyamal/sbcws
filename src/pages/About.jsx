import { useTitle } from "../components/useTitle";
import profImg from "../assets/person.jpg";
// import churchimg from "../assets/IMG955280-1024x768.jpg";
import img1 from "../assets/mitchell-leach-OoaoPYz-E3M-unsplash.jpg";
import img2 from "../assets/nycholas-benaia-2wGjjX8Qb-g-unsplash.jpg";
import img3 from "../assets/pedro-lima-IkqhfoJjwSI-unsplash.jpg";

export const About = () => {
  useTitle("About");
  return (
    <div className="px-12 lg:px-42">
      <section
        id="about"
        className="flex flex-col items-center justify-center w-full gap-8"
      >
        <h1 className="text-center pt-24 text-xl md:text-2xl lg:text-3xl font-bold">
          ABOUT
        </h1>
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-md md:text-xl lg:text-2xl">Church History</h1>
          <p className="text-sm md:text-lg">
            this church was established by _______ in 19xx year. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Harum dolor accusamus
            voluptatibus reiciendis nostrum eaque, doloremque ratione in quas
            ut. Mollitia saepe nulla ipsam quis sequi facilis veniam nisi sint?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            expedita iste cum non odio alias dolore similique ipsum numquam
            molestias quia laborum reprehenderit beatae cupiditate velit eius
            sequi nisi ullam!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <img src={img1} className="rounded-sm" loading="lazy" />
          <img src={img2} className="rounded-sm" loading="lazy" />
          <img src={img3} className="rounded-sm" loading="lazy" />
        </div>
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-md md:text-xl lg:text-2xl">Mission</h2>
          <p className="text-sm md:text-lg">
            our mission is to represent the love of christ and his sacrifice for
            us. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Facilis nam cum ullam fugit deserunt odio minus sint repudiandae
            adipisci animi tempore, qui sed suscipit doloremque placeat rem
            neque eaque eius?
          </p>
        </div>
      </section>
      <section
        id="leadership"
        className="flex flex-col items-center p-8 gap-8 justify-center w-full pt-16 pb-20"
      >
        <h1 className="text-md md:text-xl lg:text-2xl">Church Leadership</h1>
        <div className="flex flex-wrap justify-center text-center text-md gap-8">
          <div className="flex flex-col gap-4 text-center p-8">
            <img
              className="rounded-full h-30 w-30"
              src={profImg}
              loading="lazy"
            />
            <h2 className="text-md font-bold">First Lastname</h2>
            <span className="text-sm">Pastor</span>
          </div>
          <div className="flex flex-col gap-4 text-center p-8">
            <img
              className="rounded-full h-30 w-30"
              src={profImg}
              loading="lazy"
            />
            <h2 className="text-md font-bold">First Lastname</h2>
            <span className="text-sm">Elder</span>
          </div>
          <div className="flex flex-col gap-4 text-center p-8">
            <img
              className="rounded-full h-30 w-30"
              src={profImg}
              loading="lazy"
            />
            <h2 className="text-md font-bold">First Lastname</h2>
            <span className="text-sm">Elder</span>
          </div>
          <div className="flex flex-col gap-4 text-center p-8">
            <img
              className="rounded-full h-30 w-30"
              src={profImg}
              loading="lazy"
            />
            <h2 className="text-md font-bold">First Lastname</h2>
            <span className="text-sm">Elder</span>
          </div>
          <div className="flex flex-col gap-4 text-center p-8">
            <img
              className="rounded-full h-30 w-30"
              src={profImg}
              loading="lazy"
            />
            <h2 className="text-md font-bold">First Lastname</h2>
            <span className="text-sm">Elder</span>
          </div>
          <div className="flex flex-col gap-4 text-center p-8">
            <img
              className="rounded-full h-30 w-30"
              src={profImg}
              loading="lazy"
            />
            <h2 className="text-md font-bold">First Lastname</h2>
            <span className="text-sm">Elder</span>
          </div>
        </div>
        <h1 className="text-md md:text-xl lg:text-2xl">Church Staff</h1>
        <div className="flex flex-wrap justify-center text-center text-md gap-8">
          <div className="flex flex-col gap-4 text-center p-8">
            <img
              className="rounded-full h-30 w-30"
              src={profImg}
              loading="lazy"
            />
            <h2 className="text-md font-bold">First Lastname</h2>
            <span className="text-sm">Staff</span>
          </div>
          <div className="flex flex-col gap-4 text-center p-8">
            <img
              className="rounded-full h-30 w-30"
              src={profImg}
              loading="lazy"
            />
            <h2 className="text-md font-bold">First Lastname</h2>
            <span className="text-sm">Staff</span>
          </div>
        </div>
      </section>
    </div>
  );
};
