import type { Components, JSX } from "../types/components";

interface ZInput extends Components.ZInput, HTMLElement {}
export const ZInput: {
    prototype: ZInput;
    new (): ZInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
