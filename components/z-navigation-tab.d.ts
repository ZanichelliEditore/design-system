import type { Components, JSX } from "../types/components";

interface ZNavigationTab extends Components.ZNavigationTab, HTMLElement {}
export const ZNavigationTab: {
    prototype: ZNavigationTab;
    new (): ZNavigationTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
