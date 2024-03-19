import type { Components, JSX } from "../types/components";

interface ZPanelElem extends Components.ZPanelElem, HTMLElement {}
export const ZPanelElem: {
    prototype: ZPanelElem;
    new (): ZPanelElem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
