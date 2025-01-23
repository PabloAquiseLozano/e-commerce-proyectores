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
  size: number;
  maceta: boolean;
  images: string[];
  isBestSeller?: boolean;
  link: string;
}
