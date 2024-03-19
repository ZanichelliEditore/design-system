import type { Components, JSX } from "../types/components";

interface ZAccordion extends Components.ZAccordion, HTMLElement {}
export const ZAccordion: {
    prototype: ZAccordion;
    new (): ZAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
