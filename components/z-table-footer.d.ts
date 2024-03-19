import type { Components, JSX } from "../types/components";

interface ZTableFooter extends Components.ZTableFooter, HTMLElement {}
export const ZTableFooter: {
    prototype: ZTableFooter;
    new (): ZTableFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
