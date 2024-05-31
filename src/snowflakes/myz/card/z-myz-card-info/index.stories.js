import {html} from "lit";
import "../../../../components/z-button/index";
import "./index";

export default {
  title: "Snowflakes/MyzCard/ZMyzCardInfo",
  component: "z-myz-card-info",
};

export const ZMyzCardInfo = {
  render: () => html`
    <z-myz-card-info
      data='{"author":"Nicola Zingarelli","year":"2021","title":"Vocabolario della lingua italiana","description":"A cura di Mario Cannella, Beata Lazzarini","onlineLicense":{"expiration":"31/12/2021","installations":"1","expired":true},"offlineLicense":{"expiration":"30/06/2021","installations":"2","expired":false}}'
    >
      <z-button variant="secondary">CTA</z-button>
    </z-myz-card-info>
  `,
};
