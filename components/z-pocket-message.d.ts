import type { Components, JSX } from "../types/components";

interface ZPocketMessage extends Components.ZPocketMessage, HTMLElement {}
export const ZPocketMessage: {
    prototype: ZPocketMessage;
    new (): ZPocketMessage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
