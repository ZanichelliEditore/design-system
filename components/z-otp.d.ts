import type { Components, JSX } from "../types/components";

interface ZOtp extends Components.ZOtp, HTMLElement {}
export const ZOtp: {
    prototype: ZOtp;
    new (): ZOtp;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
