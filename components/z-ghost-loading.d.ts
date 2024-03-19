import type { Components, JSX } from "../types/components";

interface ZGhostLoading extends Components.ZGhostLoading, HTMLElement {}
export const ZGhostLoading: {
    prototype: ZGhostLoading;
    new (): ZGhostLoading;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
