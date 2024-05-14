import {html} from "lit";
import {type ZButtonSort} from ".";
import {Args, Meta, StoryObj} from "@storybook/web-components";

const StoryMeta = {
  title: "ZButtonSort",
  component: "z-button-sort",
  args: {
    label: "sort",
    counter: 3,
    desclabel: "label DESC",
    sortlabelasc: "1-9",
    sortlabeldesc: "9-1",
    isselected: true,
    sortasc: true,
  },
} satisfies Meta<ZButtonSort>;

export default StoryMeta;

type Story = StoryObj<ZButtonSort>;

export const Default = {
  render: (args: Args) =>
    html`<z-button-sort
      label="${args.label}"
      counter="${args.counter}"
      desclabel="${args.desclabel}"
      sortlabelasc="${args.sortlabelasc}"
      sortlabeldesc="${args.sortlabeldesc}"
      isselected="${args.isselected}"
      sortasc="${args.sortasc}"
    ></z-button-sort>`,
} satisfies Story;

export const Ellipsis = {
  args: {
    label: "Testo molto lungo lungo lungo lunghissimo lunghissimo lunghissimo ancora di più",
  },
  render: Default.render,
} satisfies Story;
