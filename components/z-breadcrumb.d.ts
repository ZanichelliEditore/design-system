import type { Components, JSX } from "../types/components";

interface ZBreadcrumb extends Components.ZBreadcrumb, HTMLElement {}
export const ZBreadcrumb: {
    prototype: ZBreadcrumb;
    new (): ZBreadcrumb;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
