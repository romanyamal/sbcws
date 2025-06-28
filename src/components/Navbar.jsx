import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import logoimg from "../assets/cropped-IMG954513.png";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navLinks = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Values", url: "/values" },
    { title: "Give", url: "/give" },
    { title: "Watch", url: "/watch" },
  ];

  const toggleModal = useCallback(() => {
    setShowModal((prevShowModal) => !prevShowModal);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Laptop Navbar */}
      {!isMobile ? (
        <nav className="fixed top-0 w-full z-40 bg-gray-800 mask-b-from-97% mask-b-to-100%">
          <div className="mx-auto px-4">
            <div className="flex justify-center md:justify-between items-center lg:px-36 h-16">
              <Link to="/">
                <img className="max-w-15" src={logoimg} alt="Church Logo" />
              </Link>
              <ul className="hidden md:flex items-center space-x-4 lg:space-x-8">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      className="text-white hover:text-primary transition-colors duration-300"
                      to={link.url}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <button className="text-md min-w-24 my-4 border rounded-md font-action text-black px-4 py-2 text-center bg-white hover:bg-primary transform transition-transform duration-300 ">
                    <Link to="/visit">Plan a Visit</Link>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        /* Mobile Navbar */
        <nav className={`fixed top-0 z-40 w-full bg-gray-800 py-3 px-4 h-20`}>
          <div className="mx-auto flex justify-center items-center">
            <Link to="/">
              <img className="max-w-15" src={logoimg} alt="Church Logo" />
            </Link>
            <button
              className={`
                absolute top-6 right-6 cursor-pointer text-lg z-40 text-white
                transition-opacity duration-500 ease-in-out
                ${showModal ? "opacity-0 pointer-events-none" : "opacity-100"}
              `}
              onClick={toggleModal}
              aria-label="Open mobile menu"
            >
              &#9776;
            </button>
            <button
              className={`
                absolute top-6 right-6 cursor-pointer text-lg z-40 text-white
                transition-opacity duration-500 ease-in-out
                ${showModal ? "opacity-100" : "opacity-0 pointer-events-none"}
              `}
              onClick={toggleModal}
              aria-label="Close mobile menu"
            >
              &#x2715;
            </button>
          </div>
          <div
            className={`
              fixed top-0 left-0 w-full h-full bg-gray-900 z-30 transform
              transition-all duration-500 ease-in-out
              ${
                showModal
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-0 pointer-events-none"
              }
            `}
          >
            <div className="flex flex-col gap-8 items-center justify-center h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.url}
                  className="text-white font-light text-2xl cursor-pointer hover:text-accent transition-colors "
                  onClick={toggleModal}
                >
                  {link.title}
                </Link>
              ))}
              <Link
                to="/visit"
                className="min-w-24 my-4 border rounded-sm font-action text-text px-4 py-2 text-center bg-white hover:bg-text hover:text-black transform transition-transform duration-500"
                onClick={toggleModal}
              >
                Plan a Visit
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
