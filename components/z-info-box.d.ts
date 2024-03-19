import type { Components, JSX } from "../types/components";

interface ZInfoBox extends Components.ZInfoBox, HTMLElement {}
export const ZInfoBox: {
    prototype: ZInfoBox;
    new (): ZInfoBox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
