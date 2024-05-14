import {html} from "lit";
import {styleMap} from "lit/directives/style-map.js";
import {CardVariant} from "../../beans";

import "./index.stories.css";

export default {
  title: "ZCard",
  component: "z-card",

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
};

export const WithImage = {
  render: (args) => html`
    <z-card
      class="demo-card"
      .variant="${args.variant}"
      .showShadow="${args.showShadow}"
      .clickable="${args.clickable}"
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
      <button slot="action"><z-icon name="share"></z-icon></button>
      <button slot="action"><z-icon name="delete"></z-icon></button>
    </z-card>
  `,

  name: "With image",
};

export const WithImageAndIcon = {
  render: (args) => html`
    <z-card
      class="demo-card"
      cover-icon="${args.coverIcon}"
      .variant="${args.variant}"
      .showShadow="${args.showShadow}"
      .clickable="${args.clickable}"
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
      <button slot="action"><z-icon name="share"></z-icon></button>
      <button slot="action"><z-icon name="delete"></z-icon></button>
    </z-card>
  `,

  name: "With image and icon",

  args: {
    coverIcon: "play-filled",
  },
};

export const ColorCover = {
  render: (args) => html`
    <z-card
      class="demo-card"
      .variant="${args.variant}"
      .showShadow="${args.showShadow}"
      .clickable="${args.clickable}"
      style="--z-card--color-cover-background: ${args["--z-card--color-cover-background"]};"
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
      <button slot="action"><z-icon name="share"></z-icon></button>
      <button slot="action"><z-icon name="delete"></z-icon></button>
    </z-card>
  `,

  name: "Color cover",

  args: {
    "--z-card--color-cover-background": "var(--yellow500)",
  },
};

export const TextVariantPrimaryBackground = {
  render: (args) => html`
    <z-card
      class="text-variant-card"
      variant="text"
      .showShadow="${args.showShadow}"
      .clickable="${args.clickable}"
      style=${styleMap({
        "--z-card--text-background": "var(--color-primary01)",
        "--z-card--text-border-radius": `${args["--z-card--text-border-radius"]}`,
        "color": "var(--color-text-inverse)",
      })}
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
  `,

  name: "Text variant - primary background",

  args: {
    "--z-card--text-border-radius": "4px",
  },

  parameters: {
    controls: {
      exclude: ["variant"],
    },
  },
};

export const TextVariantWhiteBackgroundAndBordered = {
  render: (args) =>
    html`<z-card
      class="text-variant-card"
      variant="text"
      .showShadow="${args.showShadow}"
      .clickable="${args.clickable}"
      style=${styleMap({
        "--z-card--text-background": `var(--color-white)`,
        "--z-card--text-border": `${args["--z-card--text-border"]}`,
        "--z-card--text-border-radius": `${args["--z-card--text-border-radius"]}`,
        "--z-card--text-padding": `${args["--z-card--text-padding"]}`,
      })}
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
    </z-card>`,

  name: "Text variant - white background and bordered",

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
};

export const WithImageAndClick = {
  render: (args) => html`
    <script>
      document.getElementById("btn-card").addEventListener("click", (e) => {
        // emit event, do stuff
        alert("Click on card");
      });
    </script>
    <z-card
      class="demo-card"
      .variant="${args.variant}"
      .showShadow="${args.showShadow}"
      .clickable="${args.clickable}"
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
      <button slot="action"><z-icon name="share"></z-icon></button>
      <button slot="action"><z-icon name="delete"></z-icon></button>
    </z-card>
  `,

  name: "With image and click",
};
