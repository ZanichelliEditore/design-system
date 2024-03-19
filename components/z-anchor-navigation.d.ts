import type { Components, JSX } from "../types/components";

interface ZAnchorNavigation extends Components.ZAnchorNavigation, HTMLElement {}
export const ZAnchorNavigation: {
    prototype: ZAnchorNavigation;
    new (): ZAnchorNavigation;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
