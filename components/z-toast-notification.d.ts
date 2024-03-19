import type { Components, JSX } from "../types/components";

interface ZToastNotification extends Components.ZToastNotification, HTMLElement {}
export const ZToastNotification: {
    prototype: ZToastNotification;
    new (): ZToastNotification;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
