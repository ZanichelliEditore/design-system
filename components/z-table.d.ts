import type { Components, JSX } from "../types/components";

interface ZTable extends Components.ZTable, HTMLElement {}
export const ZTable: {
    prototype: ZTable;
    new (): ZTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
