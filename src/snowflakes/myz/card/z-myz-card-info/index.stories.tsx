import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {SfButtonVariant} from "../../../../beans";
import {ZMyzCardInfo} from "./index";

const StoryMeta = {
  title: "Snowflakes/MyzCard/ZMyzCardInfo",
  component: ZMyzCardInfo,
} satisfies Meta<ZMyzCardInfo>;

export default StoryMeta;

export const Default = {
  render: () => (
    <z-myz-card-info data='{"author":"Nicola Zingarelli","year":"2021","title":"Vocabolario della lingua italiana","description":"A cura di Mario Cannella, Beata Lazzarini","onlineLicense":{"expiration":"31/12/2021","installations":"1","expired":true},"offlineLicense":{"expiration":"30/06/2021","installations":"2","expired":false}}'>
      <z-sf-button variant={SfButtonVariant.SECONDARY}>CTA</z-sf-button>
    </z-myz-card-info>
  ),
} satisfies StoryObj<ZMyzCardInfo>;
