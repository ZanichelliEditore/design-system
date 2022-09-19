import {Component, Prop, h, Event, EventEmitter, Element, Host, State, Watch} from "@stencil/core";
import {
  ToastNotificationTransitionsEnum,
  ToastNotificationTransitionTypes,
  ToastNotificationTypes,
} from "../../../beans";
import {mobileBreakpoint} from "../../../constants/breakpoints";

import Hammer from "hammerjs";
import {HostElement} from "@stencil/core/internal";

@Component({
  tag: "z-toast-notification",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZToastNotification {
  @Element() hostElement: HTMLZToastNotificationElement;

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

  private sliderManager: any;

  private elapsedTime: number;
  private timeoutHandle: any;
  private startTime: number;
  private isMobile: boolean;
  private isCloseEventCalled = false;

  @Watch("isdraggable")
  watchPropIsdraggable(newValue: boolean): void {
    if (newValue) {
      this.sliderManager.get("pan").set({enable: true});
    } else {
      this.sliderManager.get("pan").set({enable: false});
    }
  }

  @Watch("autoclose")
  watchPropAutoclose(newValue: number): void {
    clearTimeout(this.timeoutHandle);
    this.startClosingTimeout(newValue);
  }

  @Watch("pauseonfocusloss")
  watchPropPauseonfocusloss(newValue: boolean): void {
    if (this.autoclose) {
      if (newValue) {
        document.addEventListener("visibilitychange", this.visibilityChangeEventHandler);
      } else {
        document.removeEventListener("visibilitychange", this.visibilityChangeEventHandler);
      }
    }
  }

  /** notification close event */
  @Event() toastClose: EventEmitter;
  emitToastClose(cssClass: string): void {
    this.timeoutHandle = null;
    this.elapsedTime = null;
    this.hostElement.classList.add(cssClass);
    this.toastClose.emit();
  }

  componentWillLoad(): void {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
    this.validateAutoclose();
  }

  componentDidLoad(): void {
    this.isTextLong = this.detectWrap() || this.toastText.offsetHeight > 20;
    this.startTime = Date.now();
    if (this.autoclose && this.pauseonfocusloss) {
      document.addEventListener("visibilitychange", this.visibilityChangeEventHandler);
    }

    this.isdraggable && this.handleSlideOutDragAnimation();

    this.percentage = 0;
  }

  visibilityChangeEventHandler(): void {
    if (document.visibilityState === "hidden") {
      this.timeoutHandle && this.onBlur();
    } else {
      this.elapsedTime && this.onFocus();
    }
  }

  validateAutoclose(): void {
    if (!this.autoclose && !this.closebutton)
      console.error("At least one between autoclose and closebutton must be present");
  }

  mapSlideOutClass(): ToastNotificationTransitionsEnum {
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

  calculateDraggedPercentage(e): number {
    const bounding = this.hostElement.getBoundingClientRect();

    return Math.round((100 * e.deltaX) / bounding.width);
  }

  handleSlideOutDragAnimation(): void {
    this.sliderManager = new Hammer(this.hostElement);
    this.sliderManager.get("pan").set({
      direction: Hammer.DIRECTION_HORIZONTAL,
    });

    this.sliderManager.on("pan", (e) => {
      this.percentage = this.calculateDraggedPercentage(e);
      this.hostElement.style.transition = "none";
      this.hostElement.classList.remove(this.transition);
      const translateObj = {
        translate: "translateX( " + this.percentage + "% )",
        translateBack: "translateX(0)",
      };

      this.hostElement.style.opacity = `${100 - Math.abs(this.percentage)}%`;
      if (e.eventType === Hammer.DIRECTION_LEFT || e.eventType === Hammer.DIRECTION_RIGHT) {
        this.hostElement.style.transform = translateObj.translate;
        if (Math.abs(this.percentage) > this.draggablepercentage && !this.isCloseEventCalled) {
          this.isCloseEventCalled = true;
          this.emitToastClose(e.direction === Hammer.DIRECTION_LEFT ? "slide-out-left" : "slide-out-right");
        }
      }

      if (e.isFinal && Math.abs(this.percentage) < this.draggablepercentage) {
        this.hostElement.style.transform = translateObj.translateBack;
        this.hostElement.style.transition = "all 1s";
        this.hostElement.style.opacity = `100%`;
        this.percentage = 0;
      }
    });
  }

  onFocus(): void {
    let time;
    time = this.autoclose;
    if (this.elapsedTime) {
      time = this.autoclose - this.elapsedTime;
    }
    if (time > 0) {
      this.startClosingTimeout(time);
    }
  }

  onBlur(): void {
    this.elapsedTime = Date.now() - this.startTime;
    clearTimeout(this.timeoutHandle);
  }

  startClosingTimeout(time: number): void {
    this.timeoutHandle = setTimeout(() => this.emitToastClose(this.mapSlideOutClass()), time);
  }

  detectWrap(): void {
    const parentWidth = this.container.offsetWidth;
    const children = this.container.children;
    let totalWidth = 0;

    for (let i = 0; i < children.length; i++) {
      totalWidth += (children[i] as HTMLElement).offsetWidth;
    }

    return totalWidth > parentWidth;
  }

  renderText(): HTMLDivElement {
    return (
      <div
        id="text"
        ref={(el) => (this.toastText = el as HTMLElement)}
      >
        <span class="title">{this.heading}</span>
        <span class="message">{this.message}</span>
      </div>
    );
  }

  renderButton(): HTMLDivElement {
    return (
      <div id="button">
        <slot name="button" />
      </div>
    );
  }

  renderCloseIcon(): void | HTMLDivElement {
    return (
      this.closebutton && (
        <div id="icon">
          <z-icon
            tabIndex={0}
            name="multiply-circled"
            width={15}
            height={15}
            onClick={() => this.emitToastClose(this.mapSlideOutClass())}
            onKeyPress={(e) => {
              if (e.keyCode == 32 || e.keyCode == 13) {
                e.preventDefault();
                this.emitToastClose(this.mapSlideOutClass());
              }
            }}
          />
        </div>
      )
    );
  }

  renderContainer(): HTMLDivElement {
    return (
      <div
        tabIndex={0}
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

  renderMobileContainer(): HTMLDivElement {
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

  render(): HostElement {
    return (
      <Host
        style={{
          ["--percentuale" as string]: `${this.percentage}%` as string,
        }}
        class={this.transition ? this.transition : ToastNotificationTransitionsEnum.slideInDown}
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
