import type { Components, JSX } from "../types/components";

interface ZNotification extends Components.ZNotification, HTMLElement {}
export const ZNotification: {
    prototype: ZNotification;
    new (): ZNotification;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
