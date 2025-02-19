import { Products } from "@/data-list";
import { ArrayParam, NumberParam, useQueryParams } from "use-query-params";
import { WrapperContainer } from "@/components/ui/WrapperContainer.tsx";
import { FilterOptions } from "@/pages/products/filterOptions.tsx";
import { Select } from "antd";
import { ProductCard } from "@/pages/products/ProductCard.tsx";
import { isEmpty } from "lodash";

export const ProductsPage = () => {
  const [query, setQuery] = useQueryParams({
    category: ArrayParam,
    brand: ArrayParam,
    minPrice: NumberParam,
  });

  const filters = {
    category: query.category || [],
    brand: query.brand || [],
    minPrice: query.minPrice || 0,
  };

  const productsFiltered = (products: Product[]) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (isEmpty(filters.brand) || filters.brand.includes(product.brand)) &&
        (isEmpty(filters.category) ||
          filters.category.includes(product.category))
      );
    });
  };

  const filteredProducts = productsFiltered(Products);

  const sortByOptions = [
    {
      value: "minPrice",
      label: "Precio más Bajo",
    },
    {
      value: "maxPrice",
      label: "Precio más Alto",
    },
    {
      value: "brand",
      label: "Marca",
    },
    {
      value: "recommended",
      label: "Recomendados",
    },
  ];

  return (
    <div className="w-full h-auto bg-gray-200">
      <WrapperContainer>
        <div className="w-full h-auto flex gap-4 ">
          <div className="btn-group bg-white flex my-[2em] p-[2em] rounded-3xl">
            <FilterOptions filters={filters} setQuery={setQuery} />
          </div>
          <div className="w-full flex flex-col gap-[1em] my-[2em] rounded-3xl">
            <div className="w-full bg-white rounded-2xl p-[1em] gap-4 flex">
              <span>Ordenar por:</span>
              <Select
                style={{ width: 150 }}
                defaultValue="recommended"
                options={sortByOptions}
              />
            </div>
            <div className="w-full grid autofill gap-[1.9em]">
              {filteredProducts.map((fProduct, index) => (
                <ProductCard
                  key={index}
                  title={fProduct.name}
                  brand={fProduct.brand}
                  price={fProduct.price}
                  oldPrice={fProduct.oldPrice}
                  imageUrl={fProduct.images[0]}
                />
              ))}
            </div>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};
