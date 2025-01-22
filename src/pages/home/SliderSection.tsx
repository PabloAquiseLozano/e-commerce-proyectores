import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const SliderSection = ({ images = [] }: { images: string[] }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      loop={true}
      navigation={true}
      className="mySwiper"
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      style={{
        // @ts-ignore
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="w-full h-auto">
          <img
            src={image}
            alt="banner"
            width={1200}
            height={600}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
