import { Collapsible } from "../components/Collapsible";
import { useTitle } from "../components/useTitle";
import bibleImg from "../assets/aaron-burden-c333d6YEhi0-unsplash.jpg";
import bylaws from "../assets/Bylaws.pdf";

export const Values = () => {
  useTitle("Values");
  return (
    <div className="px-12 lg:px-42 pt-24">
      <section
        id="about"
        className="flex flex-col items-center justify-center w-full gap-8"
      >
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
          VALUES
        </h1>
        <div className="md:h-[40vh] lg:h-[50vh] w-full overflow-hidden ">
          <img
            src={bibleImg}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <h3 className="text-md md:text-xl lg:text-2xl">Mission</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis nam
          cum ullam fugit deserunt odio minus sint repudiandae adipisci animi
          tempore, qui sed suscipit doloremque placeat rem neque eaque eius
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis,
          nulla ea? Iure, iusto quo nobis eum non provident voluptate doloribus
          unde rerum, tenetur est inventore, quam iste modi doloremque eligendi!
        </p>
      </section>
      <section className="w-full pb-20 flex flex-col items-center justify-center gap-2">
        <h3 className="text-md md:text-xl lg:text-2xl p-6 text-center">
          Doctrine
        </h3>
        <div className="p-4 w-full md:p-2 md:w-3/4 bg-[#fcf3e6] rounded-sm">
          <Collapsible title="God's Word">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus minima voluptatum vero qui aperiam maxime fugit
              aspernatur laboriosam, quaerat numquam explicabo tempore rerum, a,
              ad dolorem libero. Eum, accusamus earum?
            </p>
          </Collapsible>
          <Collapsible title="God">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus minima voluptatum vero qui aperiam maxime fugit
              aspernatur laboriosam, quaerat numquam explicabo tempore rerum, a,
              ad dolorem libero. Eum, accusamus earum?
            </p>
          </Collapsible>
          <Collapsible title="Man">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus minima voluptatum vero qui aperiam maxime fugit
              aspernatur laboriosam, quaerat numquam explicabo tempore rerum, a,
              ad dolorem libero. Eum, accusamus earum?
            </p>
          </Collapsible>
          <Collapsible title="Sin">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus minima voluptatum vero qui aperiam maxime fugit
              aspernatur laboriosam, quaerat numquam explicabo tempore rerum, a,
              ad dolorem libero. Eum, accusamus earum?
            </p>
          </Collapsible>
          <Collapsible title="Salvation">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus minima voluptatum vero qui aperiam maxime fugit
              aspernatur laboriosam, quaerat numquam explicabo tempore rerum, a,
              ad dolorem libero. Eum, accusamus earum?
            </p>
          </Collapsible>
          <Collapsible title="Trinity">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus minima voluptatum vero qui aperiam maxime fugit
              aspernatur laboriosam, quaerat numquam explicabo tempore rerum, a,
              ad dolorem libero. Eum, accusamus earum?
            </p>
          </Collapsible>
          <Collapsible title="The Church">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus minima voluptatum vero qui aperiam maxime fugit
              aspernatur laboriosam, quaerat numquam explicabo tempore rerum, a,
              ad dolorem libero. Eum, accusamus earum?
            </p>
          </Collapsible>
          <Collapsible title="Civic Duties">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus minima voluptatum vero qui aperiam maxime fugit
              aspernatur laboriosam, quaerat numquam explicabo tempore rerum, a,
              ad dolorem libero. Eum, accusamus earum?
            </p>
          </Collapsible>
          <Collapsible title="Marriage">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus minima voluptatum vero qui aperiam maxime fugit
              aspernatur laboriosam, quaerat numquam explicabo tempore rerum, a,
              ad dolorem libero. Eum, accusamus earum?
            </p>
          </Collapsible>
          <Collapsible title="The Spiritual World">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus minima voluptatum vero qui aperiam maxime fugit
              aspernatur laboriosam, quaerat numquam explicabo tempore rerum, a,
              ad dolorem libero. Eum, accusamus earum?
            </p>
          </Collapsible>
          <Collapsible title="The Future">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus minima voluptatum vero qui aperiam maxime fugit
              aspernatur laboriosam, quaerat numquam explicabo tempore rerum, a,
              ad dolorem libero. Eum, accusamus earum?
            </p>
          </Collapsible>
        </div>
        <div className="flex flex-col justify-center text-center items-center pt-4">
          <h3>For more details please read our bylaws</h3>
          <a
            href={bylaws}
            target="_blank"
            className="text-md min-w-24 my-6 max-w-20 rounded-md font-action text-black px-3 py-2 text-center bg-white hover:bg-primary transform transition-transform duration-300 "
          >
            BYLAWS
          </a>
        </div>
      </section>
    </div>
  );
};
