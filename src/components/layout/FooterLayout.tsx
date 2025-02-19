import React from "react";
import { WrapperContainer } from "@/components/ui/WrapperContainer.tsx";
import { Globe, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const FooterLayout = (): React.ReactNode => {
  return (
    <footer className="w-full h-auto py-4 bg-blue-950 grid place-items-center text-white">
      <WrapperContainer>
        <div className="w-full px-5">
          <div className="logo my-8">
            <div className="flex items-center justify-center gap-[1em] mb-[1em]">
              <img
                src="/logo.png"
                alt="logo"
                width={70}
                height={30}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-[1.2em] font-medium mb-2">Contactanos</span>
              <hr className="w-[3em] h-[2px] border-none bg-primary" />
            </div>
          </div>
          <div className="contact-list flex gap-5 justify-center flex-wrap">
            <a
              href="https://vantage-proyectores.com"
              rel="noreferrer"
              target="_blank"
              className="flex gap-2"
            >
              <Globe /> vantage-proyectores.com
            </a>
            <a
              href="mailto:contacto@vantage-proyectores.com"
              rel="noreferrer"
              className="flex gap-2"
            >
              <Mail /> contacto@vantage-proyectores.com
            </a>
            <a href="tel:972252744" rel="noreferrer" className="flex gap-2">
              <Phone /> 972 252 744
            </a>
          </div>
          <div className="socials flex gap-6 justify-center flex-wrap my-5">
            <a
              href="https://www.facebook.com/p/Eterna-Verde-61561880309960/"
              target="_blank"
            >
              <img
                src="/images/facebook.png"
                alt="facebook"
                className="w-[1.6em] h-auto object-contain"
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=51918560207&text=Deseo%20mas%20información%20sobre%20las%20plantas%20por%20favor"
              target="_blank"
            >
              <img
                src="/images/whatsapp.png"
                alt="whatsapp"
                className="w-[1.6em] h-auto object-contain"
              />
            </a>
          </div>
          <hr className="w-full h-[1px] border-none bg-gray-300" />
          <div className="list-menu my-7">
            <ul className="list-none flex flex-wrap justify-center gap-3">
              <li className="py-[1px] px-4 border-r-2 border-black">
                <Link to="/"> Inicio</Link>
              </li>
              <li className="py-[1px] px-4 border-r-2 border-black">
                <Link to="/about-us"> Nosotros</Link>
              </li>
              <li className="py-[1px] px-4 border-r-2 border-black">
                <Link to="/products"> Productos</Link>
              </li>
              <li className="py-[1px] px-4">
                <Link to="/contact"> Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full m-auto flex flex-col justify-center items-center gap-1 flex-wrap p-5 text-[.9em] text-center">
          <div>
            © CopyRight 2025 - Vantage Point Proyectores. Todos los derechos
            reservados
          </div>
          <div>
            Desarrollado por <strong>Servitec Group</strong>
          </div>
        </div>
      </WrapperContainer>
    </footer>
  );
};
