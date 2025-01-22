import { WrapperContainer } from "@/components/ui/WrapperContainer.tsx";
import { Globe, Mail, Phone } from "lucide-react";

export const ContactPage = () => {
  return (
    <div className="w-full h-auto">
      <WrapperContainer>
        <div
          className="w-full flex flex-col items-center justify-center h-auto min-h-[70svh] relative p-[2em] text-lime-50 bg-neutral-900"
          style={{
            backgroundBlendMode: "multiply",
            background:
              "url('/images/artificial-plants.webp'), rgba(0,0,0,0.6)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full px-4 mb-10">
            <div className="mb-3">
              <h1 className="text-[2.2em] font-medium text-center">
                Contactanos
              </h1>
            </div>
            <div className="contact-list flex gap-10 justify-center flex-wrap text-[1.2em]">
              <a
                href="https://eternaverde.com"
                rel="noreferrer"
                target="_blank"
                className="flex gap-2"
              >
                <Globe /> eternaverde.com
              </a>
              <a
                href="mailto:contacto@eternaverde.com"
                rel="noreferrer"
                className="flex gap-2"
              >
                <Mail /> contacto@eternaverde.com
              </a>
              <a href="tel:918560207" rel="noreferrer" className="flex gap-2">
                <Phone /> 918 560 207
              </a>
            </div>
          </div>
          <div className="mb-3">
            <h1 className="text-[2.2em] font-medium text-center leading-[1em] mb-3">
              Nuestas redes sociales
            </h1>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-auto flex gap-[2em]">
              <a
                href="https://www.facebook.com/p/Eterna-Verde-61561880309960/"
                target="_blank"
              >
                <img
                  src="/images/facebook.png"
                  alt="facebook"
                  className="w-[2.6em] h-auto object-contain brightness-0 invert"
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=51918560207&text=Deseo%20mas%20información%20sobre%20las%20plantas%20por%20favor"
                target="_blank"
              >
                <img
                  src="/images/whatsapp.png"
                  alt="whatsapp"
                  className="w-[2.6em] h-auto object-contain brightness-0 invert"
                />
              </a>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};
