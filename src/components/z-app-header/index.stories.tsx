import {h} from "@stencil/core";
import {Fragment} from "@stencil/core/internal";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {CSSVarsArguments, extractCSSVars} from "../../utils/storybook-utils";
import {ZAppHeader} from "./index";
import "./index.stories.css";

type ZAppHeaderStoriesArgs = ZAppHeader & CSSVarsArguments<"app-header-content-max-width">;

const StoryMeta = {
  title: "ZAppHeader",
  component: ZAppHeader,
  parameters: {
    layout: "fullscreen",
  },
  subcomponents: {
    ZMenu: "z-menu",
    ZMenuSection: "z-menu-section",
  },
  args: {
    "--app-header-content-max-width": "100%",
    "enableSearch": false,
    "searchPageUrl": "",
    "searchPlaceholder": "Digita qui quello che vuoi",
    "searchButtonLabel": "Cliccami",
    "enableZLogo": false,
    "enableOffcanvas": false,
  },
} satisfies Meta<ZAppHeaderStoriesArgs>;

export default StoryMeta;

const menuItemsTemplate = () => (
  <Fragment>
    <a
      href=""
      slot="item"
    >
      Item 1
    </a>
    <z-menu-section slot="item">
      <h3>Item 2</h3>
      <a
        href=""
        slot="section"
      >
        Item 2.1
      </a>
      <a
        href=""
        slot="section"
      >
        Item 2.2
      </a>
    </z-menu-section>
    <z-menu-section slot="item">
      <h3>Item 3</h3>
      <a
        href=""
        slot="section"
      >
        Item 3.1
      </a>
      <a
        href=""
        slot="section"
      >
        Item 3.2
      </a>
    </z-menu-section>
    <a
      href=""
      slot="item"
    >
      Item 4
    </a>
    <z-menu-section slot="item">
      <h3>Item 5</h3>
      <a
        href=""
        slot="section"
      >
        Item 5.1
      </a>
      <a
        href=""
        slot="section"
      >
        Item 5.2
      </a>
    </z-menu-section>
  </Fragment>
);

const menuTemplate = () => (
  <Fragment>
    <z-menu slot="menu">
      <h3>Menu label 1</h3>
      {menuItemsTemplate()}
    </z-menu>
    <z-menu slot="menu">
      <a href="">Menu label 2</a>
    </z-menu>
    <z-menu slot="menu">
      <h3>Menu label 3</h3>
      {menuItemsTemplate()}
    </z-menu>
    <z-menu slot="menu">
      <h3>Menu label 4</h3>
      {menuItemsTemplate()}
    </z-menu>
  </Fragment>
);

type Story = StoryObj<ZAppHeaderStoriesArgs>;

export const Title = {
  parameters: {
    controls: {
      exclude: ["enable-offcanvas", "search-placeholder", "search-button-label"],
    },
  },
  render: (args) => (
    <z-app-header
      {...args}
      style={extractCSSVars(args)}
    >
      <a
        slot="title"
        href="zanichelli.it"
      >
        Applicazione
      </a>
    </z-app-header>
  ),
} satisfies Story;

export const ProductLogo = {
  parameters: {
    controls: {
      exclude: ["enable-offcanvas", "search-placeholder", "search-button-label"],
    },
  },
  render: (args) => (
    <z-app-header
      {...args}
      style={extractCSSVars(args)}
    >
      <div slot="title">Applicazione</div>
      <div
        class="story-product-logo"
        slot="product-logo"
      ></div>
    </z-app-header>
  ),
} satisfies Story;

export const TopTitle = {
  parameters: {
    controls: {
      exclude: ["enable-offcanvas", "enable-z-logo", "search-placeholder", "search-button-label"],
    },
  },
  render: (args) => (
    <z-app-header
      {...args}
      style={extractCSSVars(args)}
    >
      <div slot="top-subtitle">Payoff dell'applicazione</div>
      <div slot="title">Applicazione</div>
    </z-app-header>
  ),
} satisfies Story;

export const TopTitleWithProductLogo = {
  parameters: {
    controls: {
      exclude: ["enable-offcanvas", "enable-z-logo", "search-placeholder", "search-button-label"],
    },
  },
  render: (args) => (
    <z-app-header
      {...args}
      enableZLogo={false}
      style={extractCSSVars(args)}
    >
      <div slot="top-subtitle">Payoff dell'applicazione</div>
      <div slot="title">Applicazione</div>
      <div
        class="story-product-logo"
        slot="product-logo"
      ></div>
    </z-app-header>
  ),
} satisfies Story;

export const CustomMenuButton = {
  parameters: {
    controls: {
      exclude: ["enable-offcanvas", "search-placeholder", "search-button-label"],
    },
  },
  render: (args) => (
    <z-app-header
      {...args}
      style={extractCSSVars(args)}
    >
      <button slot="menu-button">
        <z-icon name="gear" />
      </button>
      <a
        href="zanichelli.it"
        slot="title"
      >
        Applicazione
      </a>
    </z-app-header>
  ),
} satisfies Story;

export const MenuWithTopTitle = {
  parameters: {
    controls: {
      exclude: ["enable-z-logo", "search-placeholder", "search-button-label"],
    },
  },
  render: (args) => (
    <z-app-header
      {...args}
      style={extractCSSVars(args)}
    >
      <div slot="top-subtitle">Payoff dell'applicazione</div>
      <div slot="title">Applicazione</div>
      {menuTemplate()}
    </z-app-header>
  ),
} satisfies Story;

export const MenuWithTopTitleAndProductLogo = {
  parameters: {
    controls: {
      exclude: ["enable-z-logo", "search-placeholder", "search-button-label"],
    },
  },
  render: (args) => (
    <z-app-header
      {...args}
      enableZLogo={false}
      style={extractCSSVars(args)}
    >
      <div slot="top-subtitle">Payoff dell'applicazione</div>
      <div slot="title">Applicazione</div>
      <div
        class="story-product-logo"
        slot="product-logo"
      ></div>
      {menuTemplate()}
    </z-app-header>
  ),
} satisfies Story;

export const LongTitle = {
  parameters: {
    controls: {
      exclude: [
        "enable-offcanvas",
        "enable-z-logo",
        "enable-search",
        "search-page-url",
        "search-placeholder",
        "search-button-label",
      ],
    },
  },
  render: (args) => (
    <z-app-header style={extractCSSVars(args)}>
      <div slot="title">Fondamenti di fisica 8e - Meccanica, Onde, Termodinamica, Elettromagnetismo, Ottica</div>
      <div slot="top-subtitle">Jearl Walker, David Halliday, Robert Resnick</div>
      {menuTemplate()}
    </z-app-header>
  ),
} satisfies Story;

export const OffcanvasMenu = {
  args: {
    enableOffcanvas: true,
  },
  parameters: {
    controls: {
      exclude: ["search-placeholder", "search-button-label"],
    },
  },
  render: (args) => (
    <z-app-header
      {...args}
      style={extractCSSVars(args)}
    >
      <div slot="title">Applicazione</div>
      {menuTemplate()}
    </z-app-header>
  ),
} satisfies Story;

export const Stuck = {
  decorators: [
    (Story) => (
      <Fragment>
        <div style={{padding: "16px var(--grid-margin)"}}>
          Scroll to see <code>stuck</code> prop in action.
        </div>
        <div style={{height: "200vh"}}>{Story()}</div>
      </Fragment>
    ),
  ],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: "400px",
      },
    },
    controls: {
      exclude: ["enable-offcanvas", "search-placeholder", "search-button-label"],
    },
  },
  render: (args) => (
    <z-app-header
      {...args}
      stuck
      style={extractCSSVars({...args, "--app-header-top-offset": "0"})}
    >
      <div slot="title">Fondamenti di fisica 8e - Meccanica, Onde, Termodinamica, Elettromagnetismo, Ottica</div>
      {menuTemplate()}
    </z-app-header>
  ),
} satisfies Story;

export const SearchPageButton = {
  parameters: {
    controls: {
      exclude: ["search-page-url", "enable-search", "enable-offcanvas"],
    },
  },
  decorators: [
    (Story) => (
      <Fragment>
        <div style={{padding: "16px var(--grid-margin)"}}>
          The prop <code>searchPageUrl</code> only affects the component in tablet and mobile viewports.
        </div>
        {Story()}
      </Fragment>
    ),
  ],
  render: (args) => (
    <z-app-header
      {...args}
      enableSearch
      searchPageUrl="https://www.zanichelli.it"
      style={extractCSSVars(args)}
    >
      <div slot="title">Applicazione</div>
      <div slot="subtitle">Payoff dell'applicazione</div>
      {menuTemplate()}
    </z-app-header>
  ),
} satisfies Story;
