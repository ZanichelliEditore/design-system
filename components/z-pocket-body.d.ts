import type { Components, JSX } from "../types/components";

interface ZPocketBody extends Components.ZPocketBody, HTMLElement {}
export const ZPocketBody: {
    prototype: ZPocketBody;
    new (): ZPocketBody;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
