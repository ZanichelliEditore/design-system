import type { Components, JSX } from "../types/components";

interface ZNavigationTabs extends Components.ZNavigationTabs, HTMLElement {}
export const ZNavigationTabs: {
    prototype: ZNavigationTabs;
    new (): ZNavigationTabs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
