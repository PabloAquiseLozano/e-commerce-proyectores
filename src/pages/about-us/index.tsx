import { WrapperContainer } from "@/components/ui/WrapperContainer.tsx";

export const AboutUs = () => {
  return (
    <div className="w-full h-auto">
      <WrapperContainer>
        <div
          className="w-full flex flex-col items-center justify-center h-auto min-h-[70svh] relative p-[2em] text-lime-50 bg-neutral-900"
          style={{
            backgroundBlendMode: "multiply",
            background: "url('/images/salaproyeccion.jpg'), rgba(0,0,0,0.6)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="mb-3">
            <h1 className="text-[2.2em] font-medium text-center leading-[1em] mb-3">
              SOBRE NOSOTROS
            </h1>
          </div>
          <div className="w-full flex justify-center">
            <p className="font-extralight text-center text-[1.5em] leading-[1.3em] w-[30em]">
              Nuestra amplia variedad de productos te brinda calidad y estilo.
              Desde proyectores portátiles hasta proyectores para sala.
            </p>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};
