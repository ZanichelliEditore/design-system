import type { Components, JSX } from "../types/components";

interface ZToggleSwitch extends Components.ZToggleSwitch, HTMLElement {}
export const ZToggleSwitch: {
    prototype: ZToggleSwitch;
    new (): ZToggleSwitch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
