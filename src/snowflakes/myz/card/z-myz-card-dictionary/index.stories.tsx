import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ButtonVariant} from "../../../../beans";
import {ZMyzCardDictionary} from "./index";

const StoryMeta = {
  title: "Snowflakes/MyzCard/ZMyzCardDictionary",
  component: ZMyzCardDictionary,

  args: {
    cover: "https://staticmy.zanichelli.it/catalogo/assets/m40004.9788808194121.jpg",
    disabled: false,
    hideinfobtn: false,
    flipped: false,
    flipbuttonlabel: "info",
  },
} satisfies Meta<ZMyzCardDictionary>;

export default StoryMeta;

const DATA = JSON.stringify({
  author: "Nicola Zingarelli",
  year: "2021",
  title: "Vocabolario della lingua italiana",
  description: "A cura di Mario Cannella, Beata Lazzarini",
  onlineLicense: {expiration: "31/12/2021", installations: "1"},
  offlineLicense: {expiration: "30/06/2021", installations: "2"},
});

export const CardDefault = {
  render: (args) => (
    <z-myz-card-dictionary
      name={args.name}
      cover={args.cover}
      disabled={args.disabled}
      hideinfobtn={args.hideinfobtn}
      flipped={args.flipped}
      flipbuttonlabel={args.flipbuttonlabel}
    >
      <z-myz-card-footer-sections>
        <div slot="top">Vocabolario della lingua italiana</div>
        <div slot="bottom">
          <z-button style={{width: "100%"}}>VAI AL PRODOTTO</z-button>
        </div>
      </z-myz-card-footer-sections>
      <z-myz-card-info
        slot="info"
        data={DATA}
      >
        <z-button
          variant={ButtonVariant.TERTIARY}
          icon="gear"
        >
          Gestisci Licenze
        </z-button>
      </z-myz-card-info>
    </z-myz-card-dictionary>
  ),
} satisfies StoryObj<ZMyzCardDictionary>;

export const CardFlipped = {
  args: {
    flipped: true,
  },
  render: (args) => (
    <z-myz-card-dictionary
      name={args.name}
      cover={args.cover}
      disabled={args.disabled}
      hideinfobtn={args.hideinfobtn}
      flipped={args.flipped}
      flipbuttonlabel={args.flipbuttonlabel}
    >
      <z-myz-card-footer-sections>
        <div slot="top">Vocabolario della lingua italiana</div>
        <div slot="bottom">
          <z-button style={{width: "100%"}}>VAI AL PRODOTTO</z-button>
        </div>
      </z-myz-card-footer-sections>
      <z-myz-card-info
        slot="info"
        data={DATA}
      >
        <z-button
          variant={ButtonVariant.TERTIARY}
          icon="gear"
        >
          Gestisci Licenze
        </z-button>
      </z-myz-card-info>
    </z-myz-card-dictionary>
  ),
} satisfies StoryObj<ZMyzCardDictionary>;

export const CardNoInfoButton = {
  args: {
    hideinfobtn: true,
  },
  render: (args) => (
    <z-myz-card-dictionary
      name={args.name}
      cover={args.cover}
      disabled={args.disabled}
      hideinfobtn={args.hideinfobtn}
      flipped={args.flipped}
      flipbuttonlabel={args.flipbuttonlabel}
    >
      <z-myz-card-footer-sections>
        <div slot="top">Vocabolario della lingua italiana</div>
        <div slot="bottom">
          <z-button style={{width: "100%"}}>VAI AL PRODOTTO</z-button>
        </div>
      </z-myz-card-footer-sections>
      <z-myz-card-info
        slot="info"
        data={DATA}
      >
        <z-button
          variant={ButtonVariant.TERTIARY}
          icon="gear"
        >
          Gestisci Licenze
        </z-button>
      </z-myz-card-info>
    </z-myz-card-dictionary>
  ),
} satisfies StoryObj<ZMyzCardDictionary>;
