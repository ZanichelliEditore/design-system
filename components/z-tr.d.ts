import type { Components, JSX } from "../types/components";

interface ZTr extends Components.ZTr, HTMLElement {}
export const ZTr: {
    prototype: ZTr;
    new (): ZTr;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
