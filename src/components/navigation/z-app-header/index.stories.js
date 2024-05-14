import {html} from "lit";
import "./index.stories.css";

export default {
  title: "ZAppHeader",
  component: "z-app-header",

  parameters: {
    layout: "fullscreen",
  },

  argTypes: {
    "--app-header-content-max-width": {
      control: {
        type: "text",
      },
    },

    "flow": {
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
};

export function menuTemplate() {
  return html`
    <z-menu
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
      <z-menu-section slot="item">
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
      </z-menu-section>
      <z-menu-section slot="item">
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
      </z-menu-section>
      <a
        href=""
        slot="item"
        >Item 5</a
      >
    </z-menu>
    <z-menu
      slot="menu"
      floating
    >
      <a href>Menu label</a>
    </z-menu>
  `;
}

export function longMenuTemplate() {
  return html`
    <z-menu
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
      <z-menu-section slot="item">
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
      </z-menu-section>
      <z-menu-section slot="item">
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
      </z-menu-section>
      <a
        href=""
        slot="item"
        >Item 5</a
      >
    </z-menu>
    <z-menu
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
      <z-menu-section slot="item">
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
      </z-menu-section>
      <z-menu-section slot="item">
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
      </z-menu-section>
      <a
        href=""
        slot="item"
        >Item 5</a
      >
    </z-menu>
    <z-menu
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
      <z-menu-section slot="item">
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
      </z-menu-section>
      <z-menu-section slot="item">
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
      </z-menu-section>
      <a
        href=""
        slot="item"
        >Item 5</a
      >
    </z-menu>
    <z-menu
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
      <z-menu-section slot="item">
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
      </z-menu-section>
      <z-menu-section slot="item">
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
      </z-menu-section>
      <a
        href=""
        slot="item"
        >Item 5</a
      >
    </z-menu>
    <z-menu
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
      <z-menu-section slot="item">
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
      </z-menu-section>
      <z-menu-section slot="item">
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
      </z-menu-section>
      <a
        href=""
        slot="item"
        >Item 5</a
      >
    </z-menu>
    <z-menu
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
      <z-menu-section slot="item">
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
      </z-menu-section>
      <z-menu-section slot="item">
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
      </z-menu-section>
      <a
        href=""
        slot="item"
        >Item 5</a
      >
    </z-menu>
    <z-menu
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
      <z-menu-section slot="item">
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
      </z-menu-section>
      <z-menu-section slot="item">
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
      </z-menu-section>
      <a
        href=""
        slot="item"
        >Item 5</a
      >
    </z-menu>
  `;
}

export const Title = {
  render: (args) =>
    html`<z-app-header
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h1 slot="title">Applicazione</h1>
    </z-app-header>`,

  name: "Title",

  parameters: {
    controls: {
      exclude: ["flow"],
    },
  },
};

export const Subtitle = {
  render: (args) =>
    html`<z-app-header
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
    </z-app-header>`,

  name: "Subtitle",

  parameters: {
    controls: {
      exclude: ["flow"],
    },
  },
};

export const TopSubtitle = {
  render: (args) =>
    html`<z-app-header
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h2 slot="top-subtitle">Payoff dell'applicazione</h2>
      <h1 slot="title">Applicazione</h1>
    </z-app-header>`,

  name: "Top subtitle",

  parameters: {
    controls: {
      exclude: ["flow"],
    },
  },
};

export const Menu = {
  render: (args) =>
    html`<z-app-header
      flow=${args.flow}
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      ${menuTemplate()}
    </z-app-header>`,

  name: "Menu",
};

export const LongTitle = {
  render: (args) =>
    html`<z-app-header
      flow=${args.flow}
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h1 slot="title">Applicazione con nome veramente lungo che fa andare il menu a capo</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      ${menuTemplate()}
    </z-app-header>`,

  name: "Long title",
};

export const VeryLongMenu = {
  render: (args) =>
    html`<z-app-header
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      flow=${args.flow}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      ${longMenuTemplate()}
    </z-app-header>`,

  name: "(Very) Long menu",
};

export const OffcanvasMenu = {
  render: (args) =>
    html`<z-app-header
      flow="offcanvas"
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      ${longMenuTemplate()}
    </z-app-header>`,

  name: "Offcanvas menu",

  parameters: {
    controls: {
      exclude: ["flow"],
    },
  },
};

export const Stuck = {
  render: (args) =>
    html`<z-app-header
      stuck
      .flow=${args.flow}
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}; --app-header-top-offset: 0"
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      ${longMenuTemplate()}
    </z-app-header>`,

  name: "Stuck",

  decorators: [
    (Story) => html`
      <div style="padding: 16px var(--grid-margin)">Scroll to see <code>stuck</code> prop in action.</div>
      <div style="height: 200vh">${Story()}</div>
    `,
  ],

  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: "400px",
    },
  },
};

export const MaxWidth = {
  render: (args) =>
    html`<z-app-header
      stuck
      .flow=${args.flow}
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}; --app-header-top-offset: 0;"
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      ${menuTemplate()}
    </z-app-header>`,

  name: "Max width",

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
};

export const CoverHeroWithSlottedImage = {
  render: (args) =>
    html`<z-app-header
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
    </z-app-header>`,

  name: "Cover hero with slotted image",

  args: {
    overlay: true,
    hero: "",
  },
};

export const Searchbar = {
  render: (args) =>
    html`<z-app-header
      flow=${args.flow}
      enable-search
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      ${menuTemplate()}
    </z-app-header>`,

  name: "Searchbar",

  parameters: {
    controls: {
      exclude: ["searchPageUrl", "enableSearch"],
    },
  },
};

export const SearchPageButton = {
  render: (args) =>
    html`<z-app-header
      flow=${args.flow}
      enable-search
      search-page-url="https://www.zanichelli.it"
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      ${menuTemplate()}
    </z-app-header>`,

  name: "Search page button",

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
};
