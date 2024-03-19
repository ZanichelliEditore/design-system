import type { Components, JSX } from "../types/components";

interface ZSlideshow extends Components.ZSlideshow, HTMLElement {}
export const ZSlideshow: {
    prototype: ZSlideshow;
    new (): ZSlideshow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
