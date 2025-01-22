import { WrapperContainer } from "@/components/ui/WrapperContainer.tsx";
import { CategoryItem } from "@/pages/home/CategoryItem.tsx";
import { Categories } from "@/data-list/categories.ts";

export const CategoriesSection = () => {
  return (
    <div className="w-full">
      <WrapperContainer>
        <div className="wrapper px-6 py-8 sm:w-full md:w-[80%] h-[80em] md:h-[40em] m-auto">
          <div className="products-list h-full  flex flex-col md:grid md:grid-cols-6 md:grid-rows-3 gap-4">
            {Categories.map((category, index) => (
              <CategoryItem key={index} category={category} />
            ))}
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};
