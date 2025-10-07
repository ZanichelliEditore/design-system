import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {styleMap} from "lit/directives/style-map.js";
import {ZPopover} from ".";
import {PopoverPosition} from "../../beans";
import {CSSVarsArguments, getColorTokenArgConfig} from "../../utils/storybook-utils";
import "../list/z-list-element/index";
import "../list/z-list/index";
import "../z-button/index";
import "./index";
import "./index.stories.css";

type ZPopoverStoriesArgs = ZPopover &
  CSSVarsArguments<
    "--z-popover-theme--surface" | "--z-popover-theme--text" | "--z-popover-padding" | "--z-popover-shadow-filter"
  >;

const onTriggerClick = (event: MouseEvent): void => {
  const popover = (event.target as HTMLElement).closest(".popover-container")?.querySelector("z-popover");
  if (!popover) {
    return;
  }

  if (popover?.open) {
    popover.open = false;
  } else {
    popover.open = true;
  }
};

/**
 * Simple drag and drop utility.
 * @param element The element to make draggable.
 */
const makeDraggable = (element: HTMLElement): void => {
  if (element.draggable) {
    return;
  }

  let offsetX = 0;
  let offsetY = 0;
  let dragging = false;
  let clickPosition = {x: 0, y: 0};

  element.style.position = "absolute";
  element.draggable = true;

  element.addEventListener("mousedown", (event) => {
    event.preventDefault();
    event.stopPropagation();
    dragging = true;
    offsetX = element.offsetLeft - event.clientX;
    offsetY = element.offsetTop - event.clientY;
    clickPosition = {x: event.clientX, y: event.clientY};
  });

  document.addEventListener("mouseup", (event) => {
    event.preventDefault();
    event.stopPropagation();
    dragging = false;

    if (clickPosition.x !== event.clientX || clickPosition.y !== event.clientY) {
      return;
    }

    setTimeout(() => {
      onTriggerClick({...event, target: element});
    }, 0);
  });

  document.addEventListener("mousemove", (event) => {
    if (dragging) {
      const container = element.parentElement;
      const left = Math.max(Math.min(event.clientX + offsetX, container.clientWidth - element.offsetWidth), 0);
      const top = Math.max(Math.min(event.clientY + offsetY, container.clientHeight - element.offsetHeight), 0);
      element.style.left = `${left}px`;
      element.style.top = `${top}px`;
    }
  });
};

const StoryMeta = {
  title: "ZPopover",
  component: "z-popover",
  argTypes: {
    "position": {
      options: [null, ...Object.values(PopoverPosition).filter((value) => value !== PopoverPosition.AUTO)],
      control: {
        type: "select",
        labels: {
          null: "-",
        },
      },
    },
    "--z-popover-theme--surface": getColorTokenArgConfig(),
    "--z-popover-theme--text": getColorTokenArgConfig(),
  },
  args: {
    "position": null,
    "--z-popover-theme--surface": "var(--color-surface01)",
    "--z-popover-theme--text": "var(--color-default-text)",
    "--z-popover-padding": "0",
  },
  parameters: {
    onTriggerClick,
    docs: {
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
} satisfies Meta<ZPopoverStoriesArgs>;

export default StoryMeta;

type Story = StoryObj<ZPopoverStoriesArgs>;

export const Demo = {
  args: {
    "--z-popover-padding": "var(--space-unit)",
    "--z-popover-shadow-filter": "drop-shadow(0 1px 2px var(--shadow-color-base))",
    "center": false,
    "showArrow": false,
    "closable": true,
  },
  render: (args) => {
    document.addEventListener("DOMContentLoaded", () => {
      const trigger = document.querySelector("#demo-trigger");
      if (trigger) {
        makeDraggable(trigger as HTMLElement);
      }
    });

    return html`
      <div class="popover-container">
        <z-popover
          style=${styleMap({
            "--z-popover-theme--surface": args["--z-popover-theme--surface"],
            "--z-popover-theme--text": args["--z-popover-theme--text"],
            "--z-popover-padding": args["--z-popover-padding"],
          })}
          .position=${args.position}
          .center=${args.center}
          .showArrow=${args.showArrow}
          bind-to="#demo-trigger"
        >
          <div class="popover-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </div>
        </z-popover>
        <z-button
          id="demo-trigger"
          icon="plus-filled"
        ></z-button>
      </div>
      <p class="heading-2">You can move the button to see the positioning adaptation while the popover is open.</p>
    `;
  },
} satisfies Story;

export const ContextualMenuLike = {
  args: {
    "--z-popover-theme--surface": "var(--color-surface01)",
    "--z-popover-padding": "var(--space-unit)",
    "position": PopoverPosition.RIGHT_BOTTOM,
  },
  render: (args, {parameters}) => html`
    <div class="popover-container">
      <z-popover
        style=${styleMap({
          "--z-popover-theme--surface": args["--z-popover-theme--surface"],
          "--z-popover-theme--text": args["--z-popover-theme--text"],
          "--z-popover-padding": args["--z-popover-padding"],
        })}
        .position=${args.position}
        bind-to="#trigger"
      >
        <z-list>
          <z-list-element divider-type="element">Elemento 1</z-list-element>
          <z-list-element divider-type="element">Elemento 2</z-list-element>
          <z-list-element>Elemento 3</z-list-element>
        </z-list>
      </z-popover>
      <z-button
        id="trigger"
        icon="plus-filled"
        .onclick=${parameters.onTriggerClick}
      ></z-button>
    </div>
  `,
} satisfies Story;

export const Tooltip = {
  args: {
    "position": PopoverPosition.RIGHT,
    "--z-popover-padding": "var(--space-unit)",
  },
  render: (args, {parameters}) =>
    html` <div class="popover-container popover-container-tooltip">
      <z-popover
        style=${styleMap({
          "--z-popover-theme--surface": args["--z-popover-theme--surface"],
          "--z-popover-theme--text": args["--z-popover-theme--text"],
          "--z-popover-padding": args["--z-popover-padding"],
        })}
        .position=${args.position}
        center="true"
        show-arrow="true"
        bind-to="#trigger"
      >
        <div class="popover-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </div>
      </z-popover>
      <z-button
        id="trigger"
        icon="plus-filled"
        .onclick=${parameters.onTriggerClick}
      ></z-button>
    </div>`,
} satisfies Story;

export const TooltipWithNestedContainer = {
  args: {
    "position": PopoverPosition.TOP,
    "--z-popover-padding": "var(--space-unit)",
  },
  render: (args, {parameters}) =>
    html` <div class="popover-container popover-container-tooltip">
      <div class="popover-internal-container">
        <div class="popover-internal-container-2">
          <z-popover
            style=${styleMap({
              "--z-popover-theme--surface": args["--z-popover-theme--surface"],
              "--z-popover-theme--text": args["--z-popover-theme--text"],
              "--z-popover-padding": args["--z-popover-padding"],
            })}
            .position=${args.position}
            center="true"
            show-arrow="true"
            bind-to="#trigger"
          >
            <div class="popover-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </div>
          </z-popover>
          <z-button
            id="trigger"
            icon="plus-filled"
            .onclick=${parameters.onTriggerClick}
          ></z-button>
        </div>
      </div>
    </div>`,
} satisfies Story;
