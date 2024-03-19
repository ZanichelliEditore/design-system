import type { Components, JSX } from "../types/components";

interface ZTd extends Components.ZTd, HTMLElement {}
export const ZTd: {
    prototype: ZTd;
    new (): ZTd;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
