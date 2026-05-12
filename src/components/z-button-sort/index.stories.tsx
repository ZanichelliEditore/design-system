import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ZButtonSort} from "./index";

const StoryMeta = {
  title: "ZButtonSort",
  component: ZButtonSort,
  args: {
    label: "sort",
    counter: 3,
    desclabel: "label DESC",
    sortlabelasc: "1-9",
    sortlabeldesc: "9-1",
    isselected: true,
    sortasc: true,
  },
  render: (args) => <z-button-sort {...args}></z-button-sort>,
} satisfies Meta<ZButtonSort>;

export default StoryMeta;

type Story = StoryObj<ZButtonSort>;

export const Default = {} satisfies Story;

export const Ellipsis = {
  args: {
    label: "Testo molto lungo lungo lungo lunghissimo lunghissimo lunghissimo ancora di più",
  },
} satisfies Story;
