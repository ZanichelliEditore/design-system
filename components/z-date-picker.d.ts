import type { Components, JSX } from "../types/components";

interface ZDatePicker extends Components.ZDatePicker, HTMLElement {}
export const ZDatePicker: {
    prototype: ZDatePicker;
    new (): ZDatePicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
