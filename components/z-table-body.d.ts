import type { Components, JSX } from "../types/components";

interface ZTableBody extends Components.ZTableBody, HTMLElement {}
export const ZTableBody: {
    prototype: ZTableBody;
    new (): ZTableBody;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
