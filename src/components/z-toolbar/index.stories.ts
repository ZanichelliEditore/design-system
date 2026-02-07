import type {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {type ZToolbar} from ".";
import "../z-tool/index";
import "./index";

const StoryMeta = {
  title: "ZToolbar",
  component: "z-toolbar",
  args: {
    htmlAriaLabel: "Toolbar principale",
  },
  decorators: [
    (story) =>
      html`<div style="display: flex; justify-content: center; align-items: center; min-height: 100px;">
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

export const WithGroups = {
  render: (args) => html`
    <z-toolbar html-aria-label=${args.htmlAriaLabel}>
      <div class="z-toolbar-group">
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
      </div>
      <div class="z-toolbar-group">
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
      </div>
    </z-toolbar>
  `,
} satisfies Story;

export const WithNestedToolbar = {
  render: (args) => html`
    <div style="display: flex; justify-content: center; align-items: flex-start; min-height: 200px; padding-top: 20px;">
      <z-toolbar html-aria-label=${args.htmlAriaLabel}>
        <div class="z-toolbar-group">
          <z-tool
            icon="gear"
            tooltip="Impostazioni"
          >
            <z-toolbar html-aria-label="Sotto-toolbar">
              <div class="z-toolbar-group">
                <z-tool
                  icon="chevron-up"
                  tooltip="Su"
                ></z-tool>
                <z-tool
                  icon="chevron-down"
                  tooltip="Giù"
                ></z-tool>
              </div>
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
        </div>
        <div class="z-toolbar-group">
          <z-tool
            icon="download"
            tooltip="Scarica"
          ></z-tool>
          <z-tool
            icon="upload"
            tooltip="Carica"
          ></z-tool>
        </div>
      </z-toolbar>
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
