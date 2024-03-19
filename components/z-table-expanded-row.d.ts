import type { Components, JSX } from "../types/components";

interface ZTableExpandedRow extends Components.ZTableExpandedRow, HTMLElement {}
export const ZTableExpandedRow: {
    prototype: ZTableExpandedRow;
    new (): ZTableExpandedRow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
