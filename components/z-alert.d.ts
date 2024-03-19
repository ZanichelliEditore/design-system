import type { Components, JSX } from "../types/components";

interface ZAlert extends Components.ZAlert, HTMLElement {}
export const ZAlert: {
    prototype: ZAlert;
    new (): ZAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
