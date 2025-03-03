import { Products } from "@/data-list";
import {
  ArrayParam,
  NumberParam,
  StringParam,
  useQueryParams,
} from "use-query-params";
import { WrapperContainer } from "@/components/ui/WrapperContainer.tsx";
import { FilterOptions } from "@/pages/products/filterOptions.tsx";
import { ProductCard } from "@/pages/products/ProductCard.tsx";
import { SortOptions } from "@/pages/products/sortOptions.tsx";
import { filterProducts, sortedProducts } from "@/utils";
import { Pagination } from "antd";
import { useMemo, useState } from "react";

export const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [query, setQuery] = useQueryParams({
    category: ArrayParam,
    brand: ArrayParam,
    minPrice: NumberParam,
    sortId: StringParam,
  });

  const filters = {
    category: query.category || [],
    brand: query.brand || [],
    minPrice: query.minPrice || 0,
  };

  const _sortOptions = {
    sortId: query.sortId || "recommended",
  };

  const filteredProducts = filterProducts(Products, filters);

  const newProducts = sortedProducts(filteredProducts, _sortOptions.sortId);

  const paginationProducts = useMemo(() => {
    const start = (currentPage - 1) * 12;
    const end = start + 12;
    return newProducts.slice(start, end);
  }, [currentPage, newProducts]);

  return (
    <div className="w-full h-auto bg-gray-200">
      <WrapperContainer>
        <div className="w-full h-auto flex gap-4 ">
          <div className="btn-group bg-white flex my-[2em] p-[2em] rounded-3xl">
            <FilterOptions filters={filters} setQuery={setQuery} />
          </div>
          <div className="w-full flex flex-col gap-[1em] my-[2em] rounded-3xl">
            <div className="w-full bg-white rounded-2xl p-[1em]">
              <SortOptions setQuery={setQuery} sortOptions={_sortOptions} />
            </div>

            <div className="w-full grid autofill gap-[1.9em]">
              {paginationProducts.map((fProduct, index) => (
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
            <div className="w-full flex justify-center">
              <Pagination
                current={currentPage}
                pageSize={12}
                total={Products.length}
                onChange={(page) => setCurrentPage(page)}
              />
            </div>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};
