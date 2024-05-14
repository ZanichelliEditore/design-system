import {html} from "lit";
import {styleMap} from "lit/directives/style-map.js";
import {PopoverPosition} from "../../beans";
import {getColorVars, getColorVarsLabels} from "../../utils/storybook-utils";
import "./index.stories.css";

export default {
  title: "ZPopover",
  component: "z-popover",

  argTypes: {
    "position": {
      options: Object.values(PopoverPosition),

      control: {
        type: "select",
      },
    },

    "--z-popover-theme--surface": {
      options: getColorVars(),

      control: {
        type: "select",
        labels: getColorVarsLabels(),
      },
    },

    "--z-popover-theme--text": {
      options: getColorVars(),

      control: {
        type: "select",
        labels: getColorVarsLabels(),
      },
    },
  },

  args: {
    "--z-popover-theme--surface": "var(--color-surface01)",
    "--z-popover-theme--text": "var(--color-text01)",
  },
};

export const ContextualMenuLike = {
  render: (args) => html`
    <div class="popover-container">
      <z-popover
        style=${styleMap({
          "--z-popover-theme--surface": args["--z-popover-theme--surface"],
          "--z-popover-theme--text": args["--z-popover-theme--text"],
        })}
        .position=${args.position}
        bind-to="#trigger"
      >
        <div class="container">
          <z-button icon="gear">Impostazioni</z-button>
        </div>
      </z-popover>
      <z-icon
        id="trigger"
        name="plus-square-filled"
      ></z-icon>
    </div>
    <script>
      var iconTrigger = document.querySelector("#trigger");
      var popover = document.querySelector("z-popover");
      iconTrigger.addEventListener("click", () => {
        if (popover.open) {
          popover.open = false;
        } else {
          popover.open = true;
        }
      });
    </script>
  `,

  name: "contextual-menu-like",

  args: {
    position: PopoverPosition.RIGHT_BOTTOM,
  },
};

export const TooltipLike = {
  render: (args) => html`
    <div class="popover-container popover-container-tooltip">
      <z-popover
        style=${styleMap({
          "--z-popover-theme--surface": args["--z-popover-theme--surface"],
          "--z-popover-theme--text": args["--z-popover-theme--text"],
        })}
        .position=${args.position}
        center="true"
        show-arrow="true"
        bind-to="#trigger"
      >
        <div class="container">
          <z-button icon="gear"> Impostazioni </z-button>
        </div>
      </z-popover>
      <z-icon
        id="trigger"
        name="plus-square-filled"
      ></z-icon>
    </div>
    <script>
      document.querySelector("#trigger").addEventListener("click", () => {
        if (document.querySelector("z-popover").open) {
          document.querySelector("z-popover").open = false;
        } else {
          document.querySelector("z-popover").open = true;
        }
      });
    </script>
  `,

  name: "tooltip-like",

  args: {
    position: PopoverPosition.RIGHT,
  },
};
