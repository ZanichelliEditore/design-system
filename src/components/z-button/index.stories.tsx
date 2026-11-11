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
const visualStates = ["default", "hover", "focus", "pressed", "disabled"] as const;

export const VariantsAndStates = {
  parameters: {
    controls: {disable: true},
    pseudo: {
      hover: '[data-state="hover"] button',
      focus: '[data-state="focus"] button',
      focusVisible: '[data-state="focus"] button',
      active: '[data-state="pressed"] button',
    },
  },
  render: () => (
    <table class="z-button-matrix">
      <thead>
        <tr>
          <th scope="col">Variant / Size</th>
          {visualStates.map((state) => (
            <th scope="col">{state}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {variants.flatMap((variant) =>
          sizes.map((size) => (
            <tr>
              <th scope="row">
                {variant} / {size}
              </th>
              {visualStates.map((state) => (
                <td data-state={state}>
                  <z-button
                    variant={variant}
                    size={size}
                    disabled={state === "disabled"}
                  >
                    Button
                  </z-button>
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  ),
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
