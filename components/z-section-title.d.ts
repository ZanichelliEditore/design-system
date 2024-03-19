import type { Components, JSX } from "../types/components";

interface ZSectionTitle extends Components.ZSectionTitle, HTMLElement {}
export const ZSectionTitle: {
    prototype: ZSectionTitle;
    new (): ZSectionTitle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
