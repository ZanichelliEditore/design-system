import type { Components, JSX } from "../types/components";

interface ZRangePicker extends Components.ZRangePicker, HTMLElement {}
export const ZRangePicker: {
    prototype: ZRangePicker;
    new (): ZRangePicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
