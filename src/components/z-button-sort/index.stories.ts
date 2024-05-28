import type {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import "./index";
import type {ZButtonSort} from ".";

const StoryMeta = {
  title: "ZButtonSort",
  args: {
    label: "sort",
    counter: 3,
    desclabel: "label DESC",
    sortlabelasc: "1-9",
    sortlabeldesc: "9-1",
    isselected: true,
    sortasc: true,
  },
  render: (args) =>
    html`<z-button-sort
      label="${args.label}"
      counter="${args.counter}"
      desclabel="${args.desclabel}"
      sortlabelasc="${args.sortlabelasc}"
      sortlabeldesc="${args.sortlabeldesc}"
      isselected="${args.isselected}"
      sortasc="${args.sortasc}"
    ></z-button-sort>`,
} satisfies Meta<ZButtonSort>;

export default StoryMeta;

type Story = StoryObj<ZButtonSort>;

export const Default = {};

export const Ellipsis = {
  args: {
    label: "Testo molto lungo lungo lungo lunghissimo lunghissimo lunghissimo ancora di più",
  },
} satisfies Story;
