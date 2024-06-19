import { EventEmitter } from "../../stencil-public-runtime";
import { ToastNotification, ToastNotificationTransition } from "../../beans";
export declare class ZToastNotification {
    hostElement: HTMLZToastNotificationElement;
    /** toast notification's title */
    heading?: string;
    /** toast notification's message */
    message: string;
    /** toggles closing button rendering */
    closebutton: boolean;
    /** toast notification closing timeout (ms) */
    autoclose?: number;
    /** toast notification autoclose can be paused */
    pauseonfocusloss?: boolean;
    /** toast notification type: dark, light, accent, error, success, warning */
    type?: ToastNotification;
    /** toast notification can be draggable*/
    isdraggable?: boolean;
    /** toast notification draggable percentage*/
    draggablepercentage?: number;
    /** toast notification animation type: slide-in-left, slide-in-right, slide-in-down, slide-in-up*/
    transition?: ToastNotificationTransition;
    percentage: number;
    private isTextLong;
    private container;
    private toastText;
    private sliderManager;
    private elapsedTime;
    private timeoutHandle;
    private startTime;
    private isMobile;
    private isCloseEventCalled;
    watchPropIsdraggable(newValue: boolean): void;
    watchPropAutoclose(newValue: number): void;
    watchPropPauseonfocusloss(newValue: boolean): void;
    /** notification close event */
    toastClose: EventEmitter;
    private emitToastClose;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private visibilityChangeEventHandler;
    private validateAutoclose;
    private mapSlideOutClass;
    private calculateDraggedPercentage;
    private handleSlideOutDragAnimation;
    private onFocus;
    private onBlur;
    private startClosingTimeout;
    private detectWrap;
    private renderText;
    private renderButton;
    private renderCloseIcon;
    private renderContainer;
    private renderMobileContainer;
    render(): HTMLZToastNotificationElement;
}
