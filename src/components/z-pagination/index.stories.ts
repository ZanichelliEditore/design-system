import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {type ZPagination} from ".";
import "./index";

const StoryMeta: Meta<ZPagination> = {
  title: "ZPagination",
  component: "z-pagination",
  argTypes: {
    totalPages: {
      control: {
        type: "number",
        min: 1,
      },
    },
    visiblePages: {
      control: {
        type: "number",
        min: 1,
      },
      if: {
        arg: "split",
        truthy: false,
      },
    },
    skip: {
      control: {
        type: "number",
        min: 1,
      },
    },
    edges: {
      if: {
        arg: "split",
        truthy: false,
      },
    },
    split: {
      control: {
        type: "number",
        min: 1,
      },
    },
  },
  args: {
    label: "",
    navArrows: true,
    totalPages: 201,
    visiblePages: 5,
    goToPage: false,
    split: undefined,
    skip: 0,
    edges: false,
  },
  render: (args) => html`
    <z-pagination
      .label=${args.label}
      .navArrows=${args.navArrows}
      .totalPages=${args.totalPages}
      .visiblePages=${args.visiblePages}
      .skip=${args.skip}
      .goToPage=${args.goToPage}
      .edges=${args.edges}
    ></z-pagination>
  `,
} satisfies Meta<ZPagination>;

export default StoryMeta;

type Story = StoryObj<ZPagination>;

export const VisiblePages = {
  parameters: {
    controls: {
      exclude: ["split"],
    },
  },
} satisfies Story;

/**
 * > Note that enabling `split` will shut off `visiblePages` and `edges`.
 */
export const Split = {
  args: {
    split: 1,
  },
  parameters: {
    controls: {
      exclude: ["edges", "visiblePages"],
    },
  },
} satisfies Story;

export const Edges = {
  args: {
    edges: true,
  },
  parameters: {
    controls: {
      exclude: ["split"],
    },
  },
} satisfies Story;

export const Skip = {
  args: {
    skip: 10,
  },
} satisfies Story;
