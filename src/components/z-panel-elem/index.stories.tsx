import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ZPanelElem} from "./index";

const StoryMeta = {
  title: "ZPanelElem",
  component: ZPanelElem,
  args: {
    imgurl: "https://staticdemomy.zanichelli.it/download/biblioteca.png",
    linkicon: "arrow-quad-down",
    linklabel: "Biblioteca",
    url: "https://biblioteca.scuola.zanichelli.it/",
    elemid: "elem_id",
    isdisabled: false,
  },
} satisfies Meta<ZPanelElem>;
export default StoryMeta;

export const Default = {
  render: (args) => (
    <z-panel-elem
      imgurl={args.imgurl}
      linkicon={args.linkicon}
      linklabel={args.linklabel}
      url={args.url}
      elemid={args.elemid}
      isdisabled={args.isdisabled}
    ></z-panel-elem>
  ),
} satisfies StoryObj<ZPanelElem>;
