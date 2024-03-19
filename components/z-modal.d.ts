import type { Components, JSX } from "../types/components";

interface ZModal extends Components.ZModal, HTMLElement {}
export const ZModal: {
    prototype: ZModal;
    new (): ZModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
