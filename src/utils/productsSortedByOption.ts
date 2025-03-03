export const sortedProducts = (products: Product[], optionId: string) => {
  switch (optionId) {
    case "low-price":
      return products.sort((a, b) => a.price - b.price);

    case "high-price":
      return products.sort((a, b) => b.price - a.price);

    case "brand":
      return products.sort((a, b) => a.brand.localeCompare(b.brand));

    default:
      return products;
  }
};
