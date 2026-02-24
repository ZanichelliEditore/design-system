import type {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {type ZToolbar} from ".";
import {CSSVarsArguments} from "../../utils/storybook-utils";
import "../z-button/index";
import "../z-divider/index";
import "../z-tool/index";
import "./index";
import "./index.stories.css";

type ZToolbarStoriesArgs = ZToolbar & CSSVarsArguments<"--z-toolbar-columns">;

/**
 * This component mainly serves as a container for `z-tool` elements, but can also be nested inside a `z-tool` to create submenus.
 * ### Active state
 * The `active` state of each `z-tool` must be managed manually by the consumer. The component does not toggle `active` on click by itself. In these stories, a click listener (decorator) is applied to toggle `active` on tools without a submenu, for demonstration purposes.
 * ### Visual grouping with `z-divider`
 * Use `<z-divider orientation="vertical">` between tools to visually separate them into groups. On tablet viewports and below, dividers are automatically hidden.
 * ### Mobile multiline layout with `--z-toolbar-columns`
 * Set the CSS custom property `--z-toolbar-columns` on a parent element to control the number of columns in the toolbar grid. When set, the toolbar switches to a grid layout on tablet viewports and below (max-width: 1151px), wrapping tools across multiple rows with a separator line between rows.
 */
const StoryMeta = {
  title: "ZToolbar",
  component: "z-toolbar",
  args: {
    htmlAriaLabel: "Toolbar principale",
  },
  decorators: [
    (story) =>
      html`<div
        class="toolbar-container"
        @click=${(e: Event) => {
          const tool = (e.target as HTMLElement).closest("z-tool") as HTMLZToolElement | null;
          if (tool && !tool.disabled && !tool.querySelector("z-toolbar")) {
            tool.active = !tool.active;
          }
        }}
      >
        ${story()}
      </div>`,
  ],
} satisfies Meta<ZToolbarStoriesArgs>;

export default StoryMeta;

type Story = StoryObj<ZToolbarStoriesArgs>;

export const Default = {
  render: (args) => html`
    <z-toolbar html-aria-label=${args.htmlAriaLabel}>
      <z-tool
        icon="gear"
        tooltip="Impostazioni"
      ></z-tool>
      <z-tool
        icon="download"
        tooltip="Scarica"
      ></z-tool>
      <z-tool
        icon="upload"
        tooltip="Carica"
      ></z-tool>
    </z-toolbar>
  `,
} satisfies Story;

export const WithDividers = {
  render: (args) => html`
    <z-toolbar html-aria-label=${args.htmlAriaLabel}>
      <z-tool
        icon="gear"
        tooltip="Impostazioni"
      ></z-tool>
      <z-tool
        icon="chevron-up"
        tooltip="Su"
      ></z-tool>
      <z-tool
        icon="chevron-down"
        tooltip="Giù"
      ></z-tool>
      <z-divider orientation="vertical"></z-divider>
      <z-tool
        icon="download"
        tooltip="Scarica"
      ></z-tool>
      <z-tool
        icon="upload"
        tooltip="Carica"
      ></z-tool>
      <z-tool
        icon="copy"
        tooltip="Copia"
      ></z-tool>
    </z-toolbar>
  `,
} satisfies Story;

export const WithNestedToolbar = {
  render: (args) => html`
    <z-toolbar html-aria-label=${args.htmlAriaLabel}>
      <z-tool
        icon="gear"
        tooltip="Impostazioni"
      >
        <z-toolbar html-aria-label="Sotto-toolbar">
          <z-tool
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
          <z-tool
            icon="chevron-down"
            tooltip="Giù"
          ></z-tool>
          <z-divider orientation="vertical"></z-divider>
          <z-tool
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
        </z-toolbar>
      </z-tool>
      <z-tool
        icon="chevron-up"
        tooltip="Su"
      ></z-tool>
      <z-tool
        icon="chevron-up"
        tooltip="Su"
      ></z-tool>
      <z-divider orientation="vertical"></z-divider>
      <z-tool
        icon="download"
        tooltip="Scarica"
      ></z-tool>
      <z-tool
        icon="gear"
        tooltip="Impostazioni"
      >
        <z-toolbar html-aria-label="Sotto-toolbar">
          <z-tool
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
          <z-tool
            icon="chevron-down"
            tooltip="Giù"
          ></z-tool>
          <z-divider orientation="vertical"></z-divider>
          <z-tool
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
        </z-toolbar>
      </z-tool>
      <z-tool
        icon="gear"
        tooltip="Impostazioni"
      >
        <z-toolbar html-aria-label="Sotto-toolbar">
          <z-tool
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
          <z-tool
            icon="chevron-down"
            tooltip="Giù"
          ></z-tool>
          <z-divider orientation="vertical"></z-divider>
          <z-tool
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
        </z-toolbar>
      </z-tool>
      <z-tool
        icon="upload"
        tooltip="Carica"
      ></z-tool>
    </z-toolbar>
  `,
} satisfies Story;

export const WithDisabledTool = {
  render: (args) => html`
    <z-toolbar html-aria-label=${args.htmlAriaLabel}>
      <z-tool
        icon="gear"
        tooltip="Impostazioni"
      ></z-tool>
      <z-tool
        icon="download"
        tooltip="Scarica"
        disabled
      ></z-tool>
      <z-tool
        icon="upload"
        tooltip="Carica"
      ></z-tool>
    </z-toolbar>
  `,
} satisfies Story;

export const WithActiveTool = {
  render: (args) => html`
    <z-toolbar html-aria-label=${args.htmlAriaLabel}>
      <z-tool
        icon="gear"
        tooltip="Impostazioni"
        active
      ></z-tool>
      <z-tool
        icon="download"
        tooltip="Scarica"
      ></z-tool>
      <z-tool
        icon="upload"
        tooltip="Carica"
      ></z-tool>
    </z-toolbar>
  `,
} satisfies Story;

export const MultilineMobile = {
  args: {
    "--z-toolbar-columns": "4",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile",
    },
  },
  render: (args) => html`
    <z-toolbar
      class="multiline-container"
      html-aria-label=${args.htmlAriaLabel}
      style="--z-toolbar-columns: ${args["--z-toolbar-columns"]};"
    >
      <z-tool
        icon="gear"
        tooltip="Impostazioni"
      ></z-tool>
      <z-tool
        icon="download"
        tooltip="Scarica"
      ></z-tool>
      <z-divider orientation="vertical"></z-divider>
      <z-tool
        icon="upload"
        tooltip="Carica"
      ></z-tool>
      <z-tool
        icon="plus"
        tooltip="Aggiungi"
      >
        <z-toolbar html-aria-label="Sotto-toolbar aggiungi">
          <z-tool
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
          <z-tool
            icon="chevron-down"
            tooltip="Giù"
          ></z-tool>
          <z-tool
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
          <z-tool
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
          <z-tool
            icon="chevron-down"
            tooltip="Giù"
          ></z-tool>
        </z-toolbar>
      </z-tool>
      <z-divider orientation="vertical"></z-divider>
      <z-tool
        icon="gear"
        tooltip="Impostazioni 2"
      ></z-tool>
      <z-tool
        icon="download"
        tooltip="Scarica 2"
      ></z-tool>
      <z-tool
        icon="upload"
        tooltip="Carica 2"
      ></z-tool>
      <z-tool
        icon="copy"
        tooltip="Copia 2"
      ></z-tool>
      <z-tool
        icon="gear"
        tooltip="Impostazioni 3"
        disabled
      ></z-tool>
      <z-tool
        icon="upload"
        tooltip="Carica 3"
      ></z-tool>
    </z-toolbar>
  `,
} satisfies Story;
