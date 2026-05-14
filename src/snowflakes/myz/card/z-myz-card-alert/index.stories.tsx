import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ZMyzCardAlert} from "./index";

const StoryMeta = {
  title: "Snowflakes/MyzCard/ZMyzCardAlert",
  component: ZMyzCardAlert,

  args: {
    actiontext: "Annulla",
    contenttext: "Libro aggiunto ai miei libri preferiti",
    iconname: "checkmark-circle",
    type: "add",
  },
} satisfies Meta<ZMyzCardAlert>;

export default StoryMeta;

export const Default = {
  render: (args) => (
    <z-myz-card-alert
      actiontext={args.actiontext}
      contenttext={args.contenttext}
      iconname={args.iconname}
      type={args.type}
    ></z-myz-card-alert>
  ),
} satisfies StoryObj<ZMyzCardAlert>;
