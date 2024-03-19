import type { Components, JSX } from "../types/components";

interface ZMyzCardInfo extends Components.ZMyzCardInfo, HTMLElement {}
export const ZMyzCardInfo: {
    prototype: ZMyzCardInfo;
    new (): ZMyzCardInfo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
