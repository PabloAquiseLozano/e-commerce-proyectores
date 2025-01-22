import { WrapperContainer } from "@/components/ui/WrapperContainer.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Props {
  products: Product[];
}

export const OtherProductsSection = ({ products }: Props) => {
  const [productHovered, setProductHovered] = useState<Product | null>(null);

  return (
    <WrapperContainer>
      <div className="w-full h-auto my-[4em]">
        <div className="title">
          <h2 className="text-[2.5em] font-medium text-center mb-8 leading-[1em]">
            Mas productos
          </h2>
        </div>
        <div className="w-full h-auto flex justify-center flex-wrap gap-4 px-4">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            navigation={true}
            className="mySwiper"
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            style={{
              // @ts-ignore
              "--swiper-navigation-color": "#000",
              "--swiper-pagination-color": "#000",
            }}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              540: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              728: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1224: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index} className="w-full h-auto">
                <Link key={index} to={`/products/${product.id}`}>
                  <div
                    key={index}
                    className="card bg-gray-100 w-full h-[20em]  grid grid-rows-[1fr,4em]"
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </WrapperContainer>
  );
};
