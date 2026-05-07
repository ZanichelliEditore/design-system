import {h} from "@stencil/core";
import {Fragment} from "@stencil/core/internal";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {CardVariant} from "../../beans";
import {CSSVarsArguments} from "../../utils/storybook-utils";
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
    variant: undefined,
    showShadow: false,
    clickable: false,
  },
} satisfies Meta<ZCardStoriesArgs>;

export default StoryMeta;

type Story = StoryObj<ZCardStoriesArgs>;

export const WithImage = {
  render: (args) => (
    <z-card
      class="demo-card"
      variant={args.variant}
      showShadow={args.showShadow}
      clickable={args.clickable}
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
    </z-card>
  ),
} satisfies Story;

export const WithImageAndIcon = {
  args: {
    coverIcon: "play-filled",
  },
  render: (args) => (
    <z-card
      class="demo-card"
      cover-icon={args.coverIcon}
      variant={args.variant}
      showShadow={args.showShadow}
      clickable={args.clickable}
    >
      <img
        slot="cover"
        src="https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg"
      />
      <h2
        class="body-5"
        slot="metadata"
      >
        metadata
      </h2>
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
    </z-card>
  ),
} satisfies Story;

export const ColorCover = {
  args: {
    "--z-card--color-cover-background": "var(--yellow500)",
  },
  render: (args) => (
    <z-card
      class="demo-card"
      variant={args.variant}
      showShadow={args.showShadow}
      clickable={args.clickable}
      style={{"--z-card--color-cover-background": args["--z-card--color-cover-background"]}}
    >
      <h2
        class="body-5"
        slot="metadata"
      >
        metadata
      </h2>
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
    </z-card>
  ),
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
      class="text-variant-card"
      variant={CardVariant.TEXT}
      showShadow={args.showShadow}
      clickable={args.clickable}
      style={{
        "--z-card--text-background": "var(--color-primary01)",
        "--z-card--text-border-radius": args["--z-card--text-border-radius"],
        "color": "var(--color-text-inverse)",
      }}
    >
      <h2
        class="body-5"
        slot="metadata"
      >
        metadata
      </h2>
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
        <z-icon
          name="share"
          fill="color-surface01"
        ></z-icon>
      </button>
      <button slot="action">
        <z-icon
          name="delete"
          fill="color-surface01"
        ></z-icon>
      </button>
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
      class="text-variant-card"
      variant={CardVariant.TEXT}
      showShadow={args.showShadow}
      clickable={args.clickable}
      style={{
        "--z-card--text-background": "var(--color-surface01)",
        "--z-card--text-border": args["--z-card--text-border"],
        "--z-card--text-border-radius": args["--z-card--text-border-radius"],
        "--z-card--text-padding": args["--z-card--text-padding"],
      }}
    >
      <h2
        class="body-5"
        slot="metadata"
      >
        metadata
      </h2>
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
        <z-icon
          name="share"
          fill="color-primary01"
        ></z-icon>
      </button>
      <button slot="action">
        <z-icon
          name="delete"
          fill="color-primary01"
        ></z-icon>
      </button>
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
