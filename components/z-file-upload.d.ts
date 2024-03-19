import type { Components, JSX } from "../types/components";

interface ZFileUpload extends Components.ZFileUpload, HTMLElement {}
export const ZFileUpload: {
    prototype: ZFileUpload;
    new (): ZFileUpload;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
