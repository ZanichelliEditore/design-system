import type { Components, JSX } from "../types/components";

interface ZList extends Components.ZList, HTMLElement {}
export const ZList: {
    prototype: ZList;
    new (): ZList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
