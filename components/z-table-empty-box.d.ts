import type { Components, JSX } from "../types/components";

interface ZTableEmptyBox extends Components.ZTableEmptyBox, HTMLElement {}
export const ZTableEmptyBox: {
    prototype: ZTableEmptyBox;
    new (): ZTableEmptyBox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
