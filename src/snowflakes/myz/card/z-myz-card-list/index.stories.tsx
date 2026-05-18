import {h} from "@stencil/core";
import type {Meta} from "@stencil/storybook-plugin";
import {ZMyzCardList} from "./index";

const StoryMeta = {
  title: "Snowflakes/MyzCard/ZMyzCardList",
  component: ZMyzCardList,
} satisfies Meta<ZMyzCardList>;

export default StoryMeta;

export const Default = {
  render: () => (
    <z-myz-card-list listdata='[{"isLink":true,"value":"Leggi sul browser","url":"https://booktab.it/"},{"isLink":true,"value":"Sito e risorse del libro","url":"http://online.scuola.zanichelli.it/curtisinvitoblu/"},{"isLink":false,"value":"Programmazione"},{"isLink":false,"value":"Prove di verifica"},{"isLink":true,"value":"ZTE","url":"https://zte.zanichelli.it/"}]' />
  ),
};
