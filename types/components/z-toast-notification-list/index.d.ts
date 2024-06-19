import { ToastNotificationPosition } from "../../beans";
export declare class ZToastNotificationList {
    hostElement: HTMLZToastNotificationListElement;
    /**Set the position of toast notification list - top-left, top-centre, top-right, bottom-left, bottom-centre, bottom-right */
    position: ToastNotificationPosition;
    /**Set the entry position of new notification in the list */
    newestontop?: boolean;
    private notificationArray;
    watchPropNewestontop(newValue: boolean): void;
    componentWillLoad(): void;
    private handleNewestOnTop;
    private slotChangeHandler;
    render(): HTMLSlotElement;
}
