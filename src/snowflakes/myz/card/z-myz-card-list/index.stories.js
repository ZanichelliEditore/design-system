import {html} from "lit";
import "./index";

export default {
  title: "Snowflakes/MyzCard/ZMyzCardList",
  component: "z-myz-card-list",
};

export const ZMyzCardList = {
  render: () =>
    html` <z-myz-card-list
      listdata='[{"isLink":true,"value":"Leggi sul browser","url":"https://booktab.it/"},{"isLink":true,"value":"Sito e risorse del libro","url":"http://online.scuola.zanichelli.it/curtisinvitoblu/"},{"isLink":false,"value":"Programmazione"},{"isLink":false,"value":"Prove di verifica"},{"isLink":true,"value":"ZTE","url":"https://zte.zanichelli.it/"}]'
    />`,
};
