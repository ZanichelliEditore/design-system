import type { Components, JSX } from "../types/components";

interface ZSearchbar extends Components.ZSearchbar, HTMLElement {}
export const ZSearchbar: {
    prototype: ZSearchbar;
    new (): ZSearchbar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
