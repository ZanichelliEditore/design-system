import type { Components, JSX } from "../types/components";

interface ZMenu extends Components.ZMenu, HTMLElement {}
export const ZMenu: {
    prototype: ZMenu;
    new (): ZMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
