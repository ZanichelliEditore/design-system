import type { Components, JSX } from "../types/components";

interface ZTbody extends Components.ZTbody, HTMLElement {}
export const ZTbody: {
    prototype: ZTbody;
    new (): ZTbody;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
