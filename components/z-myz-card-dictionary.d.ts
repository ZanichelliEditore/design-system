import type { Components, JSX } from "../types/components";

interface ZMyzCardDictionary extends Components.ZMyzCardDictionary, HTMLElement {}
export const ZMyzCardDictionary: {
    prototype: ZMyzCardDictionary;
    new (): ZMyzCardDictionary;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
