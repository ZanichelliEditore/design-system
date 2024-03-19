import type { Components, JSX } from "../types/components";

interface ZPocket extends Components.ZPocket, HTMLElement {}
export const ZPocket: {
    prototype: ZPocket;
    new (): ZPocket;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
