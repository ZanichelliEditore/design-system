import type { Components, JSX } from "../types/components";

interface ZToggleButton extends Components.ZToggleButton, HTMLElement {}
export const ZToggleButton: {
    prototype: ZToggleButton;
    new (): ZToggleButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
