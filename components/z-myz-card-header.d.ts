import type { Components, JSX } from "../types/components";

interface ZMyzCardHeader extends Components.ZMyzCardHeader, HTMLElement {}
export const ZMyzCardHeader: {
    prototype: ZMyzCardHeader;
    new (): ZMyzCardHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
