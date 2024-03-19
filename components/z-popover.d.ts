import type { Components, JSX } from "../types/components";

interface ZPopover extends Components.ZPopover, HTMLElement {}
export const ZPopover: {
    prototype: ZPopover;
    new (): ZPopover;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
