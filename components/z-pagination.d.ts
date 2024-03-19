import type { Components, JSX } from "../types/components";

interface ZPagination extends Components.ZPagination, HTMLElement {}
export const ZPagination: {
    prototype: ZPagination;
    new (): ZPagination;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
