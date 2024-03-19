import type { Components, JSX } from "../types/components";

interface ZSelect extends Components.ZSelect, HTMLElement {}
export const ZSelect: {
    prototype: ZSelect;
    new (): ZSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
