import { html } from "lit";
import "../z-menu-section/index";
import "../z-menu/index";
import "./index";
import "./index.stories.css";
const StoryMeta = {
    title: "ZAppHeader",
    component: "z-app-header",
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
        "enableZLogo": false,
        "enableOffcanvas": false,
    },
};
export default StoryMeta;
const menuTemplate = () => {
    return html `
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
          slot="section"
          >Item 3.1</a
        >
        <a
          href=""
          slot="section"
          >Item 3.2</a
        >
      </z-menu-section>
      <z-menu-section slot="item">
        <h3>Item 4</h3>
        <a
          href=""
          slot="section"
          >Item 4.1</a
        >
        <a
          href=""
          slot="section"
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
          slot="section"
          >Item 3.1</a
        >
        <a
          href=""
          slot="section"
          >Item 3.2</a
        >
      </z-menu-section>
      <z-menu-section slot="item">
        <h3>Item 4</h3>
        <a
          href=""
          slot="section"
          >Item 4.1</a
        >
        <a
          href=""
          slot="section"
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
          slot="section"
          >Item 3.1</a
        >
        <a
          href=""
          slot="section"
          >Item 3.2</a
        >
      </z-menu-section>
      <z-menu-section slot="item">
        <h3>Item 4</h3>
        <a
          href=""
          slot="section"
          >Item 4.1</a
        >
        <a
          href=""
          slot="section"
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
};
export const Title = {
    parameters: {
        controls: {
            exclude: ["enableOffcanvas"],
        },
    },
    render: (args) => html `<z-app-header
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      .enableZLogo=${args.enableZLogo}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h1 slot="title">Applicazione</h1>
    </z-app-header>`,
};
export const ProductLogo = {
    parameters: {
        controls: {
            exclude: ["enableOffcanvas"],
        },
    },
    render: (args) => html `<z-app-header
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      .enableZLogo=${args.enableZLogo}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h1 slot="title">Applicazione</h1>
      <img
        slot="product-logo"
        src="src/assets/orientamento.svg"
        alt=""
      />
    </z-app-header>`,
};
export const TopTitle = {
    parameters: {
        controls: {
            exclude: ["enableOffcanvas", "enableZLogo"],
        },
    },
    render: (args) => html `<z-app-header
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h2 slot="top-subtitle">Payoff dell'applicazione</h2>
      <h1 slot="title">Applicazione</h1>
    </z-app-header>`,
};
export const MenuWithTopTitle = {
    parameters: {
        controls: {
            exclude: ["enableZLogo"],
        },
    },
    args: {
        enableOffcanvas: true,
    },
    render: (args) => html `<z-app-header
      .enableOffcanvas=${args.enableOffcanvas}
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h2 slot="top-subtitle">Payoff dell'applicazione</h2>
      <h1 slot="title">Applicazione</h1>
      ${menuTemplate()}
    </z-app-header>`,
};
export const LongTitle = {
    parameters: {
        controls: {
            exclude: ["enableOffcanvas", "enableZLogo", "enableSearch", "searchPageUrl"],
        },
    },
    render: (args) => html `<z-app-header style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}">
      <h1 slot="title">Fondamenti di fisica 8e - Meccanica, Onde, Termodinamica, Elettromagnetismo, Ottica</h1>
      <h2 slot="top-subtitle">Jearl Walker, David Halliday, Robert Resnick</h2>
      ${menuTemplate()}
    </z-app-header>`,
};
export const OffcanvasMenu = {
    args: {
        enableOffcanvas: true,
    },
    render: (args) => html `<z-app-header
      .enableOffcanvas=${args.enableOffcanvas}
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      .enableZLogo=${args.enableZLogo}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h1 slot="title">Applicazione</h1>
      ${menuTemplate()}
    </z-app-header>`,
};
export const Stuck = {
    decorators: [
        (Story) => html `
      <div style="padding: 16px var(--grid-margin)">Scroll to see <code>stuck</code> prop in action.</div>
      <div style="height: 200vh">${Story()}</div>
    `,
    ],
    parameters: {
        docs: {
            inlineStories: false,
            iframeHeight: "400px",
        },
        controls: {
            exclude: ["enableOffcanvas"],
        },
    },
    render: (args) => html `<z-app-header
      stuck
      .enableZLogo=${args.enableZLogo}
      .enableSearch=${args.enableSearch}
      .searchPageUrl=${args.searchPageUrl}
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}; --app-header-top-offset: 0"
    >
      <h1 slot="title">Applicazione</h1>
      ${menuTemplate()}
    </z-app-header>`,
};
export const SearchPageButton = {
    parameters: {
        controls: {
            exclude: ["searchPageUrl", "enableSearch", "enableOffcanvas"],
        },
    },
    decorators: [
        (Story) => html `
      <div style="padding: 16px var(--grid-margin)">
        The prop <code>searchPageUrl</code> only affects the component in tablet and mobile viewports.
      </div>
      ${Story()}
    `,
    ],
    render: (args) => html `<z-app-header
      enable-search
      .enableZLogo=${args.enableZLogo}
      search-page-url="https://www.zanichelli.it"
      style="--app-header-content-max-width: ${args["--app-header-content-max-width"]}"
    >
      <h1 slot="title">Applicazione</h1>
      <h2 slot="subtitle">Payoff dell'applicazione</h2>
      ${menuTemplate()}
    </z-app-header>`,
};
//# sourceMappingURL=index.stories.js.map
