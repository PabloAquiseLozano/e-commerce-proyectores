import { isEmpty } from "lodash";

interface FilterProps {
  category: (string | null)[];
  brand: (string | null)[];
  minPrice: number;
}

export const filterProducts = (products: Product[], filters: FilterProps) => {
  return products.filter(
    (product) =>
      product.price >= filters.minPrice &&
      (isEmpty(filters.brand) || filters.brand.includes(product.brand)) &&
      (isEmpty(filters.category) ||
        filters.category.includes(product.category)),
  );
};
