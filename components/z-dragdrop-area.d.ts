import type { Components, JSX } from "../types/components";

interface ZDragdropArea extends Components.ZDragdropArea, HTMLElement {}
export const ZDragdropArea: {
    prototype: ZDragdropArea;
    new (): ZDragdropArea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
