import type { Components, JSX } from "../types/components";

interface ZCard extends Components.ZCard, HTMLElement {}
export const ZCard: {
    prototype: ZCard;
    new (): ZCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
