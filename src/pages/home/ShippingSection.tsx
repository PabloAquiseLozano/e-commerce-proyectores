import { WrapperContainer } from "@/components/ui/WrapperContainer.tsx";

export const ShippingSection = () => {
  return (
    <div className="w-full bg-primary">
      <WrapperContainer>
        <div className="w-full p-6">
          <div className="w-full sm:w-[80%] m-auto">
            <h3 className="ty-forum text-[2em] text-center text-white mb-10 leading-[1em]">
              Hacemos envios a todo el Perú
            </h3>
            <div className="flex gap-10 flex-wrap justify-center">
              <img
                src="/images/cruz-cargo.png"
                alt="cruz del sur"
                className="w-[6em] h-[6em] rounded-full"
              />
              <img
                src="/images/shalom.png"
                alt="cruz del sur"
                className="w-[6em] h-[6em] rounded-full"
              />
              <img
                src="/images/mavisur.png"
                alt="cruz del sur"
                className="w-[6em] h-[6em] rounded-full"
              />
            </div>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};
