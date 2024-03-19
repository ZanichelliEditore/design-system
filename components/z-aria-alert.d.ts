import type { Components, JSX } from "../types/components";

interface ZAriaAlert extends Components.ZAriaAlert, HTMLElement {}
export const ZAriaAlert: {
    prototype: ZAriaAlert;
    new (): ZAriaAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
