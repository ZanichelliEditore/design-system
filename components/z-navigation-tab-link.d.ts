import type { Components, JSX } from "../types/components";

interface ZNavigationTabLink extends Components.ZNavigationTabLink, HTMLElement {}
export const ZNavigationTabLink: {
    prototype: ZNavigationTabLink;
    new (): ZNavigationTabLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
