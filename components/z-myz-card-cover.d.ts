import type { Components, JSX } from "../types/components";

interface ZMyzCardCover extends Components.ZMyzCardCover, HTMLElement {}
export const ZMyzCardCover: {
    prototype: ZMyzCardCover;
    new (): ZMyzCardCover;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
