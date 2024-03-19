import type { Components, JSX } from "../types/components";

interface ZListGroup extends Components.ZListGroup, HTMLElement {}
export const ZListGroup: {
    prototype: ZListGroup;
    new (): ZListGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
