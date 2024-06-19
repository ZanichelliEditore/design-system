import { type TemplateResult } from "lit";
import { type ZNavigationTabs } from ".";
import { NavigationTabsOrientation, NavigationTabsSize } from "../../beans/index";
import { CSSVarsArguments } from "../../utils/storybook-utils";
import "../z-icon/index";
import "./index";
import "./index.stories.css";
type ZNavigationTabsStoriesArgs = ZNavigationTabs & CSSVarsArguments<"z-navigation-tabs-nav-buttons-bg" | "z-navigation-tabs-nav-buttons-fg">;
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        orientation: {
            options: NavigationTabsOrientation[];
            control: {
                type: "inline-radio";
            };
        };
        "--z-navigation-tabs-nav-buttons-bg": import("@storybook/types").Args;
        "--z-navigation-tabs-nav-buttons-fg": import("@storybook/types").Args;
    };
    args: {
        "--z-navigation-tabs-nav-buttons-bg": any;
        "--z-navigation-tabs-nav-buttons-fg": any;
    };
};
export default StoryMeta;
export declare const Horizontal: {
    argTypes: {
        size: {
            options: NavigationTabsSize[];
            control: {
                type: "inline-radio";
            };
        };
    };
    args: {
        orientation: NavigationTabsOrientation.HORIZONTAL;
        size: NavigationTabsSize.BIG;
        ariaLabel: string;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZNavigationTabsStoriesArgs) => TemplateResult<1>;
};
/**
 * When orientation is set to `VERTICAL`, the text of slotted tabs is hidden by default.
 * Be sure to put an icon inside the tab to have something visible and don't forget to put an `aria-label` to provide a description for screen readers.
 */
export declare const Vertical: {
    args: {
        orientation: NavigationTabsOrientation.VERTICAL;
        ariaLabel: string;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZNavigationTabsStoriesArgs) => TemplateResult<1>;
};
/**
 * This story provides an example of how to handle a `ZNavigationTabs` with switchable `tabpanel`s, which is the most common use for the navigation tabs.
 * Each panel must have the `tabpanel` role and the `aria-labelledby` attribute, referencing the tab that controls it (unless a different label is provided using `aria-label`).
 * Similarly, the `aria-controls` attribute must be set on the tabs with the `id` of the controlled panel.
 *
 * For more details check the documentation: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab\_role
 */
export declare const Tabpanels: {
    args: {
        ariaLabel: string;
        orientation: NavigationTabsOrientation.HORIZONTAL;
    };
    render: (args: ZNavigationTabsStoriesArgs) => TemplateResult<1>;
};
