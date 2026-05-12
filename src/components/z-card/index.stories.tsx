import {h} from "@stencil/core";
import {Fragment} from "@stencil/core/internal";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {CardVariant} from "../../beans";
import {CSSVarsArguments, extractCSSVars} from "../../utils/storybook-utils";
import {ZCard} from "./index";
import "./index.stories.css";

type ZCardStoriesArgs = ZCard &
  CSSVarsArguments<
    | "z-card--color-cover-background"
    | "z-card--color-cover-background"
    | "z-card--text-border"
    | "z-card--text-border-radius"
    | "z-card--text-padding"
  >;

const cardContent = (image = true) => (
  <Fragment>
    {image && (
      <img
        slot="cover"
        src="https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg"
      />
    )}
    <span
      class="body-5"
      slot="metadata"
    >
      metadata
    </span>
    <a
      href="https://google.it"
      target="_blank"
      slot="title"
    >
      <span>Card title</span>
    </a>
    <p
      class="body-3"
      slot="text"
    >
      Some description for the content of the card.
    </p>
    <button slot="action">
      <z-icon name="share"></z-icon>
    </button>
    <button slot="action">
      <z-icon name="delete"></z-icon>
    </button>
  </Fragment>
);

const StoryMeta = {
  title: "ZCard",
  component: ZCard,
  argTypes: {
    variant: {
      control: {
        type: "inline-radio",
        labels: {
          null: "default",
        },
      },
      options: [null, ...Object.values(CardVariant)],
    },
  },
  args: {
    variant: null,
    showShadow: false,
    clickable: false,
  },
  render: (args) => (
    <z-card
      class="demo-card"
      {...args}
      style={extractCSSVars(args)}
    >
      {cardContent()}
    </z-card>
  ),
} satisfies Meta<ZCardStoriesArgs>;

export default StoryMeta;

type Story = StoryObj<ZCardStoriesArgs>;

export const WithImage = {} satisfies Story;

export const WithImageAndIcon = {
  args: {
    coverIcon: "play-filled",
  },
} satisfies Story;

export const ColorCover = {
  args: {
    "--z-card--color-cover-background": "var(--yellow500)",
  },
} satisfies Story;

export const TextVariantPrimaryBackground = {
  args: {
    "--z-card--text-border-radius": "4px",
  },
  parameters: {
    controls: {
      exclude: ["variant"],
    },
  },
  render: (args) => (
    <z-card
      class="text-variant-card primary-bg"
      {...args}
      variant={CardVariant.TEXT}
      style={{
        ...extractCSSVars(args),
        "--z-card--text-background": "var(--color-primary01)",
        "color": "var(--color-text-inverse)",
      }}
    >
      {cardContent(false)}
    </z-card>
  ),
} satisfies Story;

export const TextVariantSurfaceBackgroundAndBordered = {
  args: {
    "--z-card--text-border": "2px solid var(--gray800)",
    "--z-card--text-border-radius": "4px",
    "--z-card--text-padding": "16px 8px",
  },
  parameters: {
    controls: {
      exclude: ["variant"],
    },
  },
  render: (args) => (
    <z-card
      class="text-variant-card surface-bg"
      {...args}
      variant={CardVariant.TEXT}
      style={{
        ...extractCSSVars(args),
        "--z-card--text-background": "var(--color-surface01)",
      }}
    >
      {cardContent(false)}
    </z-card>
  ),
} satisfies Story;

const onCardButtonClick = () => {
  const alertBox = document.getElementById("click-alert-container");
  if (!alertBox) {
    return;
  }

  window["currentClickCount"] = (window["currentClickCount"] || 0) + 1;
  alertBox.innerText = `Card click count: ${window["currentClickCount"]}`;
};

export const WithImageAndClickListener = {
  parameters: {
    controls: {
      exclude: ["clickable", "showShadow"],
    },
  },
  render: (args) => (
    <Fragment>
      <z-card
        class="demo-card"
        {...args}
        variant={args.variant}
        clickable
      >
        <img
          slot="cover"
          src="https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg"
        />
        <span
          class="body-5"
          slot="metadata"
        >
          metadata
        </span>
        <button
          id="btn-card"
          onClick={onCardButtonClick}
          slot="title"
        >
          <span>Card title</span>
        </button>
        <p
          class="body-3"
          slot="text"
        >
          Some description for the content of the card.
        </p>
        <button slot="action">
          <z-icon name="share"></z-icon>
        </button>
        <button slot="action">
          <z-icon name="delete"></z-icon>
        </button>
      </z-card>
      <div id="click-alert-container">Card click count: {window["currentClickCount"] || 0}</div>
    </Fragment>
  ),
} satisfies Story;
