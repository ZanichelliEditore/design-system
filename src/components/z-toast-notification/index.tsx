import {
  Component,
  Prop,
  h,
  Event,
  EventEmitter,
  Element,
  Host,
  State,
  Watch,
} from "@stencil/core";
import {
  //ToastNotificationEnum,
  ToastNotificationTransisionsEnum,
  ToastNotificationTransisionTypes,
  ToastNotificationTypes,
} from "../../beans";
import { mobileBreakpoint } from "../../constants/breakpoints";

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
  /** toast notification's closing icon */
  @Prop() closebutton: boolean;
  /** toast notification can close by itself */
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
  @Prop() transition?: ToastNotificationTransisionTypes;

  @Watch("autoclose")
  validateAutoclose(newValue: string) {
    const isBlank = typeof newValue !== "number" || newValue === "";
    if (isBlank && !this.closebutton)
      throw new Error(
        "At least one between autoclose and closebutton must be present"
      );
  }

  @State() percentage: number;
  @State() isTextLong: boolean;

  private container: HTMLElement;
  private toastText: HTMLElement;

  private elapsedTime: number;
  private timeoutHandle: any;
  private startTime: number;
  private isMobile: boolean;

  /** notification close event */
  @Event() toastClose: EventEmitter;
  emitToastClose() {
    this.timeoutHandle = null;
    this.elapsedTime = null;
    this.handleCloseAnimation();
  }

  disconnectedCallback() {
    this.toastClose.emit();
  }

  componentWillLoad() {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }

  componentDidLoad() {
    this.startTime = Date.now();
    this.isTextLong = this.detectWrap() || this.toastText.offsetHeight > 20;
    console.log(this.isTextLong);
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

  mapSlideOutDirection() {
    switch (this.transition) {
      case ToastNotificationTransisionsEnum.slideInDown:
        return Hammer.DIRECTION_UP;
      case ToastNotificationTransisionsEnum.slideInUp:
        return Hammer.DIRECTION_DOWN;
      case ToastNotificationTransisionsEnum.slideInLeft:
        return Hammer.DIRECTION_RIGHT;
      case ToastNotificationTransisionsEnum.slideInRight:
        return Hammer.DIRECTION_LEFT;
    }
  }

  mapSlideOuClass() {
    switch (this.transition) {
      case ToastNotificationTransisionsEnum.slideInDown:
        return ToastNotificationTransisionsEnum.slideOutUp;
      case ToastNotificationTransisionsEnum.slideInUp:
        return ToastNotificationTransisionsEnum.slideOutDown;
      case ToastNotificationTransisionsEnum.slideInLeft:
        return ToastNotificationTransisionsEnum.slideOutRight;
      case ToastNotificationTransisionsEnum.slideInRight:
        return ToastNotificationTransisionsEnum.slideOutLeft;
    }
  }

  mapSlideOutTranslate(event) {
    switch (this.transition) {
      case ToastNotificationTransisionsEnum.slideInDown:
        return {
          translate: "translateY( " + event.deltaY + "% )",
          translateBack: "translateY(0)",
        };
      case ToastNotificationTransisionsEnum.slideInUp:
        return {
          translate: "translateY( " + event.deltaY + "% )",
          translateBack: "translateY(0)",
        };
      case ToastNotificationTransisionsEnum.slideInLeft:
        return {
          translate: "translateX( " + event.deltaX + "% )",
          translateBack: "translateX(0)",
        };
      case ToastNotificationTransisionsEnum.slideInRight:
        return {
          translate: "translateX( " + event.deltaX + "% )",
          translateBack: "translateX(0)",
        };
    }
  }

  handleSlideOutDragAnimation() {
    const sliderManager = new Hammer.Manager(this.hostElement);
    sliderManager.add(
      new Hammer.Pan({
        threshold: 0,
        pointers: 0,
        direction: Hammer.DIRECTION_ALL,
      })
    );
    sliderManager.on("pan", (e) => {
      this.hostElement.classList.remove(this.transition);
      this.percentage = this.calculatePercentageToBeDragged();
      const translateObj = this.mapSlideOutTranslate(e);
      if (e.direction === this.mapSlideOutDirection())
        this.hostElement.style.transform = translateObj.translate;
      if (e.isFinal) {
        if (
          Math.abs(this.calculatePercentageToBeDragged()) >
          this.draggablepercentage
        ) {
          this.emitToastClose();
        } else {
          this.hostElement.style.transform = translateObj.translateBack;
        }
      }
    });
  }

  calculatePercentageToBeDragged() {
    const bounding = this.hostElement.getBoundingClientRect();
    switch (this.transition) {
      case ToastNotificationTransisionsEnum.slideInLeft:
        return Math.round(
          ((100 * (window.innerWidth - bounding.right)) / bounding.width) * -1
        );
      case ToastNotificationTransisionsEnum.slideInRight:
        return (100 - Math.round((100 * bounding.right) / bounding.width)) * -1;
      case ToastNotificationTransisionsEnum.slideInDown:
        return (
          (100 - Math.round((100 * bounding.bottom) / bounding.height)) * -1
        );
      case ToastNotificationTransisionsEnum.slideInUp:
        return Math.round(
          ((100 * (window.innerHeight - bounding.bottom)) / bounding.height) *
            -1
        );
    }
  }

  handleCloseAnimation() {
    this.hostElement.classList.add(this.mapSlideOuClass());
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
    this.timeoutHandle = setTimeout(() => this.emitToastClose(), time);
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
        <div id="text" ref={(el) => (this.toastText = el as HTMLElement)}>
          <span class="title">{this.heading}</span>
          <span class="message">{this.message}</span>
        </div>
        <div id="button">
          <slot name="button" />
        </div>
        <div id="icon">
          {this.closebutton && (
            <z-icon
              name="multiply-circled"
              width={15}
              height={15}
              onClick={() => this.emitToastClose()}
            />
          )}
        </div>
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
          "mobile-wrapped": this.isTextLong
        }}
      >
        <div
          id="flex-container"
          ref={(el) => (this.container = el as HTMLElement)}
        >
          <div id="text">
            <span class="title">{this.heading}</span>
            <span class="message">{this.message}</span>
          </div>
          <div id="button">
            <slot name="button" />
          </div>
        </div>
        <div id="icon">
          {this.closebutton && (
            <z-icon
              name="multiply-circled"
              width={15}
              height={15}
              onClick={() => this.emitToastClose()}
            />
          )}
        </div>
      </div>
    );
  }

  render() {
    return (
      <Host
        style={{ ["--percentuale" as any]: `${this.percentage}%` as any }}
        class={this.transition ? this.transition : "slide-in-down"}
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
