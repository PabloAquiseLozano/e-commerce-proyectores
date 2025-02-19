const initialUrl = "https://api.whatsapp.com/send?phone=51918560207";

export const Categories: Category[] = [
  {
    name: "Para Hogar y Casa",
    url: `${initialUrl}&text=Deseo%20mas%20información%20sobre%20las%20plantas%20grandes%20por%20favor`,
    image: "/images/proyectorhome.jpg",
    gridType: "row-span-3 col-span-2",
  },
  {
    name: "Para Negocios y Presentaciones",
    url: `${initialUrl}&text=Deseo%20mas%20información%20sobre%20las%20controls%20por%20favor`,
    image: "/images/businessproyector.jpg",
    gridType: "row-span-2 col-span-2",
  },
  {
    name: "Portátiles",
    url: `${initialUrl}&text=Deseo%20mas%20información%20sobre%20el%20grass%20por%20favor`,
    image: "/images/miniproyector.jpg",
    gridType: "row-span-2 col-span-2",
  },
  {
    name: "4K y Full HD",
    url: `${initialUrl}&text=Deseo%20mas%20información%20sobre%20las%20plantas%20sakura%20por%20favor`,
    image: "/images/proyectorhd.webp",
    gridType: "row-span-2 col-span-2",
  },
  {
    name: "VideoJuegos",
    url: `${initialUrl}&text=Deseo%20mas%20información%20sobre%20los%20helechos%20por%20favor`,
    image: "/images/proyectorgamer.webp",
    gridType: "row-span-2 col-span-2",
  },
  {
    name: "Largo alcance",
    url: `${initialUrl}&text=Deseo%20mas%20información%20sobre%20las%20plantas%20pequeños%20por%20favor`,
    image: "/images/proyectorlarge.jpeg",
    gridType: "col-span-2",
  },
];
