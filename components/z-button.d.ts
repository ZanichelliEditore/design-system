import type { Components, JSX } from "../types/components";

interface ZButton extends Components.ZButton, HTMLElement {}
export const ZButton: {
    prototype: ZButton;
    new (): ZButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
