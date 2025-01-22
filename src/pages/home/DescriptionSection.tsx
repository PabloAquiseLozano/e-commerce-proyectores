import { Link } from "react-router-dom";

export const DescriptionSection = () => {
  return (
    <div className="w-full bg-secondary px-4 py-[4em] mt-[10em] mb-[5em]">
      <div className="w-full max-w-[85%] m-auto grid grid-cols-1 md:grid-cols-2 grid-rows-2 sm:grid-rows-1 gap-5">
        <div className="w-full relative flex items-center">
          <img
            src="/images/plants-1.png"
            alt="banner 1"
            className="w-[40em] h-auto object-contain absolute left-0 drop-shadow-xl"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 px-4">
          <p className="m-auto text-left text-white font-extralight text-[1.5em] leading-[1.3em]">
            Transforma tu hogar con nuestras exclusivas decoraciones,ofrecemos
            una amplia variedad de artículos para cada rincón de tu casa , desde
            plantas artificiales hasta adornos de jardín , calidad , estilo y
            elegancia en cada detalle
          </p>
          <div>
            <Link
              to="/products"
              className="bg-primary p-2 text-white rounded-[.3em] px-6 py-3 cursor-pointer"
            >
              Ver productos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
