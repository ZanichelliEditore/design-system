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
    url: "http://www.dizionari.it/"
  },
  {
    id: 'terzavoce',
    name: "Terza Voce",
    subMenu: [
      {
        id: "sub1",
        name: "sub 1",
        url: "#sub1"
      },
      {
        id: "sub2",
        name: "sub 2",
        url: "#sub2"
      }
    ]
  }
];
