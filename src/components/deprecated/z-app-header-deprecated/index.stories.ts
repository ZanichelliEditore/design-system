import {Meta} from "@storybook/web-components";
import {html, type TemplateResult} from "lit";
import {ZAppHeaderDeprecated} from ".";
import {CSSVarsArguments} from "../../../utils/storybook-utils";
import "../z-menu-deprecated/index";
import "../z-menu-section-deprecated/index";
import "./index";
import "./index.stories.css";

type ZAppHeaderDeprecatedStoriesArgs = ZAppHeaderDeprecated & CSSVarsArguments<"app-header-content-max-width">;

const StoryMeta = {
  title: "Deprecated/ZAppHeaderDeprecated",
  component: "z-app-header-deprecated",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    flow: {
      control: {
        type: "inline-radio",
      },
      options: ["auto", "stack", "offcanvas"],
    },
  },
  args: {
    "--app-header-content-max-width": "100%",
    "enableSearch": false,
    "searchPageUrl": "",
    "flow": "auto",
  },
} satisfies Meta<ZAppHeaderDeprecatedStoriesArgs>;

export default StoryMeta;

const menuTemplate = (): TemplateResult => {
  return html`
    <z-menu-deprecated
      slot="menu"
      floating
    >
      <h3>Menu label</h3>
      <a
        href=""
        slot="item"
        >Item 1</a
      >
      <a
        href=""
        slot="item"
        >Item 2</a
      >
      <z-menu-section-deprecated slot="item">
        <h3>Item 3</h3>
        <a
          href=""
          slot="item"
          >Item 3.1</a
        >
        <a
          href=""
          slot="item"
          >Item 3.2</a
        >
      </z-menu-section-deprecated>
      <z-menu-section-deprecated slot="item">
        <h3>Item 4</h3>
        <a
          href=""
          slot="item"
          >Item 4.1</a
        >
        <a
          href=""
          slot="item"
          >Item 4.2</a
        >
      </z-menu-section-deprecated>
      <a
        href=""
        slot="item"
        >Item 5</a
      >
    </z-menu-deprecated>
    <z-menu-deprecated
      slot="menu"
      floating
    >
      <a href>Menu label</a>
    </z-menu-deprecated>
  `;
};

const longMenuTemplate = (): TemplateResult => {
  return html`
    <z-menu-deprecated
      slot="menu"
      floating
    >
      <h3>Not so short menu label</h3>
      <a
        href=""
        slot="item"
        >Item 1</a
      >
      <a
        href=""
        slot="item"
        >Item 2</a
      >
      <z-menu-section-deprecated slot="item">
        <h3>Item 3</h3>
        <a
          href=""
          slot="item"
          >Item 3.1</a
        >
        <a
          href=""
          slot="item"
          >Item 3.2</a
        >
      </z-menu-section-deprecated>
      <z-menu-section-deprecated slot="item">
        <h3>Item 4</h3>
        <a
          href=""
          slot="item"
          >Item 4.1</a
        >
        <a
          href=""
          slot="item"
          >Item 4.2</a
        >
      </z-menu-section-deprecated>
      <a
        href=""
        slot="item"
        >Item 5</a
      >
    </z-menu-deprecated>
    <z-menu-deprecated
      slot="menu"
      floating
    >
      <h3>Menu label</h3>
      <a
        href=""
        slot="item"
        >Item 1</a
      >
      <a
        href=""
        slot="item"
        >Item 2</a
      >
      <z-menu-section-deprecated slot="item">
        <h3>Item 3</h3>
        <a
          href=""
          slot="item"
          >Item 3.1</a
        >
        <a
          href=""
          slot="item"
          >Item 3.2</a
        >
      </z-menu-section-deprecated>
      <z-menu-section-deprecated slot="item">
        <h3>Item 4</h3>
        <a
          href=""
          slot="item"
          >Item 4.1</a
        >
        <a
          href=""
          slot="item"
          >Item 4.2</a
        >
      </z-menu-section-deprecated>
      <a
        href=""
        slot="item"
        >Item 5</a
      >
    </z-menu-deprecated>
    <z-menu-deprecated
      slot="menu"
      floating
    >
      <h3>Menu label</h3>
      <a
        href=""
        slot="item"
        >Item 1</a
      >
      <a
        href=""
        slot="item"
        >Item 2</a
      >
      <z-menu-section-deprecated slot="item">
        <h3>Item 3</h3>
        <a
          href=""
          slot="item"
          >Item 3.1</a
        >
        <a
          href=""
          slot="item"
          >Item 3.2</a
        >
      </z-menu-section-deprecated>
      <z-menu-section-deprecated slot="item">
        <h3>Item 4</h3>
        <a
          href=""
          slot="item"
          >Item 4.1</a
        >
        <a
          href=""
          slot="item"
          >Item 4.2</a
        >
      </z-menu-section-deprecated>
      <a
        href=""
        slot="item"
        >Item 5</a
      >
    </z-menu-deprecated>
    <z-menu-deprecated
      slot="menu"
      floating
    >
      <h3>Menu label</h3>
      <a
        href=""
        slot="item"
        >Item 1</a
      >
      <a
        href=""
        slot="item"
        >Item 2</a
      >
      <z-menu-section-deprecated slot="item">
        <h3>Item 3</h3>
        <a
          href=""
          slot="item"
          >Item 3.1</a
        >
        <a
          href=""
          slot="item"
          >Item 3.2</a
        >
      </z-menu-section-deprecated>
      <z-menu-section-deprecated slot="item">
        <h3>Item 4</h3>
        <a
          href=""
          slot="item"
          >Item 4.1</a
        >
        <a
          href=""
          slot="item"
          >Item 4.2</a
        >
      </z-menu-section-deprecated>
      <a
        href=""
        slot="item"
        >Item 5</a
      >
    </z-menu-deprecated>
    <z-menu-deprecated
      slot="menu"
      floating
    >
      <h3>Menu label</h3>
      <a
        href=""
        slot="item"
        >Item 1</a
      >
      <a
        href=""
        slot="item"
        >Item 2</a
      >
      <z-menu-section-deprecated slot="item">
        <h3>Item 3</h3>
        <a
          href=""
          slot="item"
          >Item 3.1</a
        >
        <a
          href=""
          slot="item"
          >Item 3.2</a
        >
      </z-menu-section-deprecated>
      <z-menu-section-deprecated slot="item">
        <h3>Item 4</h3>
        <a
          href=""
          slot="item"
          >Item 4.1</a
        >
        <a
          href=""
          slot="item"
          >Item 4.2</a
        >
      </z-menu-section-deprecated>
      <a
        href=""
        slot="item"
        >Item 5</a
      >
    </z-menu-deprecated>
    <z-menu-deprecated
      slot="menu"
      floating
    >
      <h3>Menu label</h3>
      <a
        href=""
        slot="item"
        >Item 1</a
      >
      <a
        href=""
        slot="item"
        >Item 2</a
      >
      <z-menu-section-deprecated slot="item">
        <h3>Item 3</h3>
        <a
          href=""
          slot="item"
          >Item 3.1</a
        >
        <a
          href=""
          slot="item"
          >Item 3.2</a
        >
      </z-menu-section-deprecated>
      <z-menu-section-deprecated slot="item">
        <h3>Item 4</h3>
        <a
          href=""
          slot="item"
          >Item 4.1</a
        >
        <a
          href=""
          slot="item"
          >Item 4.2</a
        >
      </z-menu-section-deprecated>
      <a
        href=""
        slot="item"
        >Item 5</a
      >
    </z-menu-deprecated>
    <z-menu-deprecated
      slot="menu"
      floating
    >
      <h3>Menu label</h3>
      <a
        href=""
        slot="item"
        >Item 1</a
      >
      <a
        href=""
        slot="item"
        >Item 2</a
      >
      <z-menu-section-deprecated slot="item">
        <h3>Item 3</h3>
        <a
          href=""
          slot="item"
          >Item 3.1</a
        >
        <a
          href=""
          slot="item"
          >Item 3.2</a
        >
      </z-menu-section-deprecated>
      <z-menu-section-deprecated slot="item">
        <h3>Item 4</h3>
        <a
          href=""
          slot="item"
          >Item 4.1</a
        >
        <a
          href=""
          slot="item"
          >Item 4.2</a
        >
      </z-menu-section-deprecated>
      <a
        href=""
        slot="item"
        >Item 5</a
      >
    </z-menu-deprecated>
  `;
};

type Story = Meta<ZAppHeaderDeprecatedStoriesArgs>;

export const Title = {
  parameters: {
    controls: {
      exclude: ["flow"],
    },
  },
  render: (args) =>
    html`<z-app-header-deprecated
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h1 slot="title">Applicazione</h1>
    </z-app-header-deprecated>`,
} satisfies Story;

export const Subtitle = {
  parameters: {
    controls: {
      exclude: ["flow"],
    },
  },
  render: (args) =>
    html`<z-app-header-deprecated
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
    </z-app-header-deprecated>`,
} satisfies Story;

export const TopSubtitle = {
  parameters: {
    controls: {
      exclude: ["flow"],
    },
  },
  render: (args) =>
    html`<z-app-header-deprecated
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h2 slot="top-subtitle">Payoff dell'applicazione</h2>
      <h1 slot="title">Applicazione</h1>
    </z-app-header-deprecated>`,
} satisfies Story;

export const Menu = {
  render: (args) =>
    html`<z-app-header-deprecated
      flow=${args.flow}
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      ${menuTemplate()}
    </z-app-header-deprecated>`,
} satisfies Story;

export const LongTitle = {
  render: (args) =>
    html`<z-app-header-deprecated
      flow=${args.flow}
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h1 slot="title">Applicazione con nome veramente lungo che fa andare il menu a capo</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      ${menuTemplate()}
    </z-app-header-deprecated>`,
} satisfies Story;

export const VeryLongMenu = {
  render: (args) =>
    html`<z-app-header-deprecated
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      flow=${args.flow}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      ${longMenuTemplate()}
    </z-app-header-deprecated>`,
} satisfies Story;

export const OffcanvasMenu = {
  parameters: {
    controls: {
      exclude: ["flow"],
    },
  },
  render: (args) =>
    html`<z-app-header-deprecated
      flow="offcanvas"
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      ${longMenuTemplate()}
    </z-app-header-deprecated>`,
} satisfies Story;

export const Stuck = {
  decorators: [
    (Story) => html`
      <div style="padding: 16px var(--grid-margin)">Scroll to see <code>stuck</code> prop in action.</div>
      <div style="height: 200vh">${Story()}</div>
    `,
  ],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: "400px",
      },
    },
  },
  render: (args) =>
    html`<z-app-header-deprecated
      stuck
      .flow=${args.flow}
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}; --app-header-top-offset: 0"
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      ${longMenuTemplate()}
    </z-app-header-deprecated>`,
} satisfies Story;

export const MaxWidth = {
  args: {
    "--app-header-content-max-width": "1366px",
  },
  decorators: [
    (Story) => html`
      <div style="padding: 16px var(--grid-margin)">Scroll to see max width also in stuck header.</div>
      <div style="height: 200vh">${Story()}</div>
    `,
  ],
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: "400px",
    },
  },
  render: (args) =>
    html`<z-app-header-deprecated
      stuck
      .flow=${args.flow}
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}; --app-header-top-offset: 0;"
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      ${menuTemplate()}
    </z-app-header-deprecated>`,
} satisfies Story;

export const CoverHeroWithSlottedImage = {
  args: {
    overlay: true,
    hero: "",
  },
  render: (args) =>
    html`<z-app-header-deprecated
      id="hero"
      .overlay=${args.overlay}
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      .hero=${args.hero}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
      flow=${args.flow}
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      ${args.hero
        ? ""
        : html`<img
            slot="hero"
            src="https://miro.medium.com/max/2560/1*q8Lf442Gq2Wrb2aNr3urVg.jpeg"
            alt=""
          />`}
      ${longMenuTemplate()}
    </z-app-header-deprecated>`,
} satisfies Story;

export const Searchbar = {
  parameters: {
    controls: {
      exclude: ["searchPageUrl", "enableSearch"],
    },
  },
  render: (args) =>
    html`<z-app-header-deprecated
      flow=${args.flow}
      enable-search
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      ${menuTemplate()}
    </z-app-header-deprecated>`,
} satisfies Story;

export const SearchPageButton = {
  parameters: {
    controls: {
      exclude: ["searchPageUrl", "enableSearch"],
    },
  },
  decorators: [
    (Story) => html`
      <div style="padding: 16px var(--grid-margin)">
        The prop <code>searchPageUrl</code> only affects the component in tablet and mobile viewports.
      </div>
      ${Story()}
    `,
  ],
  render: (args) =>
    html`<z-app-header-deprecated
      flow=${args.flow}
      enable-search
      search-page-url="https://www.zanichelli.it"
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      ${menuTemplate()}
    </z-app-header-deprecated>`,
} satisfies Story;
