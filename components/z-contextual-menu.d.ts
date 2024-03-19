import type { Components, JSX } from "../types/components";

interface ZContextualMenu extends Components.ZContextualMenu, HTMLElement {}
export const ZContextualMenu: {
    prototype: ZContextualMenu;
    new (): ZContextualMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
