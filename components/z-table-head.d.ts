import type { Components, JSX } from "../types/components";

interface ZTableHead extends Components.ZTableHead, HTMLElement {}
export const ZTableHead: {
    prototype: ZTableHead;
    new (): ZTableHead;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
