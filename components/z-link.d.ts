import type { Components, JSX } from "../types/components";

interface ZLink extends Components.ZLink, HTMLElement {}
export const ZLink: {
    prototype: ZLink;
    new (): ZLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
