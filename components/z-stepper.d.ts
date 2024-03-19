import type { Components, JSX } from "../types/components";

interface ZStepper extends Components.ZStepper, HTMLElement {}
export const ZStepper: {
    prototype: ZStepper;
    new (): ZStepper;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
