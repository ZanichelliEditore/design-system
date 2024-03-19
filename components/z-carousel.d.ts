import type { Components, JSX } from "../types/components";

interface ZCarousel extends Components.ZCarousel, HTMLElement {}
export const ZCarousel: {
    prototype: ZCarousel;
    new (): ZCarousel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
