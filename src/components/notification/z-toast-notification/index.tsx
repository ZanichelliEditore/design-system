import {
  Component,
  Prop,
  h,
  Event,
  EventEmitter,
  Element,
  Host,
  State,
} from "@stencil/core";
import {
  ToastNotificationTransitionsEnum,
  ToastNotificationTransitionTypes,
  ToastNotificationTypes,
} from "../../../beans";
import { mobileBreakpoint } from "../../../constants/breakpoints";

import Hammer from "hammerjs";

@Component({
  tag: "z-toast-notification",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZToastNotification {
  @Element() hostElement: HTMLElement;

  /** toast notification's title */
  @Prop() heading?: string;
  /** toast notification's message */
  @Prop() message: string;
  /** toggles closing button rendering */
  @Prop() closebutton: boolean;
  /** toast notification closing timeout (ms) */
  @Prop() autoclose?: number;
  /** toast notification autoclose can be paused */
  @Prop() pauseonfocusloss?: boolean = true;
  /** toast notification type:  dark, light, accent, error, success, warning*/
  @Prop() type?: ToastNotificationTypes;
  /** toast notification can be draggable*/
  @Prop() isdraggable?: boolean = true;
  /** toast notification draggable percentage*/
  @Prop() draggablepercentage?: number = 80;
  /** toast notification animation type: slide-in-left, slide-in-right, slide-in-down, slide-in-up*/
  @Prop() transition?: ToastNotificationTransitionTypes;

  @State() percentage: number;
  @State() isTextLong: boolean;

  private container!: HTMLElement;
  private toastText!: HTMLElement;

  private elapsedTime: number;
  private timeoutHandle: any;
  private startTime: number;
  private isMobile: boolean;
  private isCloseEventCalled: boolean = false;

  /** notification close event */
  @Event() toastClose: EventEmitter;
  emitToastClose(cssClass: string) {
    this.timeoutHandle = null;
    this.elapsedTime = null;
    this.hostElement.classList.add(cssClass);
  }

  connectedCallback() {
    this.percentage = 0;
  }

  disconnectedCallback() {
    this.toastClose.emit();
  }

  componentWillLoad() {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
    this.validateAutoclose();
  }

  componentDidLoad() {
    this.isTextLong = this.detectWrap() || this.toastText.offsetHeight > 20;
    this.startTime = Date.now();
    if (this.autoclose && this.pauseonfocusloss) {
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
          this.timeoutHandle && this.onBlur();
        } else {
          this.elapsedTime && this.onFocus();
        }
      });
    }

    this.isdraggable && this.handleSlideOutDragAnimation();
  }

  validateAutoclose() {
    if (!this.autoclose && !this.closebutton)
      console.error(
        "At least one between autoclose and closebutton must be present"
      );
  }

  mapSlideOutClass() {
    switch (this.transition) {
      case ToastNotificationTransitionsEnum.slideInDown:
        return ToastNotificationTransitionsEnum.slideOutUp;
      case ToastNotificationTransitionsEnum.slideInUp:
        return ToastNotificationTransitionsEnum.slideOutDown;
      case ToastNotificationTransitionsEnum.slideInLeft:
        return ToastNotificationTransitionsEnum.slideOutRight;
      case ToastNotificationTransitionsEnum.slideInRight:
        return ToastNotificationTransitionsEnum.slideOutLeft;
    }
  }

  handleSlideOutDragAnimation() {
    const sliderManager = new Hammer(this.hostElement);
    sliderManager.get("pan").set({
      direction: Hammer.DIRECTION_HORIZONTAL,
    });

    sliderManager.on("pan", (e) => {
      this.hostElement.style.transition = "none";
      this.hostElement.classList.remove(this.transition);
      const translateObj = {
        translate: "translateX( " + e.deltaX + "% )",
        translateBack: "translateX(0)",
      };

      if (
        e.eventType === Hammer.DIRECTION_LEFT ||
        e.eventType === Hammer.DIRECTION_RIGHT
      ) {
        this.percentage = e.deltaX;
        this.hostElement.style.transform = translateObj.translate;
        this.hostElement.style.opacity = `${ 100 - Math.abs(e.deltaX)}%`
        if (Math.abs(e.deltaX) > this.draggablepercentage && !this.isCloseEventCalled) {
          this.isCloseEventCalled = true;
          this.emitToastClose(
            e.direction === Hammer.DIRECTION_LEFT
              ? "slide-out-left"
              : "slide-out-right"
          );
        }
      }

      if (e.isFinal && Math.abs(this.percentage) < this.draggablepercentage){
        this.hostElement.style.transform = translateObj.translateBack;
        this.hostElement.style.transition = "all 1s";
        this.hostElement.style.opacity = `100%`
        this.percentage = 0;
      }
    });
  }

  onFocus() {
    let time;
    time = this.autoclose;
    if (this.elapsedTime) {
      time = this.autoclose - this.elapsedTime;
    }
    if (time > 0) this.startClosingTimeout(time);
  }

  onBlur() {
    this.elapsedTime = Date.now() - this.startTime;
    clearTimeout(this.timeoutHandle);
  }

  startClosingTimeout(time: number) {
    this.timeoutHandle = setTimeout(
      () => this.emitToastClose(this.mapSlideOutClass()),
      time
    );
  }

  detectWrap() {
    const parentWidth = this.container.offsetWidth;
    const children = this.container.children;
    let totalWidth = 0;

    for (let i = 0; i < children.length; i++) {
      totalWidth += (children[i] as HTMLElement).offsetWidth;
    }

    return totalWidth > parentWidth;
  }

  renderText() {
    return (
      <div id="text" ref={(el) => (this.toastText = el as HTMLElement)}>
        <span class="title">{this.heading}</span>
        <span class="message">{this.message}</span>
      </div>
    );
  }

  renderButton() {
    return (
      <div id="button">
        <slot name="button" />
      </div>
    );
  }

  renderCloseIcon() {
    return (
      this.closebutton && (
        <div id="icon">
          <z-icon
            name="multiply-circled"
            width={15}
            height={15}
            onClick={() => this.emitToastClose(this.mapSlideOutClass())}
          />
        </div>
      )
    );
  }

  renderContainer() {
    return (
      <div
        id="external-container"
        class={{
          [this.type]: !!this.type,
          "several-lines-padding": this.isTextLong,
        }}
        ref={(el) => (this.container = el as HTMLElement)}
      >
        {this.renderText()}
        {this.renderButton()}
        {this.renderCloseIcon()}
      </div>
    );
  }

  renderMobileContainer() {
    return (
      <div
        id="external-container"
        class={{
          [this.type]: !!this.type,
          "several-lines-padding": this.isTextLong,
          "mobile-wrapped": this.isTextLong,
        }}
      >
        <div
          id="flex-container"
          ref={(el) => (this.container = el as HTMLElement)}
        >
          {this.renderText()}
          {this.renderButton()}
        </div>
        {this.renderCloseIcon()}
      </div>
    );
  }

  render() {
    return (
      <Host
        style={{
          ["--percentuale" as string]: `${this.percentage}%` as string,
        }}
        class={
          this.transition
            ? this.transition
            : ToastNotificationTransitionsEnum.slideInDown
        }
        onAnimationEnd={(e: AnimationEvent) => {
          if (this.autoclose && e.animationName.includes("slidein")) {
            this.startClosingTimeout(this.autoclose);
          }
          if (e.animationName.includes("slideout")) {
            this.hostElement.parentNode.removeChild(this.hostElement);
          }
        }}
      >
        {this.isMobile ? this.renderMobileContainer() : this.renderContainer()}
      </Host>
    );
  }
}
