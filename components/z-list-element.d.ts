import type { Components, JSX } from "../types/components";

interface ZListElement extends Components.ZListElement, HTMLElement {}
export const ZListElement: {
    prototype: ZListElement;
    new (): ZListElement;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
