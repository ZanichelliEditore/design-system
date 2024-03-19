import type { Components, JSX } from "../types/components";

interface ZThead extends Components.ZThead, HTMLElement {}
export const ZThead: {
    prototype: ZThead;
    new (): ZThead;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
