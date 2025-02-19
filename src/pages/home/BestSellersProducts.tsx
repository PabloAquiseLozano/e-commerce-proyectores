import { useState } from "react";
import { WrapperContainer } from "@/components/ui/WrapperContainer.tsx";
import { Link } from "react-router-dom";

interface Props {
  products: Product[];
}

export const BestSellersProducts = ({ products }: Props) => {
  const [productHovered, setProductHovered] = useState<Product | null>(null);

  return (
    <WrapperContainer>
      <div className="w-full h-auto my-[4em]">
        <div className="title px-4">
          <h2 className="text-[2.5em] font-medium text-center mb-8 leading-[1em]">
            Productos más vendidos
          </h2>
        </div>
        <div className="w-full h-auto flex justify-center flex-wrap gap-4 px-4">
          {products.map((product, index) => (
            <Link key={index} to={`/products/${product.id}`}>
              <div
                key={index}
                className="card bg-gray-100 w-[23em] sm:w-[23em] h-[23em] grid grid-rows-[1fr,4em]"
              >
                <div
                  onMouseEnter={() => setProductHovered(product)}
                  onMouseLeave={() => setProductHovered(null)}
                  className="w-full h-full relative overflow-hidden"
                >
                  <div className="tag absolute z-30 top-2 left-2 bg-neutral-900 text-white text-[.8em] px-2">
                    BEST SELLER
                  </div>
                  <img
                    src={
                      product.images.length > 1
                        ? productHovered?.id === product.id
                          ? product.images[1]
                          : product.images[0]
                        : product.images[0]
                    }
                    alt="plantas"
                    className="w-full h-full object-cover absolute inset-0 z-20"
                  />
                </div>
                <div className="title flex justify-center flex-col items-center px-5 py-2">
                  <span className="font-light text-[1em]">{product.name}</span>
                  <div className="flex items-center gap-2 text-[.9em]">
                    <span className="font-medium text-[1.1em] line-through">
                      $ {product.oldPrice}
                    </span>
                    <span className="font-medium text-[1.2em]">
                      $ {product.price}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};
