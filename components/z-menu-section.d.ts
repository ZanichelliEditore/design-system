import type { Components, JSX } from "../types/components";

interface ZMenuSection extends Components.ZMenuSection, HTMLElement {}
export const ZMenuSection: {
    prototype: ZMenuSection;
    new (): ZMenuSection;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
