import {HeaderMenuItem} from "../../beans";

export const menuItems: HeaderMenuItem[] = [
  {
    id: 'home',
    name: "Home",
    subMenu: [
      {
        id: "libreria",
        name: "la mia libreria",
        url: "#libreria"
      },
      {
        id: "ambienti",
        name: "ambienti zanichelli",
        url: "#ambienti"
      },
      {
        id: "Idee",
        name: "Idee per insegnare",
        url: "#idee"
      }
    ]
  },
  {
    id: "Dizionari",
    name: "Dizionari",
    url: "www.dizionari.it"
  }
];
