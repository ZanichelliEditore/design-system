import type { Components, JSX } from "../types/components";

interface ZLogo extends Components.ZLogo, HTMLElement {}
export const ZLogo: {
    prototype: ZLogo;
    new (): ZLogo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
