import type { Components, JSX } from "../types/components";

interface ZMyzListItem extends Components.ZMyzListItem, HTMLElement {}
export const ZMyzListItem: {
    prototype: ZMyzListItem;
    new (): ZMyzListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
