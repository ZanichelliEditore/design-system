import type { Components, JSX } from "../types/components";

interface ZTableCell extends Components.ZTableCell, HTMLElement {}
export const ZTableCell: {
    prototype: ZTableCell;
    new (): ZTableCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
