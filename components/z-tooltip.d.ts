import type { Components, JSX } from "../types/components";

interface ZTooltip extends Components.ZTooltip, HTMLElement {}
export const ZTooltip: {
    prototype: ZTooltip;
    new (): ZTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
