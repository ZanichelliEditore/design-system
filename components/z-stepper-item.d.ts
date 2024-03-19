import type { Components, JSX } from "../types/components";

interface ZStepperItem extends Components.ZStepperItem, HTMLElement {}
export const ZStepperItem: {
    prototype: ZStepperItem;
    new (): ZStepperItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
