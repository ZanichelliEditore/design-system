import {h} from "@stencil/core";

export default {
  title: "CSS Components/ZLabel",
  parameters: {
    a11y: {
      disable: true,
    },
    controls: {
      disable: true,
    },
  },
};

export const Default = {
  render: () => <label class="z-label">Etichetta</label>,
};
