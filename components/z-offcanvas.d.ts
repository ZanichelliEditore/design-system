import type { Components, JSX } from "../types/components";

interface ZOffcanvas extends Components.ZOffcanvas, HTMLElement {}
export const ZOffcanvas: {
    prototype: ZOffcanvas;
    new (): ZOffcanvas;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
