import type { Components, JSX } from "../types/components";

interface ZTh extends Components.ZTh, HTMLElement {}
export const ZTh: {
    prototype: ZTh;
    new (): ZTh;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
