import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { NavigationTabsOrientation, NavigationTabsSize } from "../../beans/index";
import { getColorTokenArgConfig } from "../../utils/storybook-utils";
import "../z-icon/index";
import "./index";
import "./index.stories.css";
const StoryMeta = {
    title: "ZNavigationTabs",
    component: "z-navigation-tabs",
    argTypes: {
        "orientation": {
            options: Object.values(NavigationTabsOrientation),
            control: {
                type: "inline-radio",
            },
        },
        "--z-navigation-tabs-nav-buttons-bg": getColorTokenArgConfig(),
        "--z-navigation-tabs-nav-buttons-fg": getColorTokenArgConfig(),
    },
    args: {
        "--z-navigation-tabs-nav-buttons-bg": undefined,
        "--z-navigation-tabs-nav-buttons-fg": undefined,
    },
};
export default StoryMeta;
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelector("z-navigation-tabs");
    tabs === null || tabs === void 0 ? void 0 : tabs.addEventListener("selected", ({ detail: selectedTab }) => {
        var _a, _b;
        const controlledPanel = (_b = (_a = tabs.querySelectorAll('[role="tab"]')) === null || _a === void 0 ? void 0 : _a[selectedTab]) === null || _b === void 0 ? void 0 : _b.getAttribute("aria-controls");
        const panels = Array.from(document.querySelectorAll('[role="tabpanel"]'));
        panels.forEach((panel) => (panel.hidden = true));
        const panelToActivate = panels.find((panel) => panel.id === controlledPanel);
        if (panelToActivate) {
            panelToActivate.hidden = false;
        }
    });
});
const tabsTemplate = () => html `<button>
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
    </a>`;
export const Horizontal = {
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
    render: (args) => html `
    <z-navigation-tabs
      orientation=${args.orientation}
      size=${args.size}
      .ariaLabel=${args.ariaLabel}
      style=${styleMap({
        "--z-navigation-tabs-nav-buttons-bg": args["--z-navigation-tabs-nav-buttons-bg"],
        "--z-navigation-tabs-nav-buttons-fg": args["--z-navigation-tabs-nav-buttons-fg"],
    })}
    >
      ${tabsTemplate()}
    </z-navigation-tabs>
  `,
};
/**
 * When orientation is set to `VERTICAL`, the text of slotted tabs is hidden by default.
 * Be sure to put an icon inside the tab to have something visible and don't forget to put an `aria-label` to provide a description for screen readers.
 */
export const Vertical = {
    args: {
        orientation: NavigationTabsOrientation.VERTICAL,
        ariaLabel: "",
    },
    parameters: {
        controls: {
            exclude: ["orientation"],
        },
    },
    render: (args) => html `
    <z-navigation-tabs
      orientation=${args.orientation}
      .ariaLabel=${args.ariaLabel}
      style=${styleMap({
        "--z-navigation-tabs-nav-buttons-bg": args["--z-navigation-tabs-nav-buttons-bg"],
        "--z-navigation-tabs-nav-buttons-fg": args["--z-navigation-tabs-nav-buttons-fg"],
    })}
    >
      ${tabsTemplate()}
    </z-navigation-tabs>
  `,
};
/**
 * This story provides an example of how to handle a `ZNavigationTabs` with switchable `tabpanel`s, which is the most common use for the navigation tabs.
 * Each panel must have the `tabpanel` role and the `aria-labelledby` attribute, referencing the tab that controls it (unless a different label is provided using `aria-label`).
 * Similarly, the `aria-controls` attribute must be set on the tabs with the `id` of the controlled panel.
 *
 * For more details check the documentation: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab\_role
 */
export const Tabpanels = {
    args: {
        ariaLabel: "",
        orientation: NavigationTabsOrientation.HORIZONTAL,
    },
    render: (args) => html `
    <div class="panels-story-wrapper ${args.orientation}">
      <z-navigation-tabs
        orientation=${args.orientation}
        size=${NavigationTabsSize.BIG}
        .ariaLabel=${args.ariaLabel}
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
          <z-icon name="house" />
          <span>Home</span>
        </button>
        <button
          aria-controls="panel-2"
          aria-label="info"
          id="tab-2"
        >
          <z-icon name="info" />
          <span>Info</span>
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
};
//# sourceMappingURL=index.stories.js.map
