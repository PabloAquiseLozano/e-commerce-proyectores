import { useNavigate, useParams } from "react-router";
import { Products } from "@/data-list";
import { WrapperContainer } from "@/components/ui/WrapperContainer.tsx";
import { PillBottle } from "lucide-react";

export const Product = (): any => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = Products.find((product) => product.id === productId);

  if (!product) return navigate(-1);

  return (
    <div className="w-full">
      <WrapperContainer>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-[auto,1fr] md:grid-rows-1 gap-[2em]">
          <div className="left-item p-[1em] order-2 sm:order-1">
            <ul className="w-full grid gap-[1em]">
              {product.images.map((image, index) => (
                <li key={index}>
                  <img
                    src={image}
                    alt={`${image} ${index}`}
                    className="w-full h-auto"
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="right-item p-[1em] order-1 sm:order-2">
            <div className="content pt-[2em] sm:sticky sm:top-2">
              <ul className="grid gap-5 mb-[2em]">
                <li>
                  <h1 className="ty-forum text-[3em] font-light leading-[1em]">
                    {product.name}
                  </h1>
                </li>
                <li className="flex gap-2 items-center my-[1.2em]">
                  <span className="text-[1.7em]">S/ {product.price}</span>
                  <span className="text-[1em] line-through">
                    S/ {product.oldPrice}
                  </span>
                </li>
                <li>
                  <span className="text-[1.2em] bg-secondary p-2 px-6 rounded-full text-white">
                    Tamaño: {product.size} CM
                  </span>
                </li>
                <li>
                  <div className="text-[1.2em] text-black my-3">
                    {product?.maceta ? (
                      <span className="ty-forum flex gap-2">
                        Incluye maceta <PillBottle className="text-black" />
                      </span>
                    ) : (
                      <span className="ty-forum flex gap-2">
                        No incluye maceta <PillBottle className="text-black" />
                      </span>
                    )}
                  </div>
                </li>
              </ul>
              <a
                href={`https://api.whatsapp.com/send?phone=51918560207&text=Buenas quiero realizar el pedido del producto: ${product.name}`}
                target="_blank"
                className="flex justify-center gap-3 font-medium text-white bg-primary uppercase px-[1em] py-[.7em] rounded-[.2em]"
              >
                <img
                  src="/images/whatsapp.png"
                  alt="whatsapp"
                  className="w-[1.6em] h-auto object-contain brightness-0 invert"
                />{" "}
                Realizar pedido
              </a>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};
