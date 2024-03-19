import type { Components, JSX } from "../types/components";

interface ZTableRow extends Components.ZTableRow, HTMLElement {}
export const ZTableRow: {
    prototype: ZTableRow;
    new (): ZTableRow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
