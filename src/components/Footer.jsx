export const Footer = () => {
  return (
    <div>
      <footer className=" bottom-0 w-full z-40 bg-gray-800">
        <div className="text-white flex flex-col justify-center gap-2 items-center pt-12">
          <h1 className="font-bold">
            Slavic Baptist Church of West Sacramento
          </h1>
          <a href="https://maps.google.com/?q=1716+Willow+Ave,+West+Sacramento,+CA+95691">
            1716 Willow Ave. W. Sacramento CA 95691
          </a>
          <a href="tel:+19166722007" className="font-semibold">
            (916)672-2007
          </a>
          <a href="mailto:sbcws@mail.ru" className="italic font-semibold">
            sbcws@mail.ru
          </a>
          <a
            href="https://www.facebook.com/sbcwestsac"
            className="underline font-bold"
          >
            Facebook
          </a>
          <span className="text-sm text-gray-400 py-6">
            Copyright © {new Date().getFullYear()} sbcws.church
          </span>
        </div>
      </footer>
    </div>
  );
};
