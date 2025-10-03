import { useTitle } from "../components/useTitle";

export const Watch = () => {
  useTitle("Watch");
  return (
    <div className="px-12 lg:px-42">
      <section id="watch" className=" w-full">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-center pt-24 text-xl md:text-2xl lg:text-3xl font-bold">
            WATCH
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            inventore ullam eius similique fugiat? Iusto laboriosam placeat amet
            aliquam dicta dolorem quam maxime vel maiores beatae perferendis,
            ipsam nobis ipsum! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laboriosam, alias ex totam magnam quos corporis
            consequuntur amet, eaque quas doloremque sed soluta. Iste voluptas
            aperiam quod dolore non repellat harum?
          </p>
          <h3 className="text-md md:text-xl lg:text-2xl font-semibold">Live</h3>
          <div className="flex justify-center items-center">
            <iframe
              className="aspect-[16/9] w-[70vw] max-w-screen-xl rounded-sm"
              src="https://www.youtube.com/embed?listType=playlist&list=UUdvKKQVZi-a5rFRoA32ezTw&index=1"
              // width="1080"
              // height="607.5"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <h3 className="text-sm md:text-lg lg:text-xl px-6 md:px-14 pt-6">
          Previous Videos
        </h3>
        <div className="flex flex-wrap gap-8 items-center justify-center p-8">
          <iframe
            className="aspect-[16/9] w-[60vw] lg:w-[22vw] rounded-sm"
            src="https://www.youtube.com/embed?listType=playlist&list=UUdvKKQVZi-a5rFRoA32ezTw&index=2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            loading="lazy"
          ></iframe>

          <iframe
            className="aspect-[16/9] w-[60vw] lg:w-[22vw] rounded-sm"
            src="https://www.youtube.com/embed?listType=playlist&list=UUdvKKQVZi-a5rFRoA32ezTw&index=3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            loading="lazy"
          ></iframe>

          <iframe
            className="aspect-[16/9] w-[60vw] lg:w-[22vw] rounded-sm"
            src="https://www.youtube.com/embed?listType=playlist&list=UUdvKKQVZi-a5rFRoA32ezTw&index=4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex flex-col justify-center text-center items-center">
          <h3>For more videos please checkout our YouTube</h3>
          <button className="text-md min-w-24 my-6 max-w-20 rounded-md font-action text-black px-3 py-2 text-center bg-white hover:bg-primary transform transition-transform duration-300 ">
            <a href="https://www.youtube.com/@sbcws4053">YouTube</a>
          </button>
        </div>
      </section>
    </div>
  );
};

