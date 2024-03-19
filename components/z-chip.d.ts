import type { Components, JSX } from "../types/components";

interface ZChip extends Components.ZChip, HTMLElement {}
export const ZChip: {
    prototype: ZChip;
    new (): ZChip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
