import type { Components, JSX } from "../types/components";

interface ZInfoReveal extends Components.ZInfoReveal, HTMLElement {}
export const ZInfoReveal: {
    prototype: ZInfoReveal;
    new (): ZInfoReveal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
