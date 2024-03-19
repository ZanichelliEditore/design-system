import type { Components, JSX } from "../types/components";

interface ZVisuallyHidden extends Components.ZVisuallyHidden, HTMLElement {}
export const ZVisuallyHidden: {
    prototype: ZVisuallyHidden;
    new (): ZVisuallyHidden;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
