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
  brand: string;
  category: string;
  stock: number;
  size: number;
  description: string;
  control: boolean;
  images: string[];
  isBestSeller?: boolean;
  link: string;
}

interface Message {
  sender: "bot" | "user";
  message: string;
}

interface Conversation {
  createAt: any;
  id: string;
  messages: Message[];
}

interface FilterOptions {
  name: string;
  label: string;
  items: FilterOptionsItems[];
}

interface FilterOptionsItems {
  label: string;
  value: string;
}
