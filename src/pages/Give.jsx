import { useTitle } from "../components/useTitle";
import giveImg from "../assets/lukas-kaufmann-5uOCOURiRfk-unsplash.jpg";

export const Give = () => {
  useTitle("Give");
  return (
    <div className="px-12 lg:px-42 min-h-screen">
      <section
        id="give"
        className="flex flex-col items-center justify-center w-full gap-8"
      >
        <h1 className="text-center pt-24 text-xl md:text-2xl lg:text-3xl font-bold">
          GIVE
        </h1>
        <div className="md:h-[40vh] lg:h-[50vh] w-full overflow-hidden ">
          <img
            src={giveImg}
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/*lukas-kaufmann-5uOCOURiRfk-unsplash.jpg*/}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          inventore ullam eius similique fugiat? Iusto laboriosam placeat amet
          aliquam dicta dolorem quam maxime vel maiores beatae perferendis,
          ipsam nobis ipsum! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Laboriosam, alias ex totam magnam quos corporis consequuntur
          amet, eaque quas doloremque sed soluta. Iste voluptas aperiam quod
          dolore non repellat harum?
        </p>
        <h3 className="text-md md:text-xl lg:text-2xl">Ways to Give</h3>
        <ul className="list-disc pb-12 md:pb-20">
          <li>in person</li>
          <li>drop off</li>
          <li>venmo</li>
        </ul>
      </section>
    </div>
  );
};
