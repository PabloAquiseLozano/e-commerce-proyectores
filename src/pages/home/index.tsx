import { SliderSection } from "@/pages/home/SliderSection.tsx";
import { BestSellersProducts } from "@/pages/home/BestSellersProducts.tsx";
import { DescriptionSection } from "@/pages/home/DescriptionSection.tsx";
import { CategoriesSection } from "@/pages/home/CategoriesSection.tsx";
import { Products } from "@/data-list";
import { OtherProductsSection } from "@/pages/home/OtherProductsSection.tsx";
import { ShippingSection } from "@/pages/home/ShippingSection.tsx";
import { useDevice } from "@/hooks";

const bannersCarousel = ["/images/banner-1.jpg", "/images/banner-2.jpg"];
const bannersCarouselMb = [
  "/images/banner-mb-1.jpg",
  "/images/banner-mb-2.jpg",
];

export const HomePage = () => {
  const { isMobile } = useDevice();

  const bestSellersProducts = Products.filter(
    (product) => product.isBestSeller,
  );
  const othersProducts = Products.filter((product) => !product.isBestSeller);

  return (
    <div>
      <SliderSection images={isMobile ? bannersCarouselMb : bannersCarousel} />
      <BestSellersProducts products={bestSellersProducts} />
      <CategoriesSection />
      <DescriptionSection />
      <OtherProductsSection products={othersProducts.concat(othersProducts)} />
      <ShippingSection />
    </div>
  );
};
