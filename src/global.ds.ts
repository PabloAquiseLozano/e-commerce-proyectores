interface Category {
  name: string;
  url: string;
  image: string;
  gridType: string;
}

interface Product {
  id: string;
  name: string;
  oldPrice?: number;
  price: number;
  stock: number;
  size: string;
  maceta: boolean;
  images: string[];
  isBestSeller?: boolean;
  link: string;
}
