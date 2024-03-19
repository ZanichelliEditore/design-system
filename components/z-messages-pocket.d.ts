import type { Components, JSX } from "../types/components";

interface ZMessagesPocket extends Components.ZMessagesPocket, HTMLElement {}
export const ZMessagesPocket: {
    prototype: ZMessagesPocket;
    new (): ZMessagesPocket;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
