import { EventEmitter } from "../../../stencil-public-runtime";
import { ToastNotificationTransitionsEnum, ToastNotificationTransitionTypes, ToastNotificationTypes } from "../../../beans";
export declare class ZToastNotification {
  hostElement: HTMLElement;
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
  /** toast notification type:  dark, light, accent, error, success, warning*/
  type?: ToastNotificationTypes;
  /** toast notification can be draggable*/
  isdraggable?: boolean;
  /** toast notification draggable percentage*/
  draggablepercentage?: number;
  /** toast notification animation type: slide-in-left, slide-in-right, slide-in-down, slide-in-up*/
  transition?: ToastNotificationTransitionTypes;
  percentage: number;
  isTextLong: boolean;
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
  emitToastClose(cssClass: string): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  visibilityChangeEventHandler: () => void;
  validateAutoclose(): void;
  mapSlideOutClass(): ToastNotificationTransitionsEnum.slideOutLeft | ToastNotificationTransitionsEnum.slideOutRight | ToastNotificationTransitionsEnum.slideOutDown | ToastNotificationTransitionsEnum.slideOutUp;
  calculateDraggedPercentage(e: any): number;
  handleSlideOutDragAnimation(): void;
  onFocus(): void;
  onBlur(): void;
  startClosingTimeout(time: number): void;
  detectWrap(): boolean;
  renderText(): any;
  renderButton(): any;
  renderCloseIcon(): any;
  renderContainer(): any;
  renderMobileContainer(): any;
  render(): any;
}
