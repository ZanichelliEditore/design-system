import {html} from "lit";

export default {
  title: "ZPagination",
  component: "z-pagination",

  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },

    navArrows: {
      control: {
        type: "boolean",
      },
    },

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
      control: {
        type: "boolean",
      },

      if: {
        arg: "split",
        truthy: false,
      },
    },

    goToPage: {
      control: {
        type: "boolean",
      },
    },

    split: {
      control: {
        type: "number",
        min: 1,
      },
    },
  },
};

export const ZPaginationVisiblePages = {
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

  name: "ZPagination - visible pages",

  args: {
    label: "",
    navArrows: true,
    totalPages: 201,
    visiblePages: 5,
    goToPage: false,
    split: false,
    skip: false,
    edges: false,
  },

  parameters: {
    controls: {
      exclude: ["split"],
    },
  },
};

export const ZPaginationSplit = {
  render: (args) => html`
    <z-pagination
      .label=${args.label}
      .navArrows=${args.navArrows}
      .totalPages=${args.totalPages}
      .split=${args.split}
      .skip=${args.skip}
      .goToPage=${args.goToPage}
    ></z-pagination>
  `,

  name: "ZPagination - split",

  args: {
    label: "",
    navArrows: true,
    totalPages: 201,
    split: 1,
    skip: false,
    goToPage: false,
  },

  parameters: {
    controls: {
      exclude: ["edges", "visiblePages"],
    },
  },
};

export const ZPaginationEdges = {
  render: (args) => html`
    <z-pagination
      .label=${args.label}
      .navArrows=${args.navArrows}
      .totalPages=${args.totalPages}
      .visiblePages=${args.visiblePages}
      .edges=${args.edges}
      .skip=${args.skip}
      .goToPage=${args.goToPage}
    ></z-pagination>
  `,

  name: "ZPagination - edges",

  args: {
    label: "",
    navArrows: true,
    totalPages: 201,
    visiblePages: 5,
    edges: true,
    goToPage: false,
    skip: false,
    split: false,
  },

  parameters: {
    controls: {
      exclude: ["split"],
    },
  },
};

export const ZPaginationSkip = {
  render: (args) => html`
    <z-pagination
      .label=${args.label}
      .navArrows=${args.navArrows}
      .totalPages=${args.totalPages}
      .visiblePages=${args.visiblePages}
      .skip=${args.skip}
      .goToPage=${args.goToPage}
      .edges=${args.edges}
      .split=${args.split}
    ></z-pagination>
  `,

  name: "ZPagination - skip",

  args: {
    label: "",
    navArrows: true,
    totalPages: 201,
    visiblePages: 5,
    skip: 10,
    goToPage: false,
    edges: false,
    split: false,
  },
};
