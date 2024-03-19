import type { Components, JSX } from "../types/components";

interface ZInputMessage extends Components.ZInputMessage, HTMLElement {}
export const ZInputMessage: {
    prototype: ZInputMessage;
    new (): ZInputMessage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
