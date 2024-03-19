import type { Components, JSX } from "../types/components";

interface ZTfoot extends Components.ZTfoot, HTMLElement {}
export const ZTfoot: {
    prototype: ZTfoot;
    new (): ZTfoot;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
