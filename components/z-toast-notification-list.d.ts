import type { Components, JSX } from "../types/components";

interface ZToastNotificationList extends Components.ZToastNotificationList, HTMLElement {}
export const ZToastNotificationList: {
    prototype: ZToastNotificationList;
    new (): ZToastNotificationList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
