import type { Components, JSX } from "../types/components";

interface ZFile extends Components.ZFile, HTMLElement {}
export const ZFile: {
    prototype: ZFile;
    new (): ZFile;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
