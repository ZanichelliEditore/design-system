import type { Components, JSX } from "../types/components";

interface ZDivider extends Components.ZDivider, HTMLElement {}
export const ZDivider: {
    prototype: ZDivider;
    new (): ZDivider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
