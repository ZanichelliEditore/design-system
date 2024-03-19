import type { Components, JSX } from "../types/components";

interface ZBookCard extends Components.ZBookCard, HTMLElement {}
export const ZBookCard: {
    prototype: ZBookCard;
    new (): ZBookCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
