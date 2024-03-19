import type { Components, JSX } from "../types/components";

interface ZPocketHeader extends Components.ZPocketHeader, HTMLElement {}
export const ZPocketHeader: {
    prototype: ZPocketHeader;
    new (): ZPocketHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
