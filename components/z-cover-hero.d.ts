import type { Components, JSX } from "../types/components";

interface ZCoverHero extends Components.ZCoverHero, HTMLElement {}
export const ZCoverHero: {
    prototype: ZCoverHero;
    new (): ZCoverHero;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
