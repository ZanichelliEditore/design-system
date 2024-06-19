import {html} from "lit";
import "../../../../components/z-button/index";
import "../z-myz-card-footer-sections/index";
import "../z-myz-card-info/index";
import "./index";

export default {
  title: "Snowflakes/MyzCard/ZMyzCardDictionary",
  component: "z-myz-card-dictionary",

  args: {
    cover: "https://staticmy.zanichelli.it/catalogo/assets/m40004.9788808194121.jpg",
    disabled: false,
    hideinfobtn: false,
    flipped: false,
    flipbuttonlabel: "info",
  },
};

export const CardDefault = {
  render: (args) => html`
    <z-myz-card-dictionary
      name="${args.name}"
      cover="${args.cover}"
      disabled="${args.disabled}"
      hideinfobtn="${args.hideinfobtn}"
      flipped="${args.flipped}"
      flipbuttonlabel="${args.flipbuttonlabel}"
    >
      <z-myz-card-footer-sections>
        <div slot="top">Vocabolario della lingua italiana</div>
        <div slot="bottom">
          <z-button
            variant="primary"
            style="width:100%;"
            >VAI AL PRODOTTO</z-button
          >
        </div>
      </z-myz-card-footer-sections>
      <z-myz-card-info
        slot="info"
        data='{"author":"Nicola Zingarelli","year":"2021","title":"Vocabolario della lingua italiana","description":"A cura di Mario Cannella, Beata Lazzarini","onlineLicense":{"expiration":"31/12/2021","installations":"1"},"offlineLicense":{"expiration":"30/06/2021","installations":"2"}}'
      >
        <z-button
          variant="tertiary"
          icon="gear"
          >Gestisci Licenze</z-button
        >
      </z-myz-card-info>
    </z-myz-card-dictionary>
  `,
};

export const CardFlipped = {
  render: (args) => html`
    <z-myz-card-dictionary
      name="${args.name}"
      cover="${args.cover}"
      disabled="${args.disabled}"
      hideinfobtn="${args.hideinfobtn}"
      flipped="${args.flipped}"
      flipbuttonlabel="${args.flipbuttonlabel}"
    >
      <z-myz-card-footer-sections>
        <div slot="top">Vocabolario della lingua italiana</div>
        <div slot="bottom">
          <z-button
            variant="primary"
            style="width:100%;"
            >VAI AL PRODOTTO</z-button
          >
        </div>
      </z-myz-card-footer-sections>
      <z-myz-card-info
        slot="info"
        data='{"author":"Nicola Zingarelli","year":"2021","title":"Vocabolario della lingua italiana","description":"A cura di Mario Cannella, Beata Lazzarini","onlineLicense":{"expiration":"31/12/2021","installations":"1"},"offlineLicense":{"expiration":"30/06/2021","installations":"2"}}'
      >
        <z-button
          variant="tertiary"
          icon="gear"
          >Gestisci Licenze</z-button
        >
      </z-myz-card-info>
    </z-myz-card-dictionary>
  `,

  args: {
    flipped: true,
  },
};

export const CardNoInfoButton = {
  render: (args) => html`
    <z-myz-card-dictionary
      name="${args.name}"
      cover="${args.cover}"
      disabled="${args.disabled}"
      hideinfobtn="${args.hideinfobtn}"
      flipped="${args.flipped}"
      flipbuttonlabel="${args.flipbuttonlabel}"
    >
      <z-myz-card-footer-sections>
        <div slot="top">Vocabolario della lingua italiana</div>
        <div slot="bottom">
          <z-button
            variant="primary"
            style="width:100%;"
            >VAI AL PRODOTTO</z-button
          >
        </div>
      </z-myz-card-footer-sections>
      <z-myz-card-info
        slot="info"
        data='{"author":"Nicola Zingarelli","year":"2021","title":"Vocabolario della lingua italiana","description":"A cura di Mario Cannella, Beata Lazzarini","onlineLicense":{"expiration":"31/12/2021","installations":"1"},"offlineLicense":{"expiration":"30/06/2021","installations":"2"}}'
      >
        <z-button
          variant="tertiary"
          icon="gear"
          >Gestisci Licenze</z-button
        >
      </z-myz-card-info>
    </z-myz-card-dictionary>
  `,

  args: {
    hideinfobtn: true,
  },
};
