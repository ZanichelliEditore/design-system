import { EventEmitter } from "../../stencil-public-runtime";
import { NotificationType } from "../../beans";
/**
 * Notification bar component.
 * @slot - The text of the notification.
 * @cssprop --z-notification--top-offset - The top offset of the notification. Use it when `sticky` prop is set to `true` and you need the notification to stay under other sticky elements. Default: 0px.
 */
export declare class ZNotification {
    /** Name of the icon on the left of the content */
    contenticonname?: string;
    /** Action button text */
    actiontext?: string;
    /** Alert variant type */
    type: NotificationType;
    /** Enable close icon */
    showclose?: boolean;
    /**
     * Enable shadow.
     * @deprecated shadow is available only for the `sticky` version of the notification.
     */
    showshadow?: boolean;
    /** Enable sticky notification bar. */
    sticky?: boolean;
    /** Call to action clicked */
    notificationAction: EventEmitter;
    private handleActionButtonClick;
    /** Close button clicked */
    notificationClose: EventEmitter;
    private handleCloseButtonClick;
    constructor();
    render(): HTMLZNotificationElement;
}
