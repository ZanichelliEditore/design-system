import type { Components, JSX } from "../types/components";

interface ZMyzCardBody extends Components.ZMyzCardBody, HTMLElement {}
export const ZMyzCardBody: {
    prototype: ZMyzCardBody;
    new (): ZMyzCardBody;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
