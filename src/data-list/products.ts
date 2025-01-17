interface Product {
  name: string;
  price: string;
  stock: number;
  size: string;
  maceta: boolean;
  img: string;
}

export const Products: Product[] = [
  {
    name: "Sakura mini rojo",
    price: "70",
    stock: 10,
    size: "100 cm",
    maceta: true,
    img: "/sakura-rojo.webp",
  },
  {
    name: "Sakura mini rosado",
    price: "70",
    stock: 10,
    size: "100 cm",
    maceta: false,
    img: "/sakura-rosa.jpg",
  },
  {
    name: "Alita de Angel",
    price: "75",
    stock: 10,
    size: "60 cm",
    maceta: false,
    img: "/alita-angel.webp",
  },
  {
    name: "Costilla de Adan",
    price: "75",
    stock: 0,
    size: "60 cm",
    maceta: false,
    img: "/costilla-adan.jpg",
  },
  {
    name: "Chiflera",
    price: "75",
    stock: 2,
    size: "60 cm",
    maceta: false,
    img: "/chiflera.jpg",
  },
  {
    name: "Helecho Babilonico",
    price: "70",
    stock: 10,
    size: "140 cm",
    maceta: false,
    img: "/helecho-babilonico.webp",
  },
];
