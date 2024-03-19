import type { Components, JSX } from "../types/components";

interface ZTableHeaderRow extends Components.ZTableHeaderRow, HTMLElement {}
export const ZTableHeaderRow: {
    prototype: ZTableHeaderRow;
    new (): ZTableHeaderRow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
