import { WrapperContainer } from "@/components/ui/WrapperContainer.tsx";
import { Link } from "react-router-dom";

export const HeaderLayout = () => {
  return (
    <header id="card-header" className="bg-blue-950 text-white">
      <WrapperContainer>
        <div className="w-full h-auto md:h-[4em] flex flex-col md:flex-row justify-center md:justify-between flex-wrap place-items-center px-6">
          <Link to="/" className="flex items-center justify-start gap-[1em]">
            <img
              src="/logo.png"
              alt="logo"
              width={70}
              height={30}
              className="object-contain"
            />
          </Link>
          <div className="py-3">
            <ul className="list-none flex justify-end items-center gap-[1.5em] text-[.9em] md:text-[1.1em] font-light">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/about-us">Nosotros</Link>
              </li>
              <li>
                <Link to="/products">Productos</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </WrapperContainer>
    </header>
  );
};
