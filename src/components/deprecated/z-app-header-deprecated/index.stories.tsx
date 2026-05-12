import {h} from "@stencil/core";
import {Fragment} from "@stencil/core/internal";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {CSSVarsArguments} from "../../../utils/storybook-utils";
import {ZAppHeaderDeprecated} from "./index";
import "./index.stories.css";

type ZAppHeaderDeprecatedStoriesArgs = ZAppHeaderDeprecated & CSSVarsArguments<"app-header-content-max-width">;

const StoryMeta = {
  title: "Deprecated/ZAppHeaderDeprecated",
  component: ZAppHeaderDeprecated,
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

const menuTemplate = () => [
  <z-menu-deprecated
    slot="menu"
    floating
  >
    <h3>Menu label</h3>
    <a
      href=""
      slot="item"
    >
      Item 1
    </a>
    <a
      href=""
      slot="item"
    >
      Item 2
    </a>
    <z-menu-section-deprecated slot="item">
      <h3>Item 3</h3>
      <a
        href=""
        slot="item"
      >
        Item 3.1
      </a>
      <a
        href=""
        slot="item"
      >
        Item 3.2
      </a>
    </z-menu-section-deprecated>
    <z-menu-section-deprecated slot="item">
      <h3>Item 4</h3>
      <a
        href=""
        slot="item"
      >
        Item 4.1
      </a>
      <a
        href=""
        slot="item"
      >
        Item 4.2
      </a>
    </z-menu-section-deprecated>
    <a
      href=""
      slot="item"
    >
      Item 5
    </a>
  </z-menu-deprecated>,
  <z-menu-deprecated
    slot="menu"
    floating
  >
    <a href="">Menu label</a>
  </z-menu-deprecated>,
];

const longMenuTemplate = () => [
  <z-menu-deprecated
    slot="menu"
    floating
  >
    <h3>Not so short menu label</h3>
    <a
      href=""
      slot="item"
    >
      Item 1
    </a>
    <a
      href=""
      slot="item"
    >
      Item 2
    </a>
    <z-menu-section-deprecated slot="item">
      <h3>Item 3</h3>
      <a
        href=""
        slot="item"
      >
        Item 3.1
      </a>
      <a
        href=""
        slot="item"
      >
        Item 3.2
      </a>
    </z-menu-section-deprecated>
    <z-menu-section-deprecated slot="item">
      <h3>Item 4</h3>
      <a
        href=""
        slot="item"
      >
        Item 4.1
      </a>
      <a
        href=""
        slot="item"
      >
        Item 4.2
      </a>
    </z-menu-section-deprecated>
    <a
      href=""
      slot="item"
    >
      Item 5
    </a>
  </z-menu-deprecated>,
  <z-menu-deprecated
    slot="menu"
    floating
  >
    <h3>Menu label</h3>
    <a
      href=""
      slot="item"
    >
      Item 1
    </a>
    <a
      href=""
      slot="item"
    >
      Item 2
    </a>
    <z-menu-section-deprecated slot="item">
      <h3>Item 3</h3>
      <a
        href=""
        slot="item"
      >
        Item 3.1
      </a>
      <a
        href=""
        slot="item"
      >
        Item 3.2
      </a>
    </z-menu-section-deprecated>
    <z-menu-section-deprecated slot="item">
      <h3>Item 4</h3>
      <a
        href=""
        slot="item"
      >
        Item 4.1
      </a>
      <a
        href=""
        slot="item"
      >
        Item 4.2
      </a>
    </z-menu-section-deprecated>
    <a
      href=""
      slot="item"
    >
      Item 5
    </a>
  </z-menu-deprecated>,
  <z-menu-deprecated
    slot="menu"
    floating
  >
    <h3>Menu label</h3>
    <a
      href=""
      slot="item"
    >
      Item 1
    </a>
    <a
      href=""
      slot="item"
    >
      Item 2
    </a>
    <z-menu-section-deprecated slot="item">
      <h3>Item 3</h3>
      <a
        href=""
        slot="item"
      >
        Item 3.1
      </a>
      <a
        href=""
        slot="item"
      >
        Item 3.2
      </a>
    </z-menu-section-deprecated>
    <z-menu-section-deprecated slot="item">
      <h3>Item 4</h3>
      <a
        href=""
        slot="item"
      >
        Item 4.1
      </a>
      <a
        href=""
        slot="item"
      >
        Item 4.2
      </a>
    </z-menu-section-deprecated>
    <a
      href=""
      slot="item"
    >
      Item 5
    </a>
  </z-menu-deprecated>,
  <z-menu-deprecated
    slot="menu"
    floating
  >
    <h3>Menu label</h3>
    <a
      href=""
      slot="item"
    >
      Item 1
    </a>
    <a
      href=""
      slot="item"
    >
      Item 2
    </a>
    <z-menu-section-deprecated slot="item">
      <h3>Item 3</h3>
      <a
        href=""
        slot="item"
      >
        Item 3.1
      </a>
      <a
        href=""
        slot="item"
      >
        Item 3.2
      </a>
    </z-menu-section-deprecated>
    <z-menu-section-deprecated slot="item">
      <h3>Item 4</h3>
      <a
        href=""
        slot="item"
      >
        Item 4.1
      </a>
      <a
        href=""
        slot="item"
      >
        Item 4.2
      </a>
    </z-menu-section-deprecated>
    <a
      href=""
      slot="item"
    >
      Item 5
    </a>
  </z-menu-deprecated>,
  <z-menu-deprecated
    slot="menu"
    floating
  >
    <h3>Menu label</h3>
    <a
      href=""
      slot="item"
    >
      Item 1
    </a>
    <a
      href=""
      slot="item"
    >
      Item 2
    </a>
    <z-menu-section-deprecated slot="item">
      <h3>Item 3</h3>
      <a
        href=""
        slot="item"
      >
        Item 3.1
      </a>
      <a
        href=""
        slot="item"
      >
        Item 3.2
      </a>
    </z-menu-section-deprecated>
    <z-menu-section-deprecated slot="item">
      <h3>Item 4</h3>
      <a
        href=""
        slot="item"
      >
        Item 4.1
      </a>
      <a
        href=""
        slot="item"
      >
        Item 4.2
      </a>
    </z-menu-section-deprecated>
    <a
      href=""
      slot="item"
    >
      Item 5
    </a>
  </z-menu-deprecated>,
  <z-menu-deprecated
    slot="menu"
    floating
  >
    <h3>Menu label</h3>
    <a
      href=""
      slot="item"
    >
      Item 1
    </a>
    <a
      href=""
      slot="item"
    >
      Item 2
    </a>
    <z-menu-section-deprecated slot="item">
      <h3>Item 3</h3>
      <a
        href=""
        slot="item"
      >
        Item 3.1
      </a>
      <a
        href=""
        slot="item"
      >
        Item 3.2
      </a>
    </z-menu-section-deprecated>
    <z-menu-section-deprecated slot="item">
      <h3>Item 4</h3>
      <a
        href=""
        slot="item"
      >
        Item 4.1
      </a>
      <a
        href=""
        slot="item"
      >
        Item 4.2
      </a>
    </z-menu-section-deprecated>
    <a
      href=""
      slot="item"
    >
      Item 5
    </a>
  </z-menu-deprecated>,
  <z-menu-deprecated
    slot="menu"
    floating
  >
    <h3>Menu label</h3>
    <a
      href=""
      slot="item"
    >
      Item 1
    </a>
    <a
      href=""
      slot="item"
    >
      Item 2
    </a>
    <z-menu-section-deprecated slot="item">
      <h3>Item 3</h3>
      <a
        href=""
        slot="item"
      >
        Item 3.1
      </a>
      <a
        href=""
        slot="item"
      >
        Item 3.2
      </a>
    </z-menu-section-deprecated>
    <z-menu-section-deprecated slot="item">
      <h3>Item 4</h3>
      <a
        href=""
        slot="item"
      >
        Item 4.1
      </a>
      <a
        href=""
        slot="item"
      >
        Item 4.2
      </a>
    </z-menu-section-deprecated>
    <a
      href=""
      slot="item"
    >
      Item 5
    </a>
  </z-menu-deprecated>,
];

type Story = StoryObj<ZAppHeaderDeprecatedStoriesArgs>;

export const Title = {
  parameters: {
    controls: {
      exclude: ["flow"],
    },
  },
  render: (args) => (
    <z-app-header-deprecated
      {...args}
      style={{"--app-header-content-max-width": args["--app-header-content-max-width"]}}
    >
      <h1 slot="title">Applicazione</h1>
    </z-app-header-deprecated>
  ),
} satisfies Story;

export const Subtitle = {
  parameters: {
    controls: {
      exclude: ["flow"],
    },
  },
  render: (args) => (
    <z-app-header-deprecated
      {...args}
      style={{"--app-header-content-max-width": args["--app-header-content-max-width"]}}
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
    </z-app-header-deprecated>
  ),
} satisfies Story;

export const TopSubtitle = {
  parameters: {
    controls: {
      exclude: ["flow"],
    },
  },
  render: (args) => (
    <z-app-header-deprecated
      {...args}
      style={{"--app-header-content-max-width": args["--app-header-content-max-width"]}}
    >
      <h2 slot="top-subtitle">Payoff dell'applicazione</h2>
      <h1 slot="title">Applicazione</h1>
    </z-app-header-deprecated>
  ),
} satisfies Story;

export const Menu = {
  render: (args) => (
    <z-app-header-deprecated
      {...args}
      style={{"--app-header-content-max-width": args["--app-header-content-max-width"]}}
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      {menuTemplate()}
    </z-app-header-deprecated>
  ),
} satisfies Story;

export const LongTitle = {
  render: (args) => (
    <z-app-header-deprecated
      {...args}
      style={{"--app-header-content-max-width": args["--app-header-content-max-width"]}}
    >
      <h1 slot="title">Applicazione con nome veramente lungo che fa andare il menu a capo</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      {menuTemplate()}
    </z-app-header-deprecated>
  ),
} satisfies Story;

export const VeryLongMenu = {
  render: (args) => (
    <z-app-header-deprecated
      {...args}
      style={{"--app-header-content-max-width": args["--app-header-content-max-width"]}}
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      {longMenuTemplate()}
    </z-app-header-deprecated>
  ),
} satisfies Story;

export const OffcanvasMenu = {
  parameters: {
    controls: {
      exclude: ["flow"],
    },
  },
  render: (args) => (
    <z-app-header-deprecated
      {...args}
      style={{"--app-header-content-max-width": args["--app-header-content-max-width"]}}
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      {longMenuTemplate()}
    </z-app-header-deprecated>
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
  },
  render: (args) => (
    <z-app-header-deprecated
      {...args}
      stuck
      style={{"--app-header-content-max-width": args["--app-header-content-max-width"], "--app-header-top-offset": "0"}}
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      {longMenuTemplate()}
    </z-app-header-deprecated>
  ),
} satisfies Story;

export const MaxWidth = {
  args: {
    "--app-header-content-max-width": "1366px",
  },
  decorators: [
    (Story) => (
      <Fragment>
        <div style={{padding: "16px var(--grid-margin)"}}>Scroll to see max width also in stuck header.</div>
        <div style={{height: "200vh"}}>{Story()}</div>
      </Fragment>
    ),
  ],
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: "400px",
    },
  },
  render: (args) => (
    <z-app-header-deprecated
      {...args}
      stuck
      style={{"--app-header-content-max-width": args["--app-header-content-max-width"], "--app-header-top-offset": "0"}}
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      {menuTemplate()}
    </z-app-header-deprecated>
  ),
} satisfies Story;

export const CoverHeroWithSlottedImage = {
  args: {
    overlay: true,
    hero: "",
  },
  render: (args) => (
    <z-app-header-deprecated
      id="hero"
      {...args}
      style={{"--app-header-content-max-width": args["--app-header-content-max-width"]}}
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      {args.hero ? (
        ""
      ) : (
        <img
          slot="hero"
          src="https://miro.medium.com/max/2560/1*q8Lf442Gq2Wrb2aNr3urVg.jpeg"
          alt=""
        />
      )}
      {longMenuTemplate()}
    </z-app-header-deprecated>
  ),
} satisfies Story;

export const Searchbar = {
  parameters: {
    controls: {
      exclude: ["search-page-url", "enable-search"],
    },
  },
  render: (args) => (
    <z-app-header-deprecated
      {...args}
      style={{"--app-header-content-max-width": args["--app-header-content-max-width"]}}
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      {menuTemplate()}
    </z-app-header-deprecated>
  ),
} satisfies Story;

export const SearchPageButton = {
  parameters: {
    controls: {
      exclude: ["search-page-url", "enable-search"],
    },
  },
  args: {
    searchPageUrl: "https://www.zanichelli.it",
  },
  decorators: [
    (Story) => (
      <Fragment>
        <div style={{padding: "16px var(--grid-margin)"}}>
          The prop <code>searchPageUrl</code> only affects the component in tablet and mobile viewports.
        </div>
        <div style={{height: "200vh"}}>{Story()}</div>
      </Fragment>
    ),
  ],
  render: (args) => (
    <z-app-header-deprecated
      {...args}
      style={{"--app-header-content-max-width": args["--app-header-content-max-width"]}}
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      {menuTemplate()}
    </z-app-header-deprecated>
  ),
} satisfies Story;
