import type { Components, JSX } from "../types/components";

interface ZMyzCardList extends Components.ZMyzCardList, HTMLElement {}
export const ZMyzCardList: {
    prototype: ZMyzCardList;
    new (): ZMyzCardList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
