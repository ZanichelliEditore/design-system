import type { Components, JSX } from "../types/components";

interface ZTableHeader extends Components.ZTableHeader, HTMLElement {}
export const ZTableHeader: {
    prototype: ZTableHeader;
    new (): ZTableHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
