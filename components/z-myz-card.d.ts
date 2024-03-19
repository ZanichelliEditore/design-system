import type { Components, JSX } from "../types/components";

interface ZMyzCard extends Components.ZMyzCard, HTMLElement {}
export const ZMyzCard: {
    prototype: ZMyzCard;
    new (): ZMyzCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
