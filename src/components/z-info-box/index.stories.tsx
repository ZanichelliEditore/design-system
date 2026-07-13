import {h} from "@stencil/core";
import type {Meta} from "@stencil/storybook-plugin";
import {ButtonVariant} from "../../beans";
import {CSSVarsArguments, extractCSSVars, getColorTokenArgConfig} from "../../utils/storybook-utils.js";
import {ZInfoBox} from "./index";
import "./index.stories.css";

type ZInfoBoxStoriesArgs = ZInfoBox &
  CSSVarsArguments<"--z-info-box--border-color" | "--z-info-box--background-color" | "--z-info-box--left-icon-color">;

const StoryMeta = {
  title: "ZInfoBox",
  component: ZInfoBox,
  argTypes: {
    "--z-info-box--border-color": getColorTokenArgConfig(["transparent"]),
    "--z-info-box--background-color": getColorTokenArgConfig(),
    "--z-info-box--left-icon-color": getColorTokenArgConfig(),
  },
  args: {
    "isclosable": true,
    "--z-info-box--background-color": "var(--color-primary03)",
  },
} satisfies Meta<ZInfoBoxStoriesArgs>;
export default StoryMeta;

export const Default = {
  render: (args) => (
    <z-info-box
      {...args}
      style={extractCSSVars(args)}
    >
      <span slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit
        dignissim in. Quisque at risus accumsan, auctor enim a, varius tortor. Donec egestas sodales mi at imperdiet.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </span>
    </z-info-box>
  ),
} satisfies Meta<ZInfoBoxStoriesArgs>;

export const AdditionalContent = {
  args: {
    "leftIcon": "info-filled",
    "--z-info-box--border-color": "var(--color-default-error)",
    "--z-info-box--background-color": "var(--color-inverse-error)",
  },
  render: (args) => (
    <z-info-box
      class="z-info-box-additional-content"
      {...args}
      style={extractCSSVars(args)}
    >
      <div slot="content">
        <div class="body-4-sb">Example title</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit
          dignissim in. Quisque at risus accumsan, auctor enim a, varius tortor. Donec egestas sodales mi at imperdiet.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </div>
      </div>
      <div slot="additional-content">
        <div class="demo-box-card">
          <div class="heading-4-sb">Example heading</div>
          <div class="body-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit
            dignissim in.
          </div>
          <z-button>Click me</z-button>
        </div>

        <div class="demo-box-card">
          <div class="heading-4-sb">Example heading</div>
          <div class="body-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit
            dignissim in.
          </div>
          <z-button variant={ButtonVariant.SECONDARY}>Click me</z-button>
        </div>
      </div>
    </z-info-box>
  ),
} satisfies Meta<ZInfoBoxStoriesArgs>;
