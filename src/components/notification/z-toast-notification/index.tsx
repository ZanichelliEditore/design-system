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
  mapSlideOutDirection() {
    switch (this.transition) {
      case ToastNotificationTransitionsEnum.slideInDown:
        return Hammer.DIRECTION_UP;
      case ToastNotificationTransitionsEnum.slideInUp:
        return Hammer.DIRECTION_DOWN;
      case ToastNotificationTransitionsEnum.slideInLeft:
        return Hammer.DIRECTION_RIGHT;
      case ToastNotificationTransitionsEnum.slideInRight:
        return Hammer.DIRECTION_LEFT;
    }
  }

  mapSlideOuClass() {
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

  mapSlideOutTranslate(event) {
    switch (this.transition) {
      case ToastNotificationTransitionsEnum.slideInDown:
        return {
          translate: "translateY( " + event.deltaY + "% )",
          translateBack: "translateY(0)",
        };
      case ToastNotificationTransitionsEnum.slideInUp:
        return {
          translate: "translateY( " + event.deltaY + "% )",
          translateBack: "translateY(0)",
        };
      case ToastNotificationTransitionsEnum.slideInLeft:
        return {
          translate: "translateX( " + event.deltaX + "% )",
          translateBack: "translateX(0)",
        };
      case ToastNotificationTransitionsEnum.slideInRight:
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
        direction: this.mapSlideOutDirection(),
      })
    );
    sliderManager.on("pan", (e) => {
      this.hostElement.classList.remove(this.transition);
      this.percentage = this.calculatePercentageToBeDragged();
      const translateObj = this.mapSlideOutTranslate(e);
      
      if (e.direction === e.offsetDirection && e.direction === this.mapSlideOutDirection()) {
        this.hostElement.style.transform = translateObj.translate;
      }
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
    const parentBounding = (this.hostElement.parentNode as HTMLElement).getBoundingClientRect();
    const relativePos = {      
      top : bounding.top - parentBounding.top,
      right : bounding.right - parentBounding.right,
      bottom : bounding.bottom - parentBounding.bottom,
      left : bounding.left - parentBounding.left
    };

    switch (this.transition) {
      case ToastNotificationTransitionsEnum.slideInLeft:
        return Math.round((100 * Math.abs(relativePos.left)) / bounding.width);
      case ToastNotificationTransitionsEnum.slideInRight:
        return Math.round((100 * Math.abs(relativePos.right)) / bounding.width) * -1;
      case ToastNotificationTransitionsEnum.slideInDown:
        return Math.round((100 * Math.abs(relativePos.top)) / bounding.height) * -1;
      case ToastNotificationTransitionsEnum.slideInUp:
        return Math.round((100 * Math.abs(relativePos.bottom)) / bounding.height);
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

  renderText() {
    return <div id="text" ref={(el) => (this.toastText = el as HTMLElement)}>
      <span class="title">{this.heading}</span>
      <span class="message">{this.message}</span>
    </div>
  }

  renderButton() {
    return <div id="button">
      <slot name="button" />
    </div>
  }

  renderCloseIcon() {
    return this.closebutton && <div id="icon">
        <z-icon
          name="multiply-circled"
          width={15}
          height={15}
          onClick={() => this.emitToastClose()}
        />
    </div>
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
          "mobile-wrapped": this.isTextLong
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
        style={{ ["--percentuale" as any]: `${this.percentage}%` as any }}
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
