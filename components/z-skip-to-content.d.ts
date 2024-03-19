import type { Components, JSX } from "../types/components";

interface ZSkipToContent extends Components.ZSkipToContent, HTMLElement {}
export const ZSkipToContent: {
    prototype: ZSkipToContent;
    new (): ZSkipToContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
