import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {expect, waitFor} from "storybook/test";
import {ButtonType, ButtonVariant, ControlSize, IconPosition} from "../../beans";
import type {ZButton} from "./index";
import "./index.stories.css";

const StoryMeta = {
  title: "ZButton",
  component: "z-button",
  argTypes: {
    variant: {
      options: Object.values(ButtonVariant),
      control: {type: "inline-radio"},
    },
    size: {
      options: Object.values(ControlSize),
      control: {type: "inline-radio"},
    },
    iconPosition: {
      options: Object.values(IconPosition),
      control: {type: "inline-radio"},
    },
    type: {
      options: Object.values(ButtonType).sort(),
      control: {type: "inline-radio"},
    },
  },
  args: {
    variant: ButtonVariant.PRIMARY,
    size: ControlSize.BIG,
    disabled: false,
    icon: "download",
    iconPosition: IconPosition.LEFT,
    htmlAriaLabel: "Clicca sul bottone",
    htmlRole: "button",
    type: ButtonType.BUTTON,
  },
  render: (args) => <z-button {...args}>Click me</z-button>,
} satisfies Meta<ZButton>;

export default StoryMeta;

type Story = StoryObj<ZButton>;

export const Default = {};

const variants = Object.values(ButtonVariant);
const sizes = Object.values(ControlSize);

function renderVariantAndSizeMatrix(disabled = false) {
  return (
    <table class="z-button-matrix">
      <thead>
        <tr>
          <th scope="col">Variant / Size</th>
          {sizes.map((size) => (
            <th scope="col">{size}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {variants.map((variant) => (
          <tr>
            <th scope="row">{variant}</th>
            {sizes.map((size) => (
              <td>
                <z-button
                  variant={variant}
                  size={size}
                  disabled={disabled}
                >
                  Button
                </z-button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export const VariantAndSize = {
  parameters: {controls: {disable: true}},
  render: () => renderVariantAndSizeMatrix(),
  play: async ({canvasElement}) => {
    for (const variant of variants) {
      for (const size of sizes) {
        await waitFor(async () => {
          const button = canvasElement.querySelector(`z-button[variant="${variant}"][size="${size}"] button`);
          await expect(button).toBeInTheDocument();
        });
      }
    }
  },
} satisfies Story;

export const Hover = {
  ...VariantAndSize,
  parameters: {...VariantAndSize.parameters, pseudo: {hover: true}},
} satisfies Story;

export const Focus = {
  ...VariantAndSize,
  parameters: {...VariantAndSize.parameters, pseudo: {focus: true, focusVisible: true}},
} satisfies Story;

export const Pressed = {
  ...VariantAndSize,
  parameters: {...VariantAndSize.parameters, pseudo: {active: true}},
} satisfies Story;

export const Disabled = {
  ...VariantAndSize,
  render: () => renderVariantAndSizeMatrix(true),
  play: async (context) => {
    await VariantAndSize.play(context);
    for (const button of Array.from(context.canvasElement.querySelectorAll("z-button button"))) {
      await expect(button).toBeDisabled();
    }
  },
} satisfies Story;

const contentTypes = ["text", "icon-left", "icon-right", "icon-only", "link"] as const;

export const ContentTypes = {
  parameters: {
    controls: {disable: true},
  },
  render: () => (
    <table class="z-button-matrix">
      <thead>
        <tr>
          {contentTypes.map((content) => (
            <th>{content}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <z-button>Button</z-button>
          </td>
          <td>
            <z-button icon="download">Button</z-button>
          </td>
          <td>
            <z-button
              icon="arrow-right"
              iconPosition={IconPosition.RIGHT}
            >
              Button
            </z-button>
          </td>
          <td>
            <z-button
              icon="download"
              htmlAriaLabel="Download"
            />
          </td>
          <td>
            <z-button
              icon="arrow-quad-north-east"
              href="https://wikipedia.com"
            >
              Link
            </z-button>
          </td>
        </tr>
      </tbody>
    </table>
  ),
  play: async ({canvas}) => {
    await waitFor(async () => {
      await expect(canvas.getAllByRole("button", {name: "Button"})).toHaveLength(3);
    });
    await canvas.findByRole("button", {name: "Download"});
    await canvas.findByRole("link", {name: "Link"});
  },
} satisfies Story;
