import { BestSellersProducts } from "@/pages/home/BestSellersProducts.tsx";
import { Products } from "@/data-list";
import { Link } from "react-router-dom";
import { useState } from "react";
import { WrapperContainer } from "@/components/ui/WrapperContainer.tsx";

export const ProductsPage = () => {
  const [productHovered, setProductHovered] = useState<Product | null>(null);

  const bestSellersProducts = Products.filter(
    (product) => product.isBestSeller,
  );
  const othersProducts = Products.filter((product) => !product.isBestSeller);

  return (
    <div className="w-full h-auto">
      <WrapperContainer>
        <div className="w-full h-auto">
          <BestSellersProducts products={bestSellersProducts} />
          <div className="w-full my-[2em]">
            <div className="title">
              <h2 className="text-[2.5em] font-medium text-center mb-8 leading-[1em]">
                Mas productos
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-[1em]">
              {othersProducts.map((product, index) => (
                <Link key={index} to={`/products/${product.id}`}>
                  <div
                    key={index}
                    className="card bg-gray-100 w-[25em] h-[25em]  grid grid-rows-[1fr,4em]"
                  >
                    <div
                      onMouseEnter={() => setProductHovered(product)}
                      onMouseLeave={() => setProductHovered(null)}
                      className="w-full h-full relative overflow-hidden"
                    >
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
                      <span className="font-light text-[1em]">
                        {product.name} {product.size}
                      </span>
                      <div className="flex items-center gap-2 text-[.9em]">
                        <span className="font-medium text-[1.1em] line-through">
                          S/ {product.oldPrice}
                        </span>
                        <span className="font-medium text-[1.2em]">
                          S/ {product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};
