import type { Components, JSX } from "../types/components";

interface ZMyzList extends Components.ZMyzList, HTMLElement {}
export const ZMyzList: {
    prototype: ZMyzList;
    new (): ZMyzList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
