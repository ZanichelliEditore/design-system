import type { Components, JSX } from "../types/components";

interface ZCombobox extends Components.ZCombobox, HTMLElement {}
export const ZCombobox: {
    prototype: ZCombobox;
    new (): ZCombobox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
