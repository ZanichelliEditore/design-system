import type { Components, JSX } from "../types/components";

interface ZButtonSort extends Components.ZButtonSort, HTMLElement {}
export const ZButtonSort: {
    prototype: ZButtonSort;
    new (): ZButtonSort;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
