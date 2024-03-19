import type { Components, JSX } from "../types/components";

interface ZTag extends Components.ZTag, HTMLElement {}
export const ZTag: {
    prototype: ZTag;
    new (): ZTag;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
