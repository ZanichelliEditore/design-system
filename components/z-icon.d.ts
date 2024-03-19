import type { Components, JSX } from "../types/components";

interface ZIcon extends Components.ZIcon, HTMLElement {}
export const ZIcon: {
    prototype: ZIcon;
    new (): ZIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
