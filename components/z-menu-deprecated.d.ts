import type { Components, JSX } from "../types/components";

interface ZMenuDeprecated extends Components.ZMenuDeprecated, HTMLElement {}
export const ZMenuDeprecated: {
    prototype: ZMenuDeprecated;
    new (): ZMenuDeprecated;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
