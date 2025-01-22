const initialUrl = "https://api.whatsapp.com/send?phone=51918560207";

export const Categories: Category[] = [
  {
    name: "Plantas grandes",
    url: `${initialUrl}&text=Deseo%20mas%20información%20sobre%20las%20plantas%20grandes%20por%20favor`,
    image: "/images/plantas-grandes.jpg",
    gridType: "row-span-3 col-span-2",
  },
  {
    name: "Macetas",
    url: `${initialUrl}&text=Deseo%20mas%20información%20sobre%20las%20macetas%20por%20favor`,
    image: "/images/macetas.webp",
    gridType: "row-span-2 col-span-2",
  },
  {
    name: "Grass",
    url: `${initialUrl}&text=Deseo%20mas%20información%20sobre%20el%20grass%20por%20favor`,
    image: "/images/grass.jpg",
    gridType: "row-span-2 col-span-2",
  },
  {
    name: "Sakura",
    url: `${initialUrl}&text=Deseo%20mas%20información%20sobre%20las%20plantas%20sakura%20por%20favor`,
    image: "/images/sakura2.jpg",
    gridType: "row-span-2 col-span-2",
  },
  {
    name: "Helechos",
    url: `${initialUrl}&text=Deseo%20mas%20información%20sobre%20los%20helechos%20por%20favor`,
    image: "/images/helechos.webp",
    gridType: "row-span-2 col-span-2",
  },
  {
    name: "Plantas pequeñas",
    url: `${initialUrl}&text=Deseo%20mas%20información%20sobre%20las%20plantas%20pequeños%20por%20favor`,
    image: "/images/plantas-small.jpg",
    gridType: "col-span-2",
  },
];
