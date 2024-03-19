import type { Components, JSX } from "../types/components";

interface ZAvatar extends Components.ZAvatar, HTMLElement {}
export const ZAvatar: {
    prototype: ZAvatar;
    new (): ZAvatar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
