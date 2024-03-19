import type { Components, JSX } from "../types/components";

interface ZMyzCardAlert extends Components.ZMyzCardAlert, HTMLElement {}
export const ZMyzCardAlert: {
    prototype: ZMyzCardAlert;
    new (): ZMyzCardAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
