import type {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {type ZToolbar} from ".";
import "../z-divider/index";
import "../z-tool/index";
import "./index";

const StoryMeta = {
  title: "ZToolbar",
  component: "z-toolbar",
  parameters: {
    docs: {
      description: {
        component: [
          "The `z-toolbar` component implements the WCAG toolbar pattern with roving tabindex keyboard navigation.",
          "",
          "### Active state",
          "The `active` state of each `z-tool` must be managed manually by the consumer. The component does not toggle `active` on click by itself. In these stories, a click listener (decorator) is applied to toggle `active` on tools without a submenu, for demonstration purposes.",
          "",
          "### Visual grouping with `z-divider`",
          "Use `<z-divider orientation=\"vertical\">` between tools to visually separate them into groups. On tablet viewports and below, dividers are automatically hidden.",
          "",
          "### Multiline layout with `--z-toolbar-columns`",
          "Set the CSS custom property `--z-toolbar-columns` on a parent element to control the number of columns in the toolbar grid. When set, the toolbar switches to a grid layout on tablet viewports and below (max-width: 1151px), wrapping tools across multiple rows with a separator line between rows.",
        ].join("\n"),
      },
    },
  },
  args: {
    htmlAriaLabel: "Toolbar principale",
  },
  decorators: [
    (story) =>
      html`<div
        style="display: flex; justify-content: center; align-items: center; min-height: 100px;"
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
} satisfies Meta<ZToolbar>;

export default StoryMeta;

type Story = StoryObj<ZToolbar>;

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
    <div style="display: flex; justify-content: center; align-items: flex-start; min-height: 200px; padding-top: 20px;">
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
    </div>
  `,
} satisfies Story;

export const ProgrammaticSubmenuClosure = {
  render: (args) => html`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; min-height: 200px; padding-top: 20px;">
      <z-toolbar id="toolbar-close-demo" html-aria-label=${args.htmlAriaLabel}>
        <z-tool icon="gear" tooltip="Impostazioni">
          <z-toolbar html-aria-label="Sotto-toolbar">
            <z-tool icon="chevron-up" tooltip="Su"></z-tool>
            <z-tool icon="chevron-down" tooltip="Giù"></z-tool>
          </z-toolbar>
        </z-tool>
        <z-tool icon="download" tooltip="Scarica"></z-tool>
        <z-tool icon="upload" tooltip="Carica"></z-tool>
        <z-divider orientation="vertical"></z-divider>
        <z-tool icon="copy" tooltip="Copia">
          <z-toolbar html-aria-label="Sotto-toolbar">
            <z-tool icon="chevron-up" tooltip="Su"></z-tool>
            <z-tool icon="chevron-down" tooltip="Giù"></z-tool>
          </z-toolbar>
        </z-tool>
        <z-tool icon="gear" tooltip="Impostazioni 2"></z-tool>
        <z-tool icon="download" tooltip="Scarica 2"></z-tool>
      </z-toolbar>
      <button
        type="button"
        onclick="this.parentElement.querySelector('z-toolbar').closeSubmenus()"
      >
        call closeSubmenus()
      </button>
    </div>
  `,
} satisfies Story;

export const ProgrammaticActivation = {
  render: (args) => html`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; min-height: 200px; padding-top: 20px;">
      <z-toolbar html-aria-label=${args.htmlAriaLabel}>
        <z-tool icon="gear" tooltip="Impostazioni">
          <z-toolbar html-aria-label="Sotto-toolbar">
            <z-tool icon="chevron-up" tooltip="Su"></z-tool>
            <z-tool icon="chevron-down" tooltip="Giù"></z-tool>
          </z-toolbar>
        </z-tool>
        <z-tool icon="download" tooltip="Scarica"></z-tool>
        <z-tool icon="upload" tooltip="Carica"></z-tool>
        <z-divider orientation="vertical"></z-divider>
        <z-tool icon="copy" tooltip="Copia"></z-tool>
        <z-tool icon="gear" tooltip="Impostazioni 2"></z-tool>
        <z-tool icon="download" tooltip="Scarica 2"></z-tool>
      </z-toolbar>
      <div style="display: flex; gap: 8px; margin-top:50px;">
        <button
          type="button"
          onclick="var toolbar = this.parentElement.previousElementSibling; var tools = toolbar.querySelectorAll(':scope > z-tool'); tools[0].open = !tools[0].open;"
        >
          toggle 1st tool (submenu)
        </button>
        <button
          type="button"
          onclick="var toolbar = this.parentElement.previousElementSibling; var tools = toolbar.querySelectorAll(':scope > z-tool'); tools[3].active = !tools[3].active;"
        >
          toggle 4th tool
        </button>
      </div>
    </div>
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
  parameters: {
    viewport: {
      defaultViewport: "mobile",
    },
  },
  render: (args) => html`
    <style>
      .multiline-container {
        --z-toolbar-columns: 4;
      }
      .inner-different-columns {
        --z-toolbar-columns: 2;
      }
    </style>
    <div
      style="display: flex; justify-content: center; align-items: flex-start; min-height: 300px; padding-top: 150px;"
    >
      <z-toolbar class="multiline-container" html-aria-label=${args.htmlAriaLabel}>
        <z-tool icon="gear" tooltip="Impostazioni"></z-tool>
        <z-tool icon="download" tooltip="Scarica"></z-tool>
        <z-divider orientation="vertical"></z-divider>
        <z-tool icon="upload" tooltip="Carica"></z-tool>
        <z-tool icon="copy" tooltip="Copia">
          <z-toolbar class="inner-different-columns" html-aria-label="Sotto-toolbar copia">
            <z-tool icon="chevron-up" tooltip="Su"></z-tool>
            <z-tool icon="chevron-down" tooltip="Giù"></z-tool>
            <z-tool icon="chevron-up" tooltip="Su"></z-tool>
            <z-tool icon="chevron-up" tooltip="Su"></z-tool>
            <z-tool icon="chevron-down" tooltip="Giù"></z-tool>
          </z-toolbar>
        </z-tool>
        <z-divider orientation="vertical"></z-divider>
        <z-tool icon="gear" tooltip="Impostazioni 2"></z-tool>
        <z-tool icon="download" tooltip="Scarica 2"></z-tool>
        <z-tool icon="upload" tooltip="Carica 2"></z-tool>
        <z-tool icon="copy" tooltip="Copia 2"></z-tool>
        <z-tool icon="gear" tooltip="Impostazioni 3" disabled></z-tool>
        <z-tool icon="upload" tooltip="Carica 3"></z-tool>
      </z-toolbar>
    </div>
  `,
} satisfies Story;
