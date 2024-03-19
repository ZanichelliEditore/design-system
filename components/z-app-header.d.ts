import type { Components, JSX } from "../types/components";

interface ZAppHeader extends Components.ZAppHeader, HTMLElement {}
export const ZAppHeader: {
    prototype: ZAppHeader;
    new (): ZAppHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
