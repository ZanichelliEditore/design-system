import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {styleMap} from "lit/directives/style-map.js";
import {type ZPopover} from ".";
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

const onTriggerClick = (): void => {
  const popover = document.querySelector("z-popover");
  if (popover.open) {
    popover.open = false;
  } else {
    popover.open = true;
  }
};

/**
 * Simple drag and drop utility for an HTMLElement.
 * @param element The element to make draggable.
 */
const makeDraggable = (element: HTMLElement, container: HTMLElement): void => {
  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;

  const onMouseDown = (event: MouseEvent): void => {
    isDragging = true;
    offsetX = event.clientX - element.getBoundingClientRect().left;
    offsetY = event.clientY - element.getBoundingClientRect().top;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    element.style.position = "absolute";
    element.style.zIndex = "1000";
  };

  const onMouseMove = (event: MouseEvent): void => {
    if (!isDragging) {
      return;
    }

    const safeTop = Math.max(event.clientY - offsetY, 0);
    const safeY = Math.min(safeTop, container.clientHeight - element.clientHeight);
    const safeLeft = Math.max(event.clientX - offsetX, 0);
    const safeX = Math.min(safeLeft, container.clientWidth - element.clientWidth);

    element.style.left = `${safeX}px`;
    element.style.top = `${safeY}px`;
  };

  const onMouseUp = (): void => {
    isDragging = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  element.addEventListener("mousedown", onMouseDown);
};

/**
 * To ensure the positioning algorithm finds the right container when calculating the position, set its container's `position` to `relative`.
 */
const StoryMeta = {
  title: "ZPopover",
  component: "z-popover",
  argTypes: {
    "position": {
      options: Object.values(PopoverPosition).filter((value) => value !== PopoverPosition.AUTO),
      control: {
        type: "select",
      },
    },
    "--z-popover-theme--surface": getColorTokenArgConfig(),
    "--z-popover-theme--text": getColorTokenArgConfig(),
  },
  args: {
    "--z-popover-theme--surface": "var(--color-surface01)",
    "--z-popover-theme--text": "var(--color-default-text)",
    "--z-popover-padding": "0",
  },
  parameters: {
    onTriggerClick,
  },
} satisfies Meta<ZPopoverStoriesArgs>;

export default StoryMeta;

type Story = StoryObj<ZPopoverStoriesArgs>;

export const Demo = {
  args: {
    "position": PopoverPosition.RIGHT,
    "--z-popover-padding": "var(--space-unit)",
    "--z-popover-shadow-filter": "drop-shadow(0 1px 2px var(--shadow-color-base))",
    "center": false,
    "showArrow": false,
  },
  render: (args, {parameters}) => {
    document.addEventListener("DOMContentLoaded", () => {
      const trigger = document.querySelector("#trigger");
      const container = document.querySelector(".popover-container");
      if (trigger && container) {
        makeDraggable(trigger as HTMLElement, container as HTMLElement);
      }
    });

    return html`
      <div class="popover-container popover-container-tooltip">
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

export const TooltipLike = {
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
