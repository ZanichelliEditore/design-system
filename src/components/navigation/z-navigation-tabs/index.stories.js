import {html} from "lit";
import {NavigationTabsSize, NavigationTabsOrientation} from "../../../beans/index";
import {getColorVars, getColorVarsLabels} from "../../../utils/storybook-utils";
import {styleMap} from "lit/directives/style-map.js";
import "./index.stories.css";

export default {
  title: "ZNavigationTabs",
  component: "z-navigation-tabs",

  argTypes: {
    "orientation": {
      options: Object.values(NavigationTabsOrientation),

      control: {
        type: "inline-radio",
      },
    },

    "ariaLabel": {
      control: {
        type: "text",
      },
    },

    "--z-navigation-tabs-nav-buttons-bg": {
      control: {
        type: "select",
        labels: getColorVarsLabels(),
      },

      options: getColorVars(),
    },

    "--z-navigation-tabs-nav-buttons-fg": {
      control: {
        type: "select",
        labels: getColorVarsLabels(),
      },

      options: getColorVars(),
    },
  },

  args: {
    "--z-navigation-tabs-nav-buttons-bg": undefined,
    "--z-navigation-tabs-nav-buttons-fg": undefined,
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelector("z-navigation-tabs");
  tabs?.addEventListener("selected", ({detail: selectedTab}) => {
    const controlledPanel = tabs.querySelectorAll('[role="tab"]')?.[selectedTab]?.getAttribute("aria-controls");
    const panels = Array.from(document.querySelectorAll('[role="tabpanel"]'));
    panels.forEach((panel) => (panel.hidden = true));
    const panelToActivate = panels.find((panel) => panel.id === controlledPanel);
    if (panelToActivate) {
      panelToActivate.hidden = false;
    }
  });
});

export const Horizontal = {
  render: (args) => html`
    <z-navigation-tabs
      orientation=${args.orientation}
      size=${args.size}
      aria-label=${args.ariaLabel}
      style=${styleMap({
        "--z-navigation-tabs-nav-buttons-bg": args["--z-navigation-tabs-nav-buttons-bg"],
        "--z-navigation-tabs-nav-buttons-fg": args["--z-navigation-tabs-nav-buttons-fg"],
      })}
    >
      <button>
        <z-icon name="house"></z-icon>
        <span>Home</span>
      </button>
      <button>
        <z-icon name="map"></z-icon>
        <span>Maps</span>
      </button>
      <button disabled>
        <z-icon name="download"></z-icon>
        <span>Download</span>
      </button>
      <button>
        <z-icon name="user-avatar"></z-icon>
        <span>Users</span>
      </button>
      <button>
        <z-icon name="artist"></z-icon>
        <span>Artisti</span>
      </button>
      <a
        href="https://www.google.com"
        target="_blank"
        title="Vai a Google"
      >
        <z-icon name="arrow-quad-north-east"></z-icon>
        <span>Link esterno</span>
      </a>
    </z-navigation-tabs>
  `,

  name: "Horizontal",

  argTypes: {
    size: {
      options: Object.values(NavigationTabsSize),

      control: {
        type: "inline-radio",
      },
    },
  },

  args: {
    orientation: NavigationTabsOrientation.HORIZONTAL,
    size: NavigationTabsSize.BIG,
    ariaLabel: "",
  },

  parameters: {
    controls: {
      exclude: ["orientation"],
    },
  },
};

export const Vertical = {
  render: (args) => html`
    <z-navigation-tabs
      orientation=${args.orientation}
      aria-label=${args.ariaLabel}
      style=${styleMap({
        "--z-navigation-tabs-nav-buttons-bg": args["--z-navigation-tabs-nav-buttons-bg"],
        "--z-navigation-tabs-nav-buttons-fg": args["--z-navigation-tabs-nav-buttons-fg"],
      })}
    >
      <button>
        <z-icon name="house"></z-icon>
        <span>Home</span>
      </button>
      <button>
        <z-icon name="map"></z-icon>
        <span>Maps</span>
      </button>
      <button disabled>
        <z-icon name="download"></z-icon>
        <span>Download</span>
      </button>
      <button>
        <z-icon name="user-avatar"></z-icon>
        <span>Users</span>
      </button>
      <button>
        <z-icon name="artist"></z-icon>
        <span>Artisti</span>
      </button>
      <a
        href="https://www.google.com"
        target="_blank"
        title="Vai a Google"
      >
        <z-icon name="arrow-quad-north-east"></z-icon>
        <span>Link esterno</span>
      </a>
    </z-navigation-tabs>
  `,

  name: "Vertical",

  args: {
    orientation: NavigationTabsOrientation.VERTICAL,
    ariaLabel: "",
  },

  parameters: {
    controls: {
      exclude: ["orientation"],
    },
  },
};

export const WithTabpanels = {
  render: (args) => html`
    <div class="panels-story-wrapper ${args.orientation}">
      <z-navigation-tabs
        orientation=${args.orientation}
        size=${NavigationTabsSize.BIG}
        aria-label=${args.ariaLabel}
        .selectedTab=${0}
        style=${styleMap({
          "--z-navigation-tabs-nav-buttons-bg": args["--z-navigation-tabs-nav-buttons-bg"],
          "--z-navigation-tabs-nav-buttons-fg": args["--z-navigation-tabs-nav-buttons-fg"],
        })}
      >
        <button
          aria-controls="panel-1"
          aria-label="home"
          id="tab-1"
        >
          <z-icon name="house" />Home
        </button>
        <button
          aria-controls="panel-2"
          aria-label="info"
          id="tab-2"
        >
          <z-icon name="info" />Info
        </button>
      </z-navigation-tabs>
      <div
        class="panel"
        id="panel-1"
        role="tabpanel"
        aria-labelledby="tab-1"
      >
        <span>Pannello 1</span>
        <span><z-icon name="house-filled" /></span>
      </div>
      <div
        class="panel"
        id="panel-2"
        role="tabpanel"
        aria-labelledby="tab-2"
        hidden
      >
        <span>Pannello 2</span>
        <span><z-icon name="info-filled" /></span>
      </div>
    </div>
  `,

  name: "With tabpanels",

  args: {
    ariaLabel: "",
    orientation: NavigationTabsOrientation.HORIZONTAL,
  },
};
